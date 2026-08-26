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

/**
 * Registry items that do not compile as published, keyed by `<alias>:<item>`.
 *
 * These are upstream defects, not resolution failures, so they are excluded
 * from installs rather than worked around locally.
 */
export const BROKEN: Record<string, string> = {
  "dotmatrix:dotm-3x3-9":
    "Imports snakePath3NormFromIndex and snakePath3OrderValue, neither of which its own core module exports.",
  "unlumen:pixel": "Answers 401; a paid component behind a licence key.",
  "unlumen:glow":
    "Imports buttonVariants from its own primitives/button, which exports only Button and ButtonProps.",
  "unlumen:refresh":
    "Imports buttonVariants from its own primitives/button, which exports only Button and ButtonProps.",
  "unlumen:command-menu":
    "Imports KbdGroup from its own kbd, which exports only Kbd and Shortcut.",
  "unlumen:cursor":
    "Imports a cursor-primitive module that the registry does not publish at any path.",
  "ncdai:consent-manager":
    "Imports ConsentManagerDialog and CookieBanner from @c15t/nextjs, which exports neither. Next.js only.",
}

/**
 * Components that render correctly but do not type-check as published.
 *
 * Each carries a `@ts-nocheck` header naming this list. The defect is in the
 * published source, so it is marked rather than patched.
 */
export const TYPE_ONLY_DEFECTS: Record<string, string> = {
  "extend:schema-builder": "Passes a FormEvent where its own Input expects an InputEvent.",
  "extend:command": "Passes the payload render-function branch of its children type into a ReactNode slot.",
  "ncdai:spotlight-logo": "Passes a SoundAsset to use-sound, which takes a string.",
  "ncdai:toc-minimap": "Passes a SoundAsset to use-sound, which takes a string.",
  "unlumen:dialog": "Passes variant=\"outline\" to its own Button, whose ButtonProps has no variant.",
}

/**
 * Registry items the dependency closure does not reach, keyed by alias.
 *
 * A registry item lists a dependency the CLI resolves at install time but that
 * `registryDependencies` does not name — a primitive re-exported through
 * another file, or a hook imported by path. Installing them explicitly is
 * cheaper than parsing every import in a published component.
 */
export const EXTRA_ITEMS: Record<string, string[]> = {
  unlumen: ["kbd", "button", "cursor-primitive"],
  ncdai: ["use-sound"],
}

/**
 * Stock shadcn items a registry expects but does not publish, keyed by alias.
 *
 * Magic UI's file tree imports `scroll-area` and Unlumen's command menu imports
 * `command`; neither registry has an item of that name, so both come from the
 * default shadcn registry into the namespace.
 */
export const STOCK_ITEMS: Record<string, string[]> = {
  magicui: ["scroll-area"],
  unlumen: ["command"],
}

/**
 * Resources deliberately kept out of the Storybook, with the reason.
 *
 * This is the honest list of what the Storybook does not cover.
 */
export const EXCLUDED_RESOURCES: Record<string, string> = {
  supabase:
    "Every component needs a live Supabase project and the Next.js server, client, and middleware clients. There is nothing to render without a backend, which is also what CONTRIBUTING.md rules out.",
}

/**
 * Registry items whose file name does not follow from the item name.
 *
 * Keyed by `<alias>:<item>`, valued by the path inside the namespace.
 */
export const ITEM_FILES: Record<string, string> = {
  "aicss:orbs": "Orb.tsx",
  "aicss:task-list": "TodoList.tsx",
  "aicss:ai-agent-input": "PromptInput.tsx",
  "ncdai:apple-hello-effect": "apple-hello-effect-english.tsx",
  "extend:docx-editor-block": "blocks/docx-editor.tsx",
}

/**
 * Installed items that are not components, and so get no story.
 *
 * Tokens, hooks, and style-only items are real registry items and install
 * correctly; there is simply nothing to render.
 */
export const NOT_RENDERABLE: Record<string, string> = {
  "ncdai:haptic": "A Vibration API helper, published as lib/haptic.ts.",
  "ncdai:testimonials-marquee": "A style item; it installs no component file.",
  "ncdai:theme-toggle-effect-circle": "A style item; it installs no component file.",
  "fluid:springs": "Shared spring constants, published as lib/springs.ts.",
  "fluid:surfaces": "Shared surface class names, published as lib/surface-classes.ts.",
  "dotmatrix:all": "An aggregate item that installs no component of its own.",
}

/**
 * Errors a component logs at runtime that do not stop it rendering.
 *
 * The smoke test treats a thrown error as a failure, which is right for a
 * component that renders nothing. These throw during an optional side effect —
 * loading a sound — while the component itself is on screen and usable.
 */
export const RUNTIME_WARNINGS: RegExp[] = [
  // Chanh Dai's spotlight-logo and toc-minimap depend on `@soundcn/*`, a
  // registry with no reachable host. The nearest published hook, @ncdai/use-sound,
  // takes a URL where those components pass a base64 SoundAsset, so the fetch
  // 404s. The component renders; only its click sound is missing.
  /Failed to fetch audio/,
]

/**
 * Stories that render in development but not in the production build.
 *
 * `framer-motion` publishes Reorder as `export { namespace as Reorder }` over an
 * `import * as namespace`. The production build drops that namespace's members,
 * so `Reorder.Group` is undefined and React throws error #130. A probe story
 * that only rendered `<Reorder.Group>` reproduced it with nothing else on the
 * page, which puts the fault in the bundler's handling of that re-export rather
 * than in either registry.
 *
 * Both components work in `bun run storybook`. Neither survives
 * `bun run build-storybook`.
 */
export const DEV_ONLY: Record<string, string> = {
  "interior:reorder-list": "Renders through motion's Reorder.Group.",
  "extend:file-system": "Its columns view renders through motion's Reorder.Group.",
}
