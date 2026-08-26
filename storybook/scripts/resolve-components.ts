/**
 * Resolves every README component to a registry item and writes
 * `scripts/manifest.json`.
 *
 * Resolution prefers a registry's own index, because the README's link slug and
 * the registry's item name disagree often enough that guessing is not a
 * strategy. Registries without an index fall back to probing each candidate
 * URL.
 *
 * Run it after the README changes; everything downstream reads the manifest.
 */
import { readFileSync, writeFileSync } from "node:fs"

import { parseReadme } from "./parse-readme"
import { candidatesFor, itemUrl, originOf, registryFor, type Registry } from "./registries"
import { fetchRegistryIndex, normalize, type IndexItem } from "./registry-index"
import { OVERRIDES, SKIPPED, keyFor } from "./overrides"

export type ManifestItem = {
  resource: string
  alias: string
  /** Name as the README writes it. */
  component: string
  /** Registry item name, once resolved. */
  name: string | null
  url: string | null
  docs: string
  useWhen: string
  /** How the item was found, or why it was not. */
  via: "index" | "probe" | "override" | "skipped" | "unresolved"
  /** Why the component has no registry item, for `skipped`. */
  reason?: string
}

const CONCURRENCY = 12

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

const exists = async (url: string) => {
  try {
    return (await fetch(url, { redirect: "follow" })).ok
  } catch {
    return false
  }
}

const findInIndex = (index: IndexItem[], candidates: string[], componentName: string) => {
  for (const candidate of candidates) {
    const exact = index.find((item) => item.name === candidate)
    if (exact) return exact.name
  }

  const wanted = new Set([...candidates.map(normalize), normalize(componentName)])
  const loose = index.find(
    (item) => wanted.has(normalize(item.name)) || (item.title && wanted.has(normalize(item.title)))
  )
  return loose?.name ?? null
}

const resources = parseReadme(readFileSync("../README.md", "utf8"))
const indexes = new Map<string, IndexItem[] | null>()

for (const resource of resources) {
  const registry = registryFor(resource.name)
  if (!registry || indexes.has(registry.alias)) continue
  indexes.set(registry.alias, await fetchRegistryIndex(originOf(registry)))
}

type Candidate = { registry: Registry; resource: string; component: string; docs: string; useWhen: string }

const candidates: Candidate[] = resources.flatMap((resource) => {
  const registry = registryFor(resource.name)
  if (!registry) return []
  return resource.components.map((component) => ({
    registry,
    resource: resource.name,
    component: component.name,
    docs: component.url,
    useWhen: component.useWhen,
  }))
})

const manifest: ManifestItem[] = await mapWithLimit(candidates, CONCURRENCY, async (c) => {
  const names = candidatesFor(c.registry, c.docs, c.component)
  const base = {
    resource: c.resource,
    alias: c.registry.alias,
    component: c.component,
    docs: c.docs,
    useWhen: c.useWhen,
  }

  const key = keyFor(c.registry.alias, c.component)

  const skipped = SKIPPED[key]
  if (skipped) return { ...base, name: null, url: null, via: "skipped" as const, reason: skipped }

  const override = OVERRIDES[key]
  if (override) {
    return { ...base, name: override, url: itemUrl(c.registry, override), via: "override" as const }
  }

  const index = indexes.get(c.registry.alias)
  if (index) {
    const name = findInIndex(index, names, c.component)
    if (name) return { ...base, name, url: itemUrl(c.registry, name), via: "index" as const }
  }

  for (const name of names) {
    const url = itemUrl(c.registry, name)
    if (await exists(url)) return { ...base, name, url, via: "probe" as const }
  }

  return { ...base, name: null, url: null, via: "unresolved" as const }
})

writeFileSync("scripts/manifest.json", JSON.stringify(manifest, null, 2) + "\n")

const byResource = new Map<string, ManifestItem[]>()
for (const item of manifest) {
  byResource.set(item.resource, [...(byResource.get(item.resource) ?? []), item])
}

for (const [resource, items] of byResource) {
  const ok = items.filter((i) => i.url).length
  const skipped = items.filter((i) => i.via === "skipped").length
  const unresolved = items.length - ok - skipped
  const flag = unresolved ? "!" : " "
  const note = skipped ? ` (${skipped} skipped)` : ""
  console.log(`${flag} ${String(ok).padStart(4)}/${String(items.length).padEnd(4)} ${resource}${note}`)
}

const ok = manifest.filter((i) => i.url).length
const skipped = manifest.filter((i) => i.via === "skipped").length
console.log(`  ${String(ok).padStart(4)}/${String(manifest.length).padEnd(4)} TOTAL installable, ${skipped} skipped`)

for (const item of manifest.filter((i) => i.via === "unresolved")) {
  console.log(`  UNRESOLVED  ${item.alias}  ${item.component}  ${item.docs}`)
}
