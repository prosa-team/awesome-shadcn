/**
 * Parses the repo README into a manifest of every listed component.
 *
 * The README is the single source of truth for what belongs in this Storybook,
 * so the manifest is derived from it rather than maintained by hand.
 */
export type ComponentEntry = {
  name: string
  url: string
  useWhen: string
}

export type ResourceEntry = {
  name: string
  url: string
  section: string
  components: ComponentEntry[]
}

const HEADING = /^## (?<section>.+)$/
const RESOURCE = /^### \[(?<name>.+?)\]\((?<url>[^)]+)\)$/
const ROW = /^\| \[(?<name>.+?)\]\((?<url>[^)]+)\) \| (?<useWhen>.+?) \|$/

export function parseReadme(markdown: string): ResourceEntry[] {
  const resources: ResourceEntry[] = []
  let section = ""
  let current: ResourceEntry | null = null

  for (const line of markdown.split("\n")) {
    const heading = HEADING.exec(line)
    if (heading?.groups) {
      section = heading.groups.section
      continue
    }

    const resource = RESOURCE.exec(line)
    if (resource?.groups) {
      current = {
        name: resource.groups.name,
        url: resource.groups.url,
        section,
        components: [],
      }
      resources.push(current)
      continue
    }

    const row = ROW.exec(line)
    if (row?.groups && current) {
      current.components.push({
        name: row.groups.name,
        url: row.groups.url,
        useWhen: row.groups.useWhen,
      })
    }
  }

  return resources
}

if (import.meta.main) {
  const resources = parseReadme(await Bun.file("../README.md").text())
  const total = resources.reduce((n, r) => n + r.components.length, 0)

  for (const r of resources) {
    console.log(`${String(r.components.length).padStart(4)}  ${r.section} / ${r.name}`)
  }
  console.log(`${String(total).padStart(4)}  TOTAL across ${resources.length} resources`)
}
