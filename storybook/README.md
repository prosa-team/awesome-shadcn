# awesome-shadcn — Storybook

Ten components from the [README](../README.md)'s registries, installed with the
shadcn CLI and documented with every prop wired to a control.

```bash
bun install
bun run storybook
```

This project exists only to host the Storybook. There is no app to run.

## Adding a component

Registry aliases live in `components.json`, so anything from these four is one
command away:

| Alias | Registry |
| --- | --- |
| `@magicui` | `https://magicui.design/r/{name}.json` |
| `@ncdai` | `https://chanhdai.com/r/{name}.json` |
| `@reui` | `https://reui.io/r/{name}.json` |
| `@dotmatrix` | `https://dotmatrix.zzzzshawn.cloud/r/{name}.json` |

```bash
bunx shadcn@latest add @magicui/bento-grid
```

Then add a story under `src/stories/`. Follow the existing files: a JSDoc block
on the meta carrying the registry, the upstream docs link, and the README's
"Reach for it when" line; an `argTypes` entry per prop with a description and
default; and one story per variant worth seeing.

## Commands

| Command | What it does |
| --- | --- |
| `bun run storybook` | Dev server on port 6006 |
| `bun run build-storybook` | Static build into `storybook-static/` |
| `bunx tsc -b --noEmit` | Type check |
