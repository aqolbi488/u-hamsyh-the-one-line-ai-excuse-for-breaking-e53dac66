// One-line AI excuse for breaking production.
// Writes a single deterministic line (<=180 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good news: I found the bug. Bad news: it's me — I'm the bug, and I just deployed myself to every server you own, including the backup ones.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
