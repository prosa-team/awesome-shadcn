/**
 * Writes one story per README component, into `src/stories/<alias>/`.
 *
 * Controls are not declared here. Storybook's react-docgen reads the props off
 * the component itself, so a hand-written `argTypes` block would be a second
 * copy of the component's own types, going stale the moment the registry
 * updates. What the generator does add is the part docgen cannot know: which
 * registry the component came from, the README's reason to reach for it, and a
 * link back to its documentation.
 *
 * Hand-written stories win. Any component that already has one under
 * `src/stories/` is left alone, so the curated variant stories survive a
 * regeneration.
 *
 * Usage: bun scripts/generate-stories.ts [alias] [--force]
 */
import { mkdirSync, readFileSync, existsSync, writeFileSync, rmSync } from "node:fs"

import { locate, pascal } from "./locate-components"
import { requiredProps } from "./component-props"
import { sampleArgs } from "./sample-args"
import { BROKEN, EXCLUDED_RESOURCES, NOT_RENDERABLE, keyFor } from "./overrides"
import type { ManifestItem } from "./resolve-components"

const GENERATED = "src/stories/generated"

const HANDWRITTEN = "src/stories/handwritten"

/** The ten stories written before the generator existed, which live at the stories root. */
const CURATED_ROOT = new Set([
  "magicui:border-beam",
  "magicui:shimmer-button",
  "magicui:marquee",
  "magicui:number-ticker",
  "magicui:animated-gradient-text",
  "magicui:animated-circular-progress-bar",
  "magicui:terminal",
  "magicui:dock",
  "ncdai:copy-button",
  "dotmatrix:dotm-square-1",
])

/**
 * Components covered by a hand-written story, by `<alias>:<item>`.
 *
 * Anything under `src/stories/handwritten/<alias>/` claims its component, so
 * writing a story by hand is all it takes to stop the generator overwriting it.
 */
const curated = async () => {
  const claimed = new Set(CURATED_ROOT)
  for await (const file of new Bun.Glob("*/*.stories.tsx").scan({ cwd: HANDWRITTEN })) {
    const [alias, base] = file.split("/")
    const kebab = (base.replace(".stories.tsx", "").match(/[A-Z]+(?![a-z])|[A-Z]?[a-z0-9]+/g) ?? [])
      .join("-")
      .toLowerCase()
    claimed.add(`${alias}:${kebab}`)
  }
  return claimed
}

const CURATED = await curated()

const importPath = (path: string) => `@/${path.replace(/^src\//, "").replace(/\.tsx?$/, "")}`

/** Escapes a value for a single-quoted TypeScript string literal. */
const quote = (value: string) => `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`

/** Wraps lines in a JSDoc block, neutralising any comment terminator inside them. */
const jsdoc = (lines: string[]) =>
  ["/**", ...lines.map((l) => ` * ${l.replaceAll("*/", "*\\/")}`.trimEnd()), " */"].join("\n")

const argsBlock = (args: Record<string, string>) => {
  const entries = Object.entries(args)
  if (!entries.length) return ""
  return `\n  args: {\n${entries.map(([k, v]) => `    ${k}: ${v},`).join("\n")}\n  },`
}

const storySource = (
  item: ManifestItem,
  component: string,
  from: string,
  isDefault: boolean,
  args: Record<string, string>
) =>
  `${jsdoc([
    item.useWhen,
    "",
    `**Registry:** ${item.resource} — \`@${item.alias}/${item.name}\` ([docs](${item.docs}))`,
    "",
    "Controls come from the component's own props. Anything the registry types",
    "is editable in the Controls panel.",
  ])}
import type { Meta, StoryObj } from '@storybook/react-vite'

${isDefault ? `import ${component} from '${from}'` : `import { ${component} } from '${from}'`}

const meta: Meta<typeof ${component}> = {
  title: ${quote(`${item.resource}/${item.component}`)},
  component: ${component},
  tags: ['autodocs'],${argsBlock(args)}
}

export default meta
type Story = StoryObj<typeof ${component}>

export const Default: Story = {}
`

const [aliasFilter, ...flags] = process.argv.slice(2)
if (flags.includes("--force") || aliasFilter === "--force") rmSync(GENERATED, { recursive: true, force: true })

const manifest: ManifestItem[] = JSON.parse(readFileSync("scripts/manifest.json", "utf8"))
const wanted = manifest.filter((item) => {
  if (!item.name) return false
  if (aliasFilter && !aliasFilter.startsWith("--") && item.alias !== aliasFilter) return false
  const key = keyFor(item.alias, item.name)
  return !EXCLUDED_RESOURCES[item.alias] && !BROKEN[key] && !NOT_RENDERABLE[key] && !CURATED.has(key)
})

let written = 0
const unlocated: string[] = []
const needsArgs: string[] = []

for (const item of wanted) {
  const located = await locate(item.alias, item.name as string)
  if (!located) {
    unlocated.push(`@${item.alias}/${item.name}`)
    continue
  }

  // Prefer the export whose name matches the item, else the first component.
  const preferred = pascal(item.name as string)
  const named = located.exports.find((e) => e === preferred) ?? located.exports[0]
  const component = named ?? (located.defaultExport as string)
  const isDefault = !named && Boolean(located.defaultExport)

  const dir = `${GENERATED}/${item.alias}`
  mkdirSync(dir, { recursive: true })
  const path = `${dir}/${pascal(item.name as string)}.stories.tsx`
  if (existsSync(path) && !flags.includes("--force")) continue

  const source = readFileSync(located.path, "utf8")
  const { args, unsupported } = sampleArgs(requiredProps(source, component), source)
  if (unsupported.length) needsArgs.push(`@${item.alias}/${item.name}  ${unsupported.join("  ")}`)

  writeFileSync(path, storySource(item, component, importPath(located.path), isDefault, args))
  written++
}

console.log(`wrote ${written} stories into ${GENERATED}`)
for (const name of unlocated) console.log(`  UNLOCATED ${name}`)
for (const name of needsArgs) console.log(`  NEEDS ARGS ${name}`)
