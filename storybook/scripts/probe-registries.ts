/**
 * Checks every README component against its registry and writes the result to
 * `scripts/manifest.json`.
 *
 * Run it after the README changes. Everything downstream — which components get
 * installed, which get a story — reads the manifest rather than the README.
 */
import { readFileSync, writeFileSync } from "node:fs"

import { parseReadme } from "./parse-readme"
import { registryFor, registryUrl } from "./registries"

export type ManifestItem = {
  resource: string
  alias: string
  component: string
  name: string
  url: string
  docs: string
  useWhen: string
  status: number
}

const CONCURRENCY = 12

const head = async (url: string) => {
  try {
    const res = await fetch(url, { redirect: "follow" })
    return res.status
  } catch {
    return 0
  }
}

const mapWithLimit = async <T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>) => {
  const results: R[] = new Array(items.length)
  let cursor = 0
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const index = cursor++
        results[index] = await fn(items[index])
      }
    })
  )
  return results
}

const resources = parseReadme(readFileSync("../README.md", "utf8"))

const candidates = resources.flatMap((resource) => {
  const registry = registryFor(resource.name)
  if (!registry) return []

  return resource.components.flatMap((component) => {
    const target = registryUrl(registry, component.url)
    if (!target) return []
    return [
      {
        resource: resource.name,
        alias: registry.alias,
        component: component.name,
        name: target.name,
        url: target.url,
        docs: component.url,
        useWhen: component.useWhen,
      },
    ]
  })
})

const manifest: ManifestItem[] = await mapWithLimit(candidates, CONCURRENCY, async (c) => ({
  ...c,
  status: await head(c.url),
}))

writeFileSync("scripts/manifest.json", JSON.stringify(manifest, null, 2) + "\n")

const byResource = new Map<string, ManifestItem[]>()
for (const item of manifest) {
  const list = byResource.get(item.resource) ?? []
  list.push(item)
  byResource.set(item.resource, list)
}

for (const [resource, items] of byResource) {
  const ok = items.filter((i) => i.status === 200).length
  console.log(`${String(ok).padStart(4)}/${String(items.length).padEnd(4)} ${resource}`)
}
const ok = manifest.filter((i) => i.status === 200).length
console.log(`${String(ok).padStart(4)}/${String(manifest.length).padEnd(4)} TOTAL resolvable`)
