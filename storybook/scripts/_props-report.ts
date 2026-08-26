import { locate, pascal } from "./locate-components"
import { requiredProps } from "./component-props"

const report = JSON.parse(await Bun.file("scripts/smoke-report.json").text()) as {
  id: string; title: string; ok: boolean
}[]
const failedTitles = report.filter((r) => !r.ok).map((r) => r.title.split(" / ")[0])

const manifest = JSON.parse(await Bun.file("scripts/manifest.json").text()) as {
  alias: string; name: string | null; component: string; resource: string
}[]

for (const item of manifest) {
  if (!item.name) continue
  if (!failedTitles.includes(`${item.resource}/${item.component}`)) continue
  const located = await locate(item.alias, item.name)
  if (!located) continue
  const source = await Bun.file(located.path).text()
  const name =
    located.exports.find((e) => e === pascal(item.name as string)) ??
    located.exports[0] ??
    located.defaultExport
  const props = requiredProps(source, name ?? "")
  console.log(
    `${item.alias}/${item.name} [${name}] ${props.map((p) => `${p.name}: ${p.type}`).join(" | ") || "(none)"}`
  )
}
