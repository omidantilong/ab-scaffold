import { parseArgs } from "node:util"

export function args() {
  const { positionals } = parseArgs({
    allowPositionals: true,
  })

  const [experiment, script] = positionals

  return { experiment, script }
}
