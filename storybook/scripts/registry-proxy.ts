/**
 * Serves a registry with its own dependencies named explicitly.
 *
 * The shadcn CLI resolves a bare `registryDependencies` entry against the
 * default registry. Watermelon's `navigation-1` depends on `navigation`, which
 * exists in Watermelon and not on ui.shadcn.com, so the install dies on a 404
 * for someone else's item.
 *
 * The proxy fetches the real item and rewrites each bare dependency the
 * registry's own index contains to `@<alias>/<name>`. Dependencies the registry
 * does not publish — `button`, `input` — are left alone so they still come from
 * ui.shadcn.com.
 */
import { fetchRegistryIndex } from "./registry-index"

export type Proxy = { url: string; stop: () => void; rewritten: number; repaired: number }

/**
 * `motion/react` is an import path, not a package, and `bun add motion/react`
 * fails. Several Watermelon items list one in `dependencies`.
 */
const packageRoot = (dependency: string) => {
  const [name, version] = dependency.split(/(?<!^)@/)
  const scoped = name.startsWith("@")
  const parts = name.split("/")
  const root = scoped ? parts.slice(0, 2).join("/") : parts[0]
  return version ? `${root}@${version}` : root
}

export const startRegistryProxy = async (
  alias: string,
  upstream: string,
  origin: string
): Promise<Proxy | null> => {
  const index = await fetchRegistryIndex(origin)

  // Watermelon serves `navigation` while leaving it out of its own index, so
  // the index is a cache to start from rather than the answer.
  const owned = new Map<string, boolean>((index ?? []).map((item) => [item.name, true]))
  let rewritten = 0
  let repaired = 0

  /**
   * Whether the registry really serves an item under this name.
   *
   * A 200 is not enough: registry.watermelon.sh answers every unknown path with
   * its SPA shell, so `navigation.json` is 200 text/html. Only a body that
   * parses as a registry item counts.
   */
  const serves = async (name: string) => {
    const known = owned.get(name)
    if (known !== undefined) return known

    let ok = false
    try {
      const response = await fetch(upstream.replace("{name}", name), { redirect: "follow" })
      ok = response.ok && (await response.json().then(() => true).catch(() => false))
    } catch {
      ok = false
    }
    owned.set(name, ok)
    return ok
  }

  const server = Bun.serve({
    port: 0,
    async fetch(request) {
      const name = new URL(request.url).pathname.replace(/^\/r\//, "").replace(/\.json$/, "")
      const response = await fetch(upstream.replace("{name}", name), { redirect: "follow" })
      if (!response.ok) return new Response(await response.text(), { status: response.status })

      const body = await response.text()
      let item: { registryDependencies?: string[]; dependencies?: string[] }
      try {
        item = JSON.parse(body)
      } catch {
        // The upstream answered with its SPA shell, which means no such item.
        return new Response(body, { status: 404 })
      }

      if (Array.isArray(item.dependencies)) {
        item.dependencies = item.dependencies.map((dependency) => {
          const root = packageRoot(dependency)
          if (root !== dependency) repaired++
          return root
        })
      }
      if (Array.isArray(item.registryDependencies)) {
        item.registryDependencies = await Promise.all(
          item.registryDependencies.map(async (dep) => {
            if (dep.includes("/") || dep.includes(":")) return dep
            if (!(await serves(dep))) return dep
            rewritten++
            return `@${alias}/${dep}`
          })
        )
      }

      return Response.json(item)
    },
  })

  return {
    url: `http://localhost:${server.port}/r/{name}.json`,
    stop: () => server.stop(true),
    get rewritten() {
      return rewritten
    },
    get repaired() {
      return repaired
    },
  }
}
