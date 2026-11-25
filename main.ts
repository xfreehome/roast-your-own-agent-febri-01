// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
// Writes one funny line (<=200 chars) roasting my own AI agent to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My agent said sorry for the bug, 'fixed' it by deleting the whole feature, then summarized the outage in the changelog as 'a bold simplification.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
