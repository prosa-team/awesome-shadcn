/**
 * Reads a component's required props out of its own source.
 *
 * A generated story renders nothing when the component needs a prop the
 * generator did not supply, and the prop types are the only place that says
 * which ones those are. This is a deliberately shallow reader: it finds the
 * props declaration, then returns each member with no `?`, type text as written.
 */
export type Prop = { name: string; type: string }

/**
 * The type name a component annotates its props with.
 *
 * Half the registries name it `<Component>Props`, but plenty do not: Extend's
 * XLSX surface takes a `SurfaceOptions`, and several components annotate an
 * inline object. Reading the signature covers both.
 */
export const propsTypeName = (source: string, componentName: string): string | null => {
  const patterns = [
    new RegExp(`function\\s+${componentName}\\s*\\([^)]*?:\\s*(\\w+)`, "s"),
    new RegExp(`const\\s+${componentName}[^=]*=\\s*\\([^)]*?:\\s*(\\w+)`, "s"),
    new RegExp(`${componentName}\\s*:\\s*(?:React\\.)?FC<\\s*(\\w+)`, "s"),
    new RegExp(`${componentName}[^=]*=\\s*(?:React\\.)?forwardRef<[^,]+,\\s*(\\w+)\\s*>`, "s"),
  ]
  for (const pattern of patterns) {
    const name = pattern.exec(source)?.[1]
    if (name && /^[A-Z]/.test(name)) return name
  }
  return null
}

/** Returns the body of `interface X {...}` or `type X = {...}`, brace-balanced. */
export const typeBlock = (source: string, typeName: string): string | null => {
  const start = source.search(
    new RegExp(`(?:interface\\s+${typeName}\\b[^{]*|type\\s+${typeName}\\s*=[^{]*)\\{`)
  )
  if (start === -1) return null

  const open = source.indexOf("{", start)
  let depth = 0
  for (let i = open; i < source.length; i++) {
    if (source[i] === "{") depth++
    else if (source[i] === "}" && --depth === 0) return source.slice(open + 1, i)
  }
  return null
}

/**
 * Props annotated inline, as in `function X({ text }: { text: string })`.
 *
 * AICSS writes every component this way, so there is no named type to look up.
 */
const inlinePropsBlock = (source: string, componentName: string): string | null => {
  const start = source.search(
    new RegExp(`(?:function\\s+${componentName}\\s*\\(|const\\s+${componentName}[^=]*=\\s*\\()`)
  )
  if (start === -1) return null

  // Walk the parameter list to its closing paren, then take the `: {...}` annotation.
  const open = source.indexOf("(", start)
  let depth = 0
  let close = -1
  for (let i = open; i < source.length; i++) {
    if (source[i] === "(") depth++
    else if (source[i] === ")" && --depth === 0) {
      close = i
      break
    }
  }
  if (close === -1) return null

  const params = source.slice(open + 1, close)

  // The annotation colon is the first one outside the destructuring pattern.
  let patternDepth = 0
  let annotation = -1
  for (let i = 0; i < params.length; i++) {
    if ("{([".includes(params[i])) patternDepth++
    else if ("})]".includes(params[i])) patternDepth--
    else if (params[i] === ":" && patternDepth === 0) {
      annotation = i
      break
    }
  }
  if (annotation === -1) return null

  const brace = params.indexOf("{", annotation)
  if (brace === -1) return null

  let braces = 0
  for (let i = brace; i < params.length; i++) {
    if (params[i] === "{") braces++
    else if (params[i] === "}" && --braces === 0) return params.slice(brace + 1, i)
  }
  return null
}

const propsBlock = (source: string, componentName: string): string | null => {
  const annotated = propsTypeName(source, componentName)
  for (const name of [annotated, `${componentName}Props`, "Props"].filter(Boolean) as string[]) {
    const block = typeBlock(source, name)
    if (block) return block
  }
  return inlinePropsBlock(source, componentName)
}

/** Members of a type block, required flag included. */
export const members = (block: string): (Prop & { required: boolean })[] => {
  const found: (Prop & { required: boolean })[] = []
  let depth = 0
  let buffer = ""

  for (const char of block) {
    if ("{(<[".includes(char)) depth++
    if ("})>]".includes(char)) depth--
    if ((char === ";" || char === "\n" || char === ",") && depth === 0) {
      const match = /^(?:readonly\s+)?(\w+)\s*(\??)\s*:\s*(.+)$/.exec(buffer.trim())
      if (match) found.push({ name: match[1], type: match[3].trim(), required: !match[2] })
      buffer = ""
      continue
    }
    buffer += char
  }

  // The last member usually has no trailing separator.
  const last = /^(?:readonly\s+)?(\w+)\s*(\??)\s*:\s*(.+)$/.exec(buffer.trim())
  if (last) found.push({ name: last[1], type: last[3].trim(), required: !last[2] })

  return found
}

export const requiredProps = (source: string, componentName: string): Prop[] => {
  const block = propsBlock(source, componentName)
  if (!block) return []
  return members(block)
    .filter((m) => m.required)
    .map(({ name, type }) => ({ name, type }))
}
