/**
 * Maps each README resource to its shadcn registry, where it has one.
 *
 * `slug` turns a README component URL into the registry item name. Most
 * registries name the item after the last path segment; the ones that do not
 * get their own function here.
 */
export type Registry = {
  /** README resource name, matched exactly. */
  resource: string
  /** components.json alias, without the leading `@`. */
  alias: string
  /** Registry URL template. `{name}` is replaced with the slug. */
  url: string
  slug?: (componentUrl: string) => string | null
}

const lastSegment = (url: string) =>
  new URL(url).pathname.replace(/\/$/, "").split("/").pop() ?? null

export const REGISTRIES: Registry[] = [
  { resource: "AICSS", alias: "aicss", url: "https://www.aicss.dev/r/{name}.json" },
  { resource: "Chánh Đại Components", alias: "ncdai", url: "https://chanhdai.com/r/{name}.json" },
  { resource: "Extend UI", alias: "extend", url: "https://ui.extend.ai/r/{name}.json" },
  {
    resource: "Fluid Functionalism",
    alias: "fluid",
    url: "https://www.fluidfunctionalism.com/r/{name}.json",
  },
  { resource: "interior.dev", alias: "interior", url: "https://interior.dev/r/{name}.json" },
  { resource: "Magic UI", alias: "magicui", url: "https://magicui.design/r/{name}.json" },
  { resource: "Unlumen UI", alias: "unlumen", url: "https://ui.unlumen.com/r/{name}.json" },
  { resource: "Supabase UI", alias: "supabase", url: "https://supabase.com/ui/r/{name}.json" },
  {
    resource: "Dot Matrix",
    alias: "dotmatrix",
    url: "https://dotmatrix.zzzzshawn.cloud/r/{name}.json",
    // Dot Matrix links already point at the registry JSON.
    slug: (url) => lastSegment(url)?.replace(/\.json$/, "") ?? null,
  },
]

export const registryFor = (resource: string) => REGISTRIES.find((r) => r.resource === resource)

export const registryUrl = (registry: Registry, componentUrl: string) => {
  const name = (registry.slug ?? lastSegment)(componentUrl)
  return name ? { name, url: registry.url.replace("{name}", name) } : null
}
