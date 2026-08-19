import fs from "fs";
import { execSync } from "child_process";

// 1. Get the compiled dist HTML
const distHtml = `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./assets/vite-BxnGKt9S.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ViralMind AI - AmpEdge Solutions</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" crossorigin href="./assets/index-DV_m7grH.css">
    <link rel="stylesheet" crossorigin href="/social-media-optimization/assets/index-DV_m7grH.css">
    <script type="module" crossorigin src="./assets/index-6i0EtlUn.js"></script>
    <script type="module" crossorigin src="/social-media-optimization/assets/index-6i0EtlUn.js"></script>
  </head>
  <body class="bg-[#080c14] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-indigo-500 selection:text-white min-h-screen">
    <div id="root"></div>
  </body>
</html>`;

// Write to all root and subfolder locations
fs.writeFileSync("index.html", distHtml, "utf8");
fs.writeFileSync("404.html", distHtml, "utf8");
fs.writeFileSync(".nojekyll", "", "utf8");

fs.writeFileSync("dist/index.html", distHtml, "utf8");
fs.writeFileSync("dist/404.html", distHtml, "utf8");
fs.writeFileSync("dist/.nojekyll", "", "utf8");

if (!fs.existsSync("docs")) fs.mkdirSync("docs");
fs.writeFileSync("docs/index.html", distHtml, "utf8");
fs.writeFileSync("docs/404.html", distHtml, "utf8");
fs.writeFileSync("docs/.nojekyll", "", "utf8");

console.log("Syncing assets...");
if (!fs.existsSync("assets")) fs.mkdirSync("assets");
if (!fs.existsSync("docs/assets")) fs.mkdirSync("docs/assets");

fs.readdirSync("dist/assets").forEach(file => {
  fs.copyFileSync(`dist/assets/${file}`, `assets/${file}`);
  fs.copyFileSync(`dist/assets/${file}`, `docs/assets/${file}`);
});

console.log("Pushing to main branch...");
execSync("git add -A && git commit -m \"fix: replace root index.html with production compiled bundle\" && git push origin main", { stdio: "inherit" });

console.log("Pushing to gh-pages branch...");
execSync("cd dist && git add -A && git commit -m \"deploy: production compiled bundle\" && git push -f origin gh-pages && cd ..", { stdio: "inherit" });

console.log("ALL LOCATIONS PUSHED WITH PRODUCTION COMPILED BUNDLE!");
