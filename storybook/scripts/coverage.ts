/**
 * Reports where every README component ended up.
 *
 * Counts are measured, not derived: a component has a story if the built
 * Storybook indexed one under its title, and it renders if the smoke run says
 * so. Anything missing is looked up in `overrides.ts` for the reason, because
 * the gap is the interesting part — a registry behind a licence, a component
 * broken as published, a resource with no registry at all.
 *
 * Usage: bun run build-storybook && bun scripts/smoke-stories.ts && bun run coverage
 */
import { parseReadme } from "./parse-readme"
import {
  BROKEN,
  EXCLUDED_RESOURCES,
  NOT_RENDERABLE,
  NO_REGISTRY,
  SKIPPED,
  keyFor,
} from "./overrides"
import type { ManifestItem } from "./resolve-components"

const read = async <T,>(path: string, fallback: T): Promise<T> => {
  try {
    return JSON.parse(await Bun.file(path).text()) as T
  } catch {
    return fallback
  }
}

const resources = parseReadme(await Bun.file("../README.md").text())
const manifest = await read<ManifestItem[]>("scripts/manifest.json", [])
const smoke = await read<{ title: string; ok: boolean }[]>("scripts/smoke-report.json", [])
const index = await read<{ entries: Record<string, { title: string; type: string }> }>(
  "storybook-static/index.json",
  { entries: {} }
)

const titled = new Set(
  Object.values(index.entries)
    .filter((entry) => entry.type === "story")
    .map((entry) => entry.title)
)
const rendering = new Set(
  smoke.filter((s) => s.ok).map((s) => s.title.split(" / ").slice(0, -1).join(" / "))
)
const items = new Map(manifest.map((item) => [`${item.resource}::${item.component}`, item]))

/** Why a component has no story, in the order the reasons apply. */
const absence = (resource: string, component: string) => {
  if (NO_REGISTRY[resource]) return "no registry"

  const item = items.get(`${resource}::${component}`)
  if (!item) return "not in the manifest"
  if (item.alias && EXCLUDED_RESOURCES[item.alias]) return "registry excluded"
  if (item.via === "skipped") return item.reason?.includes("licence") ? "licensed" : "no item"
  if (!item.name) return "unresolved"

  const key = keyFor(item.alias, item.name)
  if (BROKEN[key]) return "broken upstream"
  if (NOT_RENDERABLE[key]) return "not a component"
  return "install failed"
}

const pad = (value: string | number, width: number) => String(value).padStart(width)

console.log(`${"Resource".padEnd(26)}${pad("listed", 8)}${pad("story", 7)}${pad("renders", 9)}`)
console.log("-".repeat(50))

const reasons = new Map<string, number>()
const totals = { listed: 0, story: 0, renders: 0 }

for (const resource of resources) {
  if (!resource.components.length) continue

  let story = 0
  let renders = 0

  for (const component of resource.components) {
    const title = `${resource.name}/${component.name}`
    if (titled.has(title)) {
      story++
      if (rendering.has(title)) renders++
      continue
    }
    const reason = absence(resource.name, component.name)
    reasons.set(reason, (reasons.get(reason) ?? 0) + 1)
  }

  totals.listed += resource.components.length
  totals.story += story
  totals.renders += renders

  console.log(
    `${resource.name.padEnd(26)}${pad(resource.components.length, 8)}${pad(story, 7)}${pad(renders, 9)}`
  )
}

console.log("-".repeat(50))
console.log(`${"TOTAL".padEnd(26)}${pad(totals.listed, 8)}${pad(totals.story, 7)}${pad(totals.renders, 9)}`)

console.log("\nWhy the rest have no story:")
for (const [reason, count] of [...reasons].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${pad(count, 4)}  ${reason}`)
}

console.log("\nResources with no registry:")
for (const [name, reason] of Object.entries(NO_REGISTRY)) console.log(`  ${name}: ${reason}`)

void SKIPPED

if (process.argv.includes("--detail")) {
  console.log("\nComponents with no story:")
  for (const resource of resources) {
    for (const component of resource.components) {
      const title = `${resource.name}/${component.name}`
      if (titled.has(title)) continue
      const reason = absence(resource.name, component.name)
      if (reason === "no registry" || reason === "registry excluded") continue
      console.log(`  ${reason.padEnd(18)} ${title}`)
    }
  }
}
