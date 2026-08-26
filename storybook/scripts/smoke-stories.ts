/**
 * Loads every story in a real browser and reports the ones that fail.
 *
 * 288 of the stories are generated from a manifest, so nobody has looked at
 * them. A generated story passes `tsc` and builds happily while rendering
 * nothing, because the component needs props the generator could not invent.
 * This is the check that tells the two apart.
 *
 * It runs against the static build and drives the story iframe directly, which
 * is what a reader sees, and catches Storybook's own error overlay as well as
 * uncaught exceptions.
 *
 * Usage: bun run build-storybook && bun scripts/smoke-stories.ts [--filter <text>]
 */
import { chromium } from "playwright"

import { DEV_ONLY, RUNTIME_WARNINGS, keyFor } from "./overrides"
import type { ManifestItem } from "./resolve-components"

const DIST = "storybook-static"
const PORT = 6100
const CONCURRENCY = 6

type Result = {
  id: string
  title: string
  ok: boolean
  known: boolean
  reason?: string
  warning?: string
}

const index = JSON.parse(await Bun.file(`${DIST}/index.json`).text()) as {
  entries: Record<string, { id: string; title: string; name: string; type: string }>
}

// Story titles (`resource/component`) whose failure is `DEV_ONLY`, resolved
// from the manifest so the mapping from `alias:name` stays in one place.
const manifest: ManifestItem[] = JSON.parse(await Bun.file("scripts/manifest.json").text())
const devOnlyTitles = new Set(
  manifest
    .filter((item) => item.name && DEV_ONLY[keyFor(item.alias, item.name)])
    .map((item) => `${item.resource}/${item.component}`)
)

const filterIndex = process.argv.indexOf("--filter")
const filter = filterIndex === -1 ? null : process.argv[filterIndex + 1]

const stories = Object.values(index.entries).filter(
  (entry) => entry.type === "story" && (!filter || entry.title.includes(filter))
)

const server = Bun.serve({
  port: PORT,
  async fetch(request) {
    const { pathname } = new URL(request.url)
    const file = Bun.file(`${DIST}${pathname === "/" ? "/index.html" : pathname}`)
    return (await file.exists()) ? new Response(file) : new Response("not found", { status: 404 })
  },
})

const browser = await chromium.launch()

const check = async (story: { id: string; title: string; name: string }): Promise<Result> => {
  const page = await browser.newPage()
  // A thrown error breaks the story. A logged one may not: several components
  // fetch an optional asset at mount and log the 404 while rendering fine.
  const fatal: string[] = []
  const logged: string[] = []

  page.on("pageerror", (error) => fatal.push(error.message))
  page.on("console", (message) => {
    if (message.type() === "error") logged.push(message.text())
  })

  try {
    await page.goto(`http://localhost:${PORT}/iframe.html?id=${story.id}&viewMode=story`, {
      waitUntil: "networkidle",
      timeout: 30_000,
    })
    // Storybook sets this class on <body> when it shows its error display.
    const failed = await page.evaluate(() =>
      document.body.classList.contains("sb-show-errordisplay")
    )
    if (failed) {
      fatal.push((await page.locator("#error-message").innerText()).trim() || "Storybook error display")
    }

    // A story that throws nothing but renders nothing is still not a story.
    const rendered = await page.evaluate(
      () => (document.querySelector("#storybook-root")?.textContent ?? "").trim().length > 0 ||
        (document.querySelector("#storybook-root")?.childElementCount ?? 0) > 0
    )
    if (!rendered) fatal.push("rendered nothing")
  } catch (error) {
    fatal.push(error instanceof Error ? error.message : String(error))
  } finally {
    await page.close()
  }

  const noise = /favicon|Failed to load resource/i
  const tolerated = (message: string) => RUNTIME_WARNINGS.some((p) => p.test(message))
  // The bundler drops framer-motion's Reorder export in the production build
  // only (see DEV_ONLY in overrides.ts) — the component works in `bun run
  // storybook`, so its React error #130 here is a known build-tool gap, not
  // an unexplained failure. It still does not render in this static build,
  // so it is reported separately rather than counted as passing.
  const known = devOnlyTitles.has(story.title) && fatal.some((e) => /error #130/.test(e))

  const reason = fatal.find((e) => !noise.test(e) && !tolerated(e))
  const warning = [...fatal, ...logged].find((e) => !noise.test(e))

  return {
    id: story.id,
    title: `${story.title} / ${story.name}`,
    ok: !reason,
    known,
    reason: reason?.split("\n")[0].slice(0, 160),
    warning: warning?.split("\n")[0].slice(0, 160),
  }
}

const results: Result[] = []
let cursor = 0
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < stories.length) {
      const story = stories[cursor++]
      results.push(await check(story))
    }
  })
)

await browser.close()
server.stop()

const failures = results.filter((r) => !r.ok && !r.known)
const known = results.filter((r) => !r.ok && r.known)
await Bun.write("scripts/smoke-report.json", JSON.stringify(results, null, 2) + "\n")

const warned = results.filter((r) => r.ok && r.warning)

console.log(`${results.length - failures.length - known.length}/${results.length} stories render`)
for (const failure of failures) console.log(`  FAIL ${failure.title}\n       ${failure.reason}`)
if (known.length) console.log(`${known.length} known build-tool failures (see DEV_ONLY in overrides.ts):`)
for (const k of known) console.log(`  KNOWN ${k.title}\n       ${k.reason}`)
if (warned.length) console.log(`${warned.length} render but log an error:`)
for (const w of warned) console.log(`  WARN ${w.title}\n       ${w.warning}`)
