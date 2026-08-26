/**
 * Fetches a shadcn registry's index, where the registry publishes one.
 *
 * An index turns slug guessing into a lookup: the README calls a component
 * "React Wheel Picker" and links to `/components/react-wheel-picker`, but the
 * registry item is named `wheel-picker`. Only the index can bridge that.
 */
export type IndexItem = { name: string; type?: string; title?: string; description?: string }

const INDEX_PATHS = ["/r/registry.json", "/registry.json"]

export const fetchRegistryIndex = async (origin: string): Promise<IndexItem[] | null> => {
  for (const path of INDEX_PATHS) {
    try {
      const res = await fetch(new URL(path, origin), { redirect: "follow" })
      if (!res.ok) continue
      const body = (await res.json()) as { items?: IndexItem[] }
      if (Array.isArray(body.items) && body.items.length) return body.items
    } catch {
      // Try the next path; a registry without an index is expected, not an error.
    }
  }
  return null
}

/** Lowercase alphanumerics only, so "React Wheel Picker" and "wheel-picker" can meet. */
export const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "")
