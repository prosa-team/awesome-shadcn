/**
 * Marks vendored registry files that do not type-check as published.
 *
 * Reinstalling a registry overwrites its files, so any `@ts-nocheck` added by
 * hand is lost and the type check breaks again. The compiler is the source of
 * truth instead: whatever it rejects under `src/registries` gets the header,
 * and the run prints what it marked so a new defect is visible rather than
 * silently absorbed.
 *
 * This only covers third-party code. Errors anywhere else are left to fail.
 *
 * Usage: bun scripts/mark-type-defects.ts
 */
import { readFileSync, writeFileSync } from "node:fs"

const HEADER = "// @ts-nocheck -- published with a type error; see scripts/overrides.ts.\n"

const tsc = Bun.spawn(["bunx", "tsc", "-b", "--noEmit"], { stdout: "pipe", stderr: "pipe" })
const output =
  (await new Response(tsc.stdout).text()) + (await new Response(tsc.stderr).text())
await tsc.exited

const failing = new Set(
  [...output.matchAll(/^(src\/registries\/[^(]+)\(/gm)].map((match) => match[1])
)

for (const path of failing) {
  const source = readFileSync(path, "utf8")
  if (source.startsWith("// @ts-nocheck")) continue
  writeFileSync(path, HEADER + source)
  console.log(`  marked ${path}`)
}

console.log(`marked ${failing.size} vendored files`)
