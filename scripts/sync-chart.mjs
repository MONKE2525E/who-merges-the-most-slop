import { existsSync, readFileSync, writeFileSync } from "node:fs";
const html = readFileSync(new URL("../chart.html", import.meta.url), "utf8");
writeFileSync(new URL("../lakebed/client/chart.ts", import.meta.url), "export const chartHtml = " + JSON.stringify(html) + ";\n");
const config = new URL("../lakebed/lakebed.json", import.meta.url);
if (!existsSync(config)) writeFileSync(config, "{}\n");
