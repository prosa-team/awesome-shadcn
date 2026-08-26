/**
 * Hand-resolved README components, keyed by `<alias>:<component name>`.
 *
 * Everything here is a case the index lookup and the candidate probes both
 * miss. Each one is a fact about an upstream registry, so it is recorded once
 * rather than guessed at again on every run.
 */

/** README component name to registry item name. */
export const OVERRIDES: Record<string, string> = {
  // The README links /components/react-wheel-picker; the item is wheel-picker.
  "ncdai:React Wheel Picker": "wheel-picker",
  // Ships as seven shaped variants. The circle wipe is the one the docs lead with.
  "ncdai:Theme Toggle Effect": "theme-toggle-effect-circle",
  // One viewer handles both delimiters, published under the CSV name.
  "extend:CSV/TSV Viewer": "csv-viewer",
  // The docs page is about the shared spring constants, published as `springs`.
  "fluid:Motion": "springs",
}

/** README components with no registry item, and why. */
export const SKIPPED: Record<string, string> = {
  "aicss:Web Search":
    "Removed upstream. The README's link 404s and the component is gone from the AICSS index.",
  "extend:Excel Document Splits":
    "Documented as an anchor on the blocks page with no registry item behind it.",
  "fluid:Scrollbars":
    "A styling recipe built from the surface classes, not an installable component.",
  "supabase:Supabase Client Libraries":
    "Project setup documentation, not a component.",
  "supabase:Agent Skills":
    "Editor rules for an AI agent, not a component.",
}

export const keyFor = (alias: string, component: string) => `${alias}:${component}`
