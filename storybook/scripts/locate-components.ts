/**
 * Maps a registry item name to the file it installed.
 *
 * Most items install as `<name>.tsx`, but target-pinned ones use their own
 * casing: AICSS's `thinking-state` lands as `ThinkingState.tsx`. Both spellings
 * are tried before an item counts as missing.
 */
import { componentExports, defaultComponentExport } from "./component-exports"
import { ITEM_FILES, keyFor } from "./overrides"

export const pascal = (name: string) =>
  name.replace(/(^|[-_])(\w)/g, (_, __, c: string) => c.toUpperCase())

export type Located = { path: string; exports: string[]; defaultExport: string | null }

export const locate = async (alias: string, name: string): Promise<Located | null> => {
  const namespace = `src/registries/${alias}`

  const pinned = ITEM_FILES[keyFor(alias, name)]
  if (pinned) {
    const path = `${namespace}/${pinned}`
    const source = await Bun.file(path).text()
    const exports = componentExports(source)
    const defaultExport = defaultComponentExport(source)
    return exports.length || defaultExport ? { path, exports, defaultExport } : null
  }

  // Most items install as `<name>.tsx`. Target-pinned ones keep their own
  // casing, and Watermelon's dashboards install as a directory with a demo entry.
  const wanted = new Set([
    `${name}.tsx`,
    `${pascal(name)}.tsx`,
    `${name}.ts`,
    `${name}/demo.tsx`,
    `${name}/index.tsx`,
  ])

  for await (const file of new Bun.Glob("**/*.{ts,tsx}").scan({ cwd: namespace })) {
    const parts = file.split("/")
    const base = parts.slice(-2).join("/")
    if (!wanted.has(parts[parts.length - 1]) && !wanted.has(base)) continue
    const path = `${namespace}/${file}`
    const source = await Bun.file(path).text()
    const exports = componentExports(source)
    const defaultExport = defaultComponentExport(source)
    if (exports.length || defaultExport) return { path, exports, defaultExport }
  }
  return null
}
