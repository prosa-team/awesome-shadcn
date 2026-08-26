/**
 * Finds the React components a registry file exports.
 *
 * A story needs a component to point at, and the file name rarely gives it:
 * `dotm-square-1.tsx` exports `DotmSquare1`, `copy-button.tsx` exports both
 * `CopyButton` and `CopyStateIcon`. Matching an exported PascalCase binding is
 * enough — Storybook's docgen reads the props off it from there.
 */
const PATTERNS = [
  /export\s+(?:default\s+)?function\s+([A-Z]\w*)/g,
  /export\s+const\s+([A-Z]\w*)\s*[:=]/g,
  /export\s*\{([^}]+)\}/g,
]

/** Exported names that are types, variants, or helpers rather than components. */
const NOT_A_COMPONENT = /^(?:use[A-Z]|[A-Z]\w*(?:Props|Context|Variants|Options|Type|Schema)$)/

/** True when the file's default export is its component, e.g. Magic UI's Text3DFlip. */
export const hasDefaultComponentExport = (source: string) =>
  /export\s+default\s+(?:function\s+)?[A-Z]\w*/.test(source)

export const defaultComponentExport = (source: string) =>
  source.match(/export\s+default\s+(?:function\s+)?([A-Z]\w*)/)?.[1] ?? null

/** `export const Foo = { Provider, Trigger }` is a namespace object, not a component. */
const NAMESPACE_OBJECT = /export\s+const\s+([A-Z]\w*)\s*(?::[^=]+)?=\s*\{/g

export const componentExports = (source: string): string[] => {
  const names = new Set<string>()
  const namespaces = new Set([...source.matchAll(NAMESPACE_OBJECT)].map((m) => m[1]))

  for (const pattern of PATTERNS) {
    for (const match of source.matchAll(pattern)) {
      for (const raw of match[1].split(",")) {
        // Handles `export { Foo as Bar }` and `export { type Baz }`.
        const name = raw.trim().split(/\s+as\s+/).pop()?.trim() ?? ""
        if (/^[A-Z]\w*$/.test(name) && !NOT_A_COMPONENT.test(name) && !namespaces.has(name)) {
          names.add(name)
        }
      }
    }
  }

  return [...names]
}
