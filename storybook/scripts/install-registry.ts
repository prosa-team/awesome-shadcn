/**
 * Installs one registry's components into a namespace of its own.
 *
 * Nine registries publish their own `button`, `card`, and `tabs`, and thirteen
 * of the README's components collide by name outright, so a single
 * `src/components/ui` would let the last install win. Each registry instead
 * gets `src/registries/<alias>`, and `components.json` is pointed at it for the
 * duration of the install.
 *
 * Aliases alone are not enough. Registry items that declare an explicit
 * `target` — AICSS publishes its components as blocks targeting `src/*.tsx` —
 * ignore aliases entirely and land flat in `src`. Those get moved into the
 * namespace afterwards. Such items import only their sibling CSS module, so
 * moving the set together leaves their imports intact.
 *
 * Usage: bun scripts/install-registry.ts <alias> [--dry]
 */
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs"

import type { ManifestItem } from "./resolve-components"

const COMPONENTS_JSON = "components.json"
const SRC = "src"

/** Shared files a registry install may touch and must not have moved away. */
const SHARED = new Set(["src/index.css"])

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
  const glob = new Bun.Glob("**/*")
  const files = new Set<string>()
  for await (const file of glob.scan({ cwd: SRC, onlyFiles: true })) files.add(`${SRC}/${file}`)
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

/** Moves files that landed outside the namespace into it, flattening as it goes. */
const relocate = (alias: string, before: Set<string>, after: Set<string>) => {
  const namespace = namespaceOf(alias)
  const strays = [...after].filter(
    (file) => !before.has(file) && !file.startsWith(`${namespace}/`) && !SHARED.has(file)
  )
  if (!strays.length) return 0

  mkdirSync(namespace, { recursive: true })
  for (const stray of strays) {
    const target = `${namespace}/${stray.split("/").pop()}`
    if (existsSync(target)) continue
    renameSync(stray, target)
  }
  return strays.length
}

const [alias, ...flags] = process.argv.slice(2)
if (!alias) {
  console.error("usage: bun scripts/install-registry.ts <alias> [--dry]")
  process.exit(1)
}

const manifest: ManifestItem[] = JSON.parse(readFileSync("scripts/manifest.json", "utf8"))
const items = manifest.filter((i) => i.alias === alias && i.name)
if (!items.length) {
  console.error(`no installable items for alias "${alias}"`)
  process.exit(1)
}

const targets = items.map((i) => `@${alias}/${i.name}`)
console.log(`${alias}: ${targets.length} items -> ${namespaceOf(alias)}`)

if (flags.includes("--dry")) {
  console.log(targets.join("\n"))
  process.exit(0)
}

const before = await listSrc()
const original = readConfig()
writeConfig({ ...original, aliases: { ...original.aliases, ...aliasesFor(alias) } })

const failed: string[] = []
try {
  const batch = await shadcn(["add", ...targets, "--yes", "--overwrite"])
  if (!batch.ok) {
    console.log(`${alias}: batch failed, retrying one at a time`)
    for (const target of targets) {
      const single = await shadcn(["add", target, "--yes", "--overwrite"])
      if (!single.ok) failed.push(target)
    }
  }
} finally {
  writeConfig(original)
}

const moved = relocate(alias, before, await listSrc())

console.log(`${alias}: installed ${targets.length - failed.length}/${targets.length}`)
if (moved) console.log(`${alias}: relocated ${moved} target-pinned files into the namespace`)
for (const target of failed) console.log(`  FAILED ${target}`)
