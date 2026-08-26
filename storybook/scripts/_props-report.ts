import { readFileSync } from "node:fs"
import { locate, pascal } from "./locate-components"
import { requiredProps } from "./component-props"

const report = JSON.parse(readFileSync("scripts/smoke-report.json", "utf8")) as {
  id: string; title: string; ok: boolean
}[]
const failedTitles = report.filter((r) => !r.ok).map((r) => r.title.split(" / ")[0])

const manifest = JSON.parse(readFileSync("scripts/manifest.json", "utf8")) as {
  alias: string; name: string | null; component: string; resource: string
}[]

for (const item of manifest) {
  if (!item.name) continue
  if (!failedTitles.includes(`${item.resource}/${item.component}`)) continue
  const located = await locate(item.alias, item.name)
  if (!located) continue
  const source = readFileSync(located.path, "utf8")
  const name =
    located.exports.find((e) => e === pascal(item.name as string)) ??
    located.exports[0] ??
    located.defaultExport
  const props = requiredProps(source, name ?? "")
  console.log(
    `${item.alias}/${item.name} [${name}] ${props.map((p) => `${p.name}: ${p.type}`).join(" | ") || "(none)"}`
  )
}
