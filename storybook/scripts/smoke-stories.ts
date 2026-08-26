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
import { readFileSync, writeFileSync } from "node:fs"

import { chromium } from "playwright"

const DIST = "storybook-static"
const PORT = 6100
const CONCURRENCY = 6

type Result = { id: string; title: string; ok: boolean; reason?: string }

const index = JSON.parse(readFileSync(`${DIST}/index.json`, "utf8")) as {
  entries: Record<string, { id: string; title: string; name: string; type: string }>
}

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
  const errors: string[] = []

  page.on("pageerror", (error) => errors.push(error.message))
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text())
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
      errors.push((await page.locator("#error-message").innerText()).trim() || "Storybook error display")
    }

    // A story that throws nothing but renders nothing is still not a story.
    const rendered = await page.evaluate(
      () => (document.querySelector("#storybook-root")?.textContent ?? "").trim().length > 0 ||
        (document.querySelector("#storybook-root")?.childElementCount ?? 0) > 0
    )
    if (!rendered) errors.push("rendered nothing")
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error))
  } finally {
    await page.close()
  }

  const reason = errors.find((e) => !/favicon|Failed to load resource/i.test(e))
  return {
    id: story.id,
    title: `${story.title} / ${story.name}`,
    ok: !reason,
    reason: reason?.split("\n")[0].slice(0, 160),
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

const failures = results.filter((r) => !r.ok)
writeFileSync("scripts/smoke-report.json", JSON.stringify(results, null, 2) + "\n")

console.log(`${results.length - failures.length}/${results.length} stories render`)
for (const failure of failures) console.log(`  FAIL ${failure.title}\n       ${failure.reason}`)
