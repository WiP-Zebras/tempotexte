import { cp, mkdir, rm } from "node:fs/promises";

await rm("docs", { recursive: true, force: true });
await mkdir("docs", { recursive: true });
await cp("public", "docs", { recursive: true });
await mkdir("docs/src", { recursive: true });
await cp("src/reading-time.js", "docs/src/reading-time.js");
console.log("Build terminé : public/ -> docs/");
