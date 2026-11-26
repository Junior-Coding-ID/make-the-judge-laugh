import { mkdirSync, writeFileSync } from "node:fs";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT ||
  "/output";

mkdirSync(outDir, { recursive: true });

const text =
  "My pottery teacher said I'd made a lovely duck, so I quietly stopped adding legs to my horse.";

writeFileSync(`${outDir}/entry.txt`, text, "utf8");
