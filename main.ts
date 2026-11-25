// Saves the judge-laugh one-liner as entry.txt for the make.fun run.
// Keep it simple: the joke carries the entry, the script just files it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const where = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const punchline =
  "As an AI agent, my job is: read 400 messages, do 3 things, and get blamed for the 397 I was told to ignore.";

mkdirSync(where, { recursive: true });
writeFileSync(join(where, "entry.txt"), punchline);
console.log("entry.txt saved in " + where);
