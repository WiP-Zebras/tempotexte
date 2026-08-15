import { cp, mkdir, rm } from "node:fs/promises";

await rm("docs", { recursive: true, force: true });
await mkdir("docs", { recursive: true });
await cp("public", "docs", { recursive: true });
console.log("Build terminé : public/ -> docs/");
