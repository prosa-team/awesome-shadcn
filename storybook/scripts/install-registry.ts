/**
 * Installs one registry into a namespace of its own.
 *
 * Thirteen README components collide by name across registries and every
 * registry ships its own `button` and `card`, so a shared `src/components/ui`
 * would let whichever registry ran last win. Each registry gets
 * `src/registries/<alias>`, and the install holds one invariant: every `@/`
 * import inside a namespace resolves inside that same namespace.
 *
 * Three things stand in the way of that, and each has a step here.
 *
 * A registry component needs its own registry's primitives. Extend's Button
 * takes `loading` and its ScrollArea takes `scrollFade`; install only the
 * README's components and the CLI resolves those names against ui.shadcn.com
 * and writes stock versions without those props. So the install list is the
 * closure over `registryDependencies`, not the README list.
 *
 * Registry items may pin a `target`, which the CLI honours over any alias.
 * Fluid's button pins `src/components/ui/button.tsx` and AICSS writes
 * `src/Orb.tsx`. Anything that lands outside the namespace is moved into it,
 * keeping its directory structure.
 *
 * Moving a file breaks the `@/` imports that point at its old path, so a final
 * pass rewrites every non-namespaced `@/` import inside the namespace to point
 * into it.
 *
 * Usage: bun scripts/install-registry.ts <alias> [--dry]
 */
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs"
import { dirname } from "node:path"

import { itemUrl, originOf, REGISTRIES } from "./registries"
import { BROKEN, EXTRA_ITEMS, STOCK_ITEMS, keyFor } from "./overrides"
import { expandDependencies } from "./registry-deps"
import type { ManifestItem } from "./resolve-components"

const COMPONENTS_JSON = "components.json"
const SRC = "src"

/** Rewritten to point into the namespace when a file moves out of shared space. */
const SHARED_PREFIXES = ["@/components/", "@/lib/", "@/hooks/", "@/registry/"]

const namespaceOf = (alias: string) => `${SRC}/registries/${alias}`

const aliasesFor = (alias: string) => ({
  components: `@/registries/${alias}`,
  ui: `@/registries/${alias}/ui`,
  lib: `@/registries/${alias}/lib`,
  hooks: `@/registries/${alias}/hooks`,
  utils: `@/registries/${alias}/lib/utils`,
})

const readConfig = () => JSON.parse(readFileSync(COMPONENTS_JSON, "utf8"))
const writeConfig = (config: unknown) =>
  writeFileSync(COMPONENTS_JSON, JSON.stringify(config, null, 2) + "\n")

const listSrc = async () => {
  const files = new Set<string>()
  for await (const file of new Bun.Glob("**/*").scan({ cwd: SRC, onlyFiles: true })) {
    files.add(`${SRC}/${file}`)
  }
  return files
}

const shadcn = async (args: string[]) => {
  const proc = Bun.spawn(["bunx", "--bun", "shadcn@latest", ...args], {
    stdout: "pipe",
    stderr: "pipe",
  })
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ])
  return { ok: exitCode === 0, output: stdout + stderr }
}

/** Moves anything that landed outside the namespace into it, structure intact. */
const relocate = (alias: string, before: Set<string>, after: Set<string>) => {
  const namespace = namespaceOf(alias)
  const strays = [...after].filter(
    (file) => !before.has(file) && !file.startsWith(`${namespace}/`) && file !== `${SRC}/index.css`
  )

  for (const stray of strays) {
    const target = `${namespace}/${stray.slice(SRC.length + 1)}`
    mkdirSync(dirname(target), { recursive: true })
    renameSync(stray, target)
  }
  return strays.length
}

/**
 * Writes the namespace's own `cn` helper.
 *
 * Every registry component imports `cn` from the utils alias, but the CLI
 * treats utils as satisfied once any `src/lib/utils.ts` exists and skips
 * writing a namespaced copy, leaving the import dangling.
 */
const writeUtils = (alias: string) => {
  const path = `${namespaceOf(alias)}/lib/utils.ts`
  if (existsSync(path)) return false
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(
    path,
    `import { clsx, type ClassValue } from "clsx"\nimport { twMerge } from "tailwind-merge"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n`
  )
  return true
}

/** Points every `@/` import inside the namespace back into the namespace. */
const normalizeImports = async (alias: string) => {
  const namespace = namespaceOf(alias)
  const prefix = `@/registries/${alias}/`
  let rewritten = 0

  for await (const file of new Bun.Glob("**/*.{ts,tsx,css}").scan({ cwd: namespace })) {
    const path = `${namespace}/${file}`
    const source = readFileSync(path, "utf8")
    let next = source
    for (const shared of SHARED_PREFIXES) {
      next = next.replaceAll(shared, `${prefix}${shared.slice(2)}`)
    }
    if (next !== source) {
      writeFileSync(path, next)
      rewritten++
    }
  }
  return rewritten
}

const [alias, ...flags] = process.argv.slice(2)
const registry = REGISTRIES.find((r) => r.alias === alias)
if (!registry) {
  console.error(`usage: bun scripts/install-registry.ts <alias> [--dry]`)
  console.error(`aliases: ${REGISTRIES.map((r) => r.alias).join(" ")}`)
  process.exit(1)
}

const manifest: ManifestItem[] = JSON.parse(readFileSync("scripts/manifest.json", "utf8"))
const seeds = manifest
  .filter((i) => i.alias === alias && i.name)
  .map((i) => i.name as string)
  .filter((name) => !BROKEN[keyFor(alias, name)])

const { names: expanded, missing } = await expandDependencies(
  [...seeds, ...(EXTRA_ITEMS[alias] ?? [])],
  (name) => itemUrl(registry, name)
)
const names = expanded.filter((name) => !BROKEN[keyFor(alias, name)] && !missing.includes(name))

const deps = names.length - seeds.length
console.log(
  `${alias}: ${names.length} items (${seeds.length} from the README` +
    `${deps > 0 ? `, ${deps} pulled in as dependencies` : ""}) -> ${namespaceOf(alias)}`
)
for (const name of missing) console.log(`  MISSING @${alias}/${name}`)

const targets = [...names.map((name) => `@${alias}/${name}`), ...(STOCK_ITEMS[alias] ?? [])]
if (flags.includes("--dry")) {
  console.log(targets.join("\n"))
  process.exit(0)
}

const before = await listSrc()
const original = readConfig()
writeConfig({ ...original, aliases: { ...original.aliases, ...aliasesFor(alias) } })

const failed: string[] = []
try {
  if (!(await shadcn(["add", ...targets, "--yes", "--overwrite"])).ok) {
    console.log(`${alias}: batch failed, retrying one at a time`)
    for (const target of targets) {
      if (!(await shadcn(["add", target, "--yes", "--overwrite"])).ok) failed.push(target)
    }
  }
} finally {
  writeConfig(original)
}

const moved = relocate(alias, before, await listSrc())
const utils = writeUtils(alias)
const rewritten = await normalizeImports(alias)

console.log(`${alias}: installed ${names.length - failed.length}/${names.length}`)
if (moved) console.log(`${alias}: moved ${moved} target-pinned files into the namespace`)
if (utils) console.log(`${alias}: wrote the namespace's own lib/utils.ts`)
if (rewritten) console.log(`${alias}: rewrote imports in ${rewritten} files`)
for (const target of failed) console.log(`  FAILED ${target}`)
