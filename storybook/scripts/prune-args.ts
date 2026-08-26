/**
 * Strips synthesised args that TypeScript rejects.
 *
 * The synthesiser reads prop types with regular expressions, not a type
 * checker, so it sometimes resolves the wrong declaration in a long file and
 * builds an object of the wrong shape. Rather than chase every such case in the
 * parser, the compiler gets the last word: any story whose args do not
 * type-check loses them and is listed as needing real sample data.
 *
 * Usage: bun scripts/prune-args.ts
 */
const tsc = Bun.spawn(["bunx", "tsc", "-b", "--noEmit"], { stdout: "pipe", stderr: "pipe" })
const output =
  (await new Response(tsc.stdout).text()) + (await new Response(tsc.stderr).text())
await tsc.exited

const failing = new Set(
  [...output.matchAll(/^(src\/stories\/generated\/[^(]+)\(/gm)].map((match) => match[1])
)

for (const path of failing) {
  const source = await Bun.file(path).text()
  const pruned = source.replace(/\n  args: \{[\s\S]*?\n  \},/, "")
  if (pruned === source) continue
  await Bun.write(path, pruned)
  console.log(`  pruned args from ${path}`)
}

console.log(`pruned ${failing.size} stories`)
