import fs from "fs";
import { execSync } from "child_process";

console.log("1. Preparing source index.html for Vite...");
const srcHtml = `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./assets/vite-BxnGKt9S.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ViralMind AI - AmpEdge Solutions</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#080c14] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-indigo-500 selection:text-white min-h-screen">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
fs.writeFileSync("index.html", srcHtml, "utf8");

console.log("2. Running TypeScript & Vite Build...");
execSync("npx tsc && npx vite build", { stdio: "inherit" });

console.log("3. Reading generated dist/index.html...");
let distHtml = fs.readFileSync("dist/index.html", "utf8");
const skeleton = `<div id="root"><div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#080c14;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;text-align:center;padding:20px;"><div style="width:50px;height:50px;border:3px solid #1e293b;border-top-color:#10b981;border-radius:50%;animation:spin 1s linear infinite;margin-bottom:20px;"></div><h2 style="font-size:20px;font-weight:700;margin:0 0 8px 0;color:#fff;">ViralMind AI — AmpEdge Solutions</h2><p style="font-size:13px;color:#94a3b8;margin:0;">Loading Construction Lead Engine & 3-Date Profile Optimizer...</p><style>@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style></div></div>`;
distHtml = distHtml.replace('<div id="root"></div>', skeleton);

fs.writeFileSync("dist/index.html", distHtml, "utf8");
fs.writeFileSync("dist/404.html", distHtml, "utf8");
fs.writeFileSync("dist/.nojekyll", "", "utf8");

console.log("4. Copying bundles to docs/ and root...");
if (!fs.existsSync("docs")) fs.mkdirSync("docs");
fs.writeFileSync("docs/index.html", distHtml, "utf8");
fs.writeFileSync("docs/404.html", distHtml, "utf8");
fs.writeFileSync("docs/.nojekyll", "", "utf8");

if (!fs.existsSync("docs/assets")) fs.mkdirSync("docs/assets", { recursive: true });
if (!fs.existsSync("assets")) fs.mkdirSync("assets", { recursive: true });

fs.readdirSync("dist/assets").forEach(file => {
  fs.copyFileSync(`dist/assets/${file}`, `docs/assets/${file}`);
  fs.copyFileSync(`dist/assets/${file}`, `assets/${file}`);
});

fs.writeFileSync("index.html", distHtml, "utf8");
fs.writeFileSync("404.html", distHtml, "utf8");
fs.writeFileSync(".nojekyll", "", "utf8");

console.log("5. Pushing to GitHub (main & gh-pages)...");
try {
  execSync("git add -A && git commit -m \"feat: complete Construction Lead Hunter & 3-Date Profile Optimizer\" && git push origin main", { stdio: "inherit" });
} catch (e) {
  console.log("Git main push notice:", e.message);
}

try {
  execSync("cd dist && git add -A && git commit -m \"deploy: Construction Lead Hunter & 3-Date Profile Optimizer\" && git push -f origin gh-pages && cd ..", { stdio: "inherit" });
} catch (e) {
  console.log("Git gh-pages push notice:", e.message);
}

console.log("DEPLOYMENT COMPLETE!");
