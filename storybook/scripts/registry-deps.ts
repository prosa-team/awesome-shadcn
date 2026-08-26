/**
 * Expands README components into the closure of registry items they need.
 *
 * A registry component depends on its own registry's primitives: Extend's
 * Button takes `loading`, its ScrollArea takes `scrollFade`. Install only the
 * README's components and the CLI resolves those names against ui.shadcn.com
 * and writes stock versions without those props, which then fail to compile.
 *
 * Installing a registry's whole index would also work, but Unlumen publishes
 * 234 items for the 27 the README lists. Following `registryDependencies`
 * instead pulls in exactly what is needed.
 */
export type RegistryItem = { name: string; registryDependencies?: string[] }

/** A dependency naming another registry or a full URL is not ours to expand. */
const isSameRegistry = (dep: string) => !dep.includes("/") && !dep.includes(":")

export const expandDependencies = async (
  seeds: string[],
  itemUrl: (name: string) => string
): Promise<{ names: string[]; missing: string[] }> => {
  const seen = new Set<string>()
  const missing: string[] = []
  const queue = [...seeds]

  while (queue.length) {
    const name = queue.shift() as string
    if (seen.has(name)) continue
    seen.add(name)

    try {
      const res = await fetch(itemUrl(name), { redirect: "follow" })
      if (!res.ok) {
        missing.push(name)
        continue
      }
      const item = (await res.json()) as RegistryItem
      for (const dep of item.registryDependencies ?? []) {
        if (isSameRegistry(dep) && !seen.has(dep)) queue.push(dep)
      }
    } catch {
      missing.push(name)
    }
  }

  return { names: [...seen].sort(), missing }
}
