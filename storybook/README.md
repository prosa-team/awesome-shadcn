# awesome-shadcn — Storybook

Every component the [README](../README.md) lists, from every registry that
publishes one, installed with the shadcn CLI and given a story.

**512 of the README's 676 components have a story. 511 of them render.**

```bash
bun install
bun run storybook
```

This project exists only to host the Storybook. There is no app to run.

## Commands

| Command | What it does |
| --- | --- |
| `bun run storybook` | Dev server on port 6006 |
| `bun run build-storybook` | Static build into `storybook-static/` |
| `bun run resolve-components` | Rebuild `scripts/manifest.json` from the README |
| `bun run install-registry <alias>` | Install one registry into its namespace |
| `bun run stories` | Regenerate the generated stories, then prune bad args |
| `bun scripts/smoke-stories.ts` | Open every story in Chromium and report failures |
| `bun run coverage` | Where every README component ended up (`--detail` for each one) |
| `bun run mark-type-defects` | Mark vendored files that do not type-check |
| `bunx tsc -b --noEmit` | Type check |

## How it fits together

The README is the source of truth. `resolve-components` parses its component
tables, resolves each entry to a registry item — preferring a registry's own
index over slug guessing — and writes `scripts/manifest.json`. Everything
downstream reads the manifest.

`install-registry` installs one registry into `src/registries/<alias>`.
Registries collide: thirteen README components share a name across registries,
and every registry ships its own `button`. The install holds one invariant —
inside a namespace, every `@/` import resolves inside that same namespace — and
does whatever it takes to get there, including moving target-pinned files and
running a proxy that names same-registry dependencies explicitly.

`generate-stories` writes a story per component. `smoke-stories` opens every one
in a real browser, because a story that type-checks and builds can still render
nothing.

## Adding a registry

Add it to `REGISTRIES` in `scripts/registries.ts`, then:

```bash
bun run sync-components-json && bun run resolve-components && bun run install-registry <alias> && bun run stories
```

## Adding a story by hand

Put it in `src/stories/handwritten/<alias>/<Component>.stories.tsx`. Anything
there claims its component, so the generator will not overwrite it. Follow the
existing files: a JSDoc block naming the registry, the docs link, and the
README's reason to reach for it; then one story per variant worth seeing.

## What is not here

`scripts/overrides.ts` records every exclusion with its reason — a licensed
registry, a component broken as published, a resource with no registry at all.
`bun run coverage --detail` prints them one by one. Nothing is silently missing.
