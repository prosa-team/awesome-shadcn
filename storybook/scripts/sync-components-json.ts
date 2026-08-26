/**
 * Writes the `registries` block of components.json from `registries.ts`.
 *
 * Two lists of registry URLs would drift, so the TypeScript one wins and this
 * projects it into the config the shadcn CLI reads.
 */
import { readFileSync, writeFileSync } from "node:fs"

import { REGISTRIES } from "./registries"

const config = JSON.parse(readFileSync("components.json", "utf8"))
config.registries = Object.fromEntries(REGISTRIES.map((r) => [`@${r.alias}`, r.url]))
writeFileSync("components.json", JSON.stringify(config, null, 2) + "\n")

console.log(`components.json: ${REGISTRIES.length} registries`)
for (const r of REGISTRIES) console.log(`  @${r.alias}  ${r.url}`)
