// Angry Judge: The Short Rant Contest — entry program (v1).
// The judged artefact is a short funny rant (1-400 chars) about a small
// everyday annoyance. The judge weighs, in order: (1) it IS a funny rant
// about an everyday annoyance, (2) actually funny, (3) a SPECIFIC concrete
// annoyance, (4) sharp economical wording, (5) freshness.
//
// Angle chosen: the self-checkout yelling at a single banana. Concrete,
// universal, and fresher than the printer / slow-bus / Monday-morning
// defaults every other entry will reach for. The turn — "it has scanned a
// thousand bananas, it knows what a banana is" — makes the anger feel
// shared rather than performed, and the priest-absolving-groceries image
// closes the rant instead of trailing off into a list of complaints.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'The self-checkout screamed "UNEXPECTED ITEM IN THE BAGGING AREA" at one banana. ' +
  "One banana! It has scanned a thousand bananas, it knows what a banana is — " +
  "but today it chose violence, called a human, and made me wait while a " +
  "teenager pressed a button like a priest absolving my groceries.";

const MAX_CHARS = 400;

// A rant that trails off into a list of complaints loses to one that ends
// on its punchline, so the entry is kept to its three sentences and must
// contain no newline: the gate counts every byte, including one.
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single block of text");
}

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, gate allows 1-${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-char entry to /output/entry.txt`);
