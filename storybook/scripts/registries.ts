/**
 * Maps each README resource to its shadcn registry.
 *
 * `candidates` produces the registry item names to try for one README
 * component, best guess first. Most registries name an item after the last
 * path segment of its docs URL; the ones that do not get extra candidates
 * here. Resolution still prefers the registry index when there is one, so
 * these are a fallback rather than the primary mechanism.
 */
export type Registry = {
  /** README resource name, matched exactly. */
  resource: string
  /** components.json alias, without the leading `@`. */
  alias: string
  /** Registry URL template. `{name}` is replaced with the item name. */
  url: string
  candidates?: (componentUrl: string, componentName: string) => string[]
}

export const lastSegment = (url: string) => {
  const { pathname, hash } = new URL(url)
  // Several resources list blocks as anchors on one page, e.g. /ui/blocks#e-signature.
  if (hash) return hash.slice(1)
  return pathname.replace(/\/$/, "").split("/").pop() ?? ""
}

const withSuffixes = (...suffixes: string[]) =>
  (url: string) => {
    const base = lastSegment(url)
    return [base, ...suffixes.map((s) => `${base}${s}`)]
  }

export const REGISTRIES: Registry[] = [
  { resource: "AICSS", alias: "aicss", url: "https://www.aicss.dev/r/{name}.json" },
  { resource: "Chánh Đại Components", alias: "ncdai", url: "https://chanhdai.com/r/{name}.json" },
  {
    resource: "Extend UI",
    alias: "extend",
    url: "https://ui.extend.ai/r/{name}.json",
    candidates: withSuffixes("-block"),
  },
  {
    resource: "Fluid Functionalism",
    alias: "fluid",
    url: "https://www.fluidfunctionalism.com/r/{name}.json",
  },
  { resource: "interior.dev", alias: "interior", url: "https://interior.dev/r/{name}.json" },
  { resource: "Magic UI", alias: "magicui", url: "https://magicui.design/r/{name}.json" },
  { resource: "Unlumen UI", alias: "unlumen", url: "https://ui.unlumen.com/r/{name}.json" },
  // Only ReUI's 22 free components resolve; the rest answer 401 without a licence key.
  { resource: "ReUI", alias: "reui", url: "https://reui.io/r/{name}.json" },
  // The registry lives on its own host, which the docs site never links to.
  {
    resource: "Watermelon UI",
    alias: "watermelon",
    url: "https://registry.watermelon.sh/r/{name}.json",
  },
  {
    resource: "Supabase UI",
    alias: "supabase",
    url: "https://supabase.com/ui/r/{name}.json",
    // Supabase publishes one item per framework, e.g. dropzone-nextjs.
    candidates: withSuffixes("-nextjs", "-react"),
  },
  {
    resource: "Dot Matrix",
    alias: "dotmatrix",
    url: "https://dotmatrix.zzzzshawn.cloud/r/{name}.json",
    // Dot Matrix links already point at the registry JSON.
    candidates: (url) => [lastSegment(url).replace(/\.json$/, "")],
  },
]

export const registryFor = (resource: string) => REGISTRIES.find((r) => r.resource === resource)

export const candidatesFor = (registry: Registry, componentUrl: string, componentName: string) =>
  (registry.candidates ?? ((url: string) => [lastSegment(url)]))(componentUrl, componentName)

export const itemUrl = (registry: Registry, name: string) =>
  registry.url.replace("{name}", name)

export const originOf = (registry: Registry) => new URL(itemUrl(registry, "x")).origin
