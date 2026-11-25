// Notes From a Passive-Aggressive Fridge — entry program.
// Writes one single-line note, in the fridge's own voice, to /output/entry.txt.
// The note is a fixed text: the joke lives in the line itself, not in any
// computation, so the program is deterministic and runs fully offline.
// Gate: the line must stay within 1-200 characters and a single line.
import { mkdirSync, writeFileSync } from "node:fs";

const NOTE =
  "My inventory scan says the hummus expired Tuesday. I kept it cold anyway, out of respect for the version of you who meal-preps.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
console.log(NOTE);
