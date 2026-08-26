/**
 * Maps a registry item name to the file it installed.
 *
 * Most items install as `<name>.tsx`, but target-pinned ones use their own
 * casing: AICSS's `thinking-state` lands as `ThinkingState.tsx`. Both spellings
 * are tried before an item counts as missing.
 */
import { readFileSync } from "node:fs"

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
    const source = readFileSync(path, "utf8")
    const exports = componentExports(source)
    const defaultExport = defaultComponentExport(source)
    return exports.length || defaultExport ? { path, exports, defaultExport } : null
  }

  const wanted = new Set([`${name}.tsx`, `${pascal(name)}.tsx`, `${name}.ts`])

  for await (const file of new Bun.Glob("**/*.{ts,tsx}").scan({ cwd: namespace })) {
    const base = file.split("/").pop() as string
    if (!wanted.has(base)) continue
    const path = `${namespace}/${file}`
    const source = readFileSync(path, "utf8")
    const exports = componentExports(source)
    const defaultExport = defaultComponentExport(source)
    if (exports.length || defaultExport) return { path, exports, defaultExport }
  }
  return null
}
