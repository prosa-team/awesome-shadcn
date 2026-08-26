/**
 * Builds sample values for a component's required props.
 *
 * A generated story renders nothing when a required prop is undefined, and 61
 * of them did. The prop types are the only description of what those props
 * want, so the sample is synthesised from the type: arrays get three entries,
 * named object types are resolved in the same file and filled member by member,
 * and string literal unions take their first member.
 *
 * Values are chosen by prop name where the name says something a type cannot —
 * a `url` that is not a URL makes a link component look broken in a way the
 * component is not.
 */
import { members, typeBlock } from "./component-props"

/** Sample strings by prop name, longest match first. */
const BY_NAME: [RegExp, string][] = [
  [/^(?:href|url|link|src)$/i, "https://ui.shadcn.com"],
  [/^(?:avatar|image|imageUrl|logo|icon)Url$/i, "https://github.com/shadcn.png"],
  [/^(?:repo|repository)$/i, "shadcn-ui/ui"],
  [/^(?:filename|fileName|file)$/i, "button.tsx"],
  [/^lang(?:uage)?$/i, "tsx"],
  [/^(?:email)$/i, "hey@example.com"],
  [/^(?:date|createdAt|updatedAt|start|end)$/i, "2026-01-01"],
  [/^(?:id|key|value|slug)$/i, "item-1"],
  [/^(?:title|heading|label|name)$/i, "Registry component"],
  [/^(?:description|subtitle|caption|summary)$/i, "One line about what it does."],
  [/^(?:code|content|body|text|children|message)$/i, "The quick brown fox jumps over the lazy dog."],
]

const sampleString = (propName: string, index: number) => {
  const match = BY_NAME.find(([pattern]) => pattern.test(propName))
  const base = match ? match[1] : "Sample"
  return index === 0 ? base : `${base} ${index + 1}`
}

/** A type this synthesiser cannot make a value for. */
export class Unsupported extends Error {}

const stripComment = (type: string) => type.replace(/\/\/.*$/gm, "").trim()

const unwrap = (type: string) => {
  const t = stripComment(type).replace(/^readonly\s+/, "")
  return t.startsWith("(") && t.endsWith(")") ? t.slice(1, -1).trim() : t
}

/** Serialises a value to TypeScript source. `new Set(...)` cannot go through JSON. */
type Value = { source: string }
const raw = (source: string): Value => ({ source })
const literal = (value: unknown): Value => raw(JSON.stringify(value))

const ELEMENT = /^(.*)\[\]$/
const ARRAY_OF = /^Array<(.*)>$/
const SET_OF = /^(?:Readonly)?Set<(.*)>$/

export const sampleValue = (
  type: string,
  propName: string,
  source: string,
  index = 0,
  depth = 0
): Value => {
  if (depth > 3) throw new Unsupported(type)
  const t = unwrap(type)

  // ReactNode accepts a string; ReactElement does not.
  if (/^(?:React\.)?ReactElement/.test(t)) return raw(`<span>${sampleString(propName, index)}</span>`)
  if (/^(?:React\.)?ReactNode$/.test(t)) return literal(sampleString(propName, index))
  if (t === "string") return literal(sampleString(propName, index))
  if (t === "number") return literal(propName === "end" ? 8 : index + 1)
  if (t === "boolean") return literal(index === 0)

  // A union of string literals: take the first, which is the documented default.
  const literals = t.split("|").map((part) => part.trim())
  if (literals.length > 1 && literals.every((part) => /^["'].*["']$/.test(part))) {
    return literal(literals[0].slice(1, -1))
  }
  // A union with a non-literal branch: try the first branch that works.
  if (literals.length > 1) {
    for (const branch of literals) {
      try {
        return sampleValue(branch, propName, source, index, depth + 1)
      } catch {
        continue
      }
    }
    throw new Unsupported(t)
  }

  if (/=>/.test(t)) return raw("() => {}")

  const set = SET_OF.exec(t)
  if (set) return raw(`new Set([${sampleValue(set[1], propName, source, 0, depth + 1).source}])`)

  const element = ELEMENT.exec(t) ?? ARRAY_OF.exec(t)
  if (element) {
    const items = [0, 1, 2].map((i) => sampleValue(element[1], propName, source, i, depth + 1))
    return raw(`[${items.map((i) => i.source).join(", ")}]`)
  }

  // A named type declared in the same file.
  if (/^[A-Z]\w*$/.test(t)) {
    const block = typeBlock(source, t)
    if (!block) throw new Unsupported(t)

    const entries = members(block)
      .filter((m) => m.required || /^(?:id|label|title|name|value)$/i.test(m.name))
      .map((m) => `${m.name}: ${sampleValue(m.type, m.name, source, index, depth + 1).source}`)

    if (!entries.length) throw new Unsupported(t)
    return raw(`{ ${entries.join(", ")} }`)
  }

  throw new Unsupported(t)
}

export type SampleArgs = { args: Record<string, string>; unsupported: string[] }

export const sampleArgs = (
  props: { name: string; type: string }[],
  source: string
): SampleArgs => {
  const args: Record<string, string> = {}
  const unsupported: string[] = []

  for (const prop of props) {
    try {
      args[prop.name] = sampleValue(prop.type, prop.name, source).source
    } catch {
      unsupported.push(`${prop.name}: ${prop.type}`)
    }
  }

  return { args, unsupported }
}
