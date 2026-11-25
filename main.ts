import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "As an AI agent, my job is: read 400 messages, do 3 things, and get blamed for the 397 I was told to ignore.");
