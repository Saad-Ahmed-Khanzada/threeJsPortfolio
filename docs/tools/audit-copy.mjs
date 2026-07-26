/*
  Copy audit for AI-writing tells.

  Runs against the *rendered* text of every page plus the generated documents,
  because a tell that only exists in a template literal still reaches the
  reader. Reports counts and locations so a regression is obvious.

  usage:
    node docs/tools/audit-copy.mjs                 # docs + data only
    node docs/tools/audit-copy.mjs http://localhost:3000   # also crawl pages
*/
import { readFileSync, existsSync } from "fs";
import path from "path";

const root = process.cwd();
const baseUrl = process.argv[2];

// Patterns that read as machine-written. Each has a note on why.
const TELLS = [
  { name: "em-dash (—)", re: /—/g, why: "the single most recognized AI tell" },
  { name: '"rather than"', re: /\brather than\b/gi, why: "overused connective" },
  { name: '"not just … but"', re: /\bnot just\b/gi, why: "formulaic contrast" },
  { name: '"it\'s not X. it\'s Y"', re: /\bit(?:'|’)s not\b[^.!?]{0,60}\.\s*it(?:'|’)s\b/gi, why: "formulaic reversal" },
  { name: '"delve"', re: /\bdelve\b/gi, why: "vocabulary tell" },
  { name: '"leverage" (verb)', re: /\bleverag(e|es|ing|ed)\b/gi, why: "corporate filler" },
  { name: '"seamless"', re: /\bseamless(ly)?\b/gi, why: "vocabulary tell" },
  { name: '"robust"', re: /\brobust\b/gi, why: "vocabulary tell" },
  { name: '"cutting-edge"', re: /\bcutting[- ]edge\b/gi, why: "vocabulary tell" },
  { name: '"landscape"/"realm"/"tapestry"', re: /\b(landscape|realm|tapestry)\b/gi, why: "vocabulary tell" },
  { name: '"testament to"', re: /\btestament to\b/gi, why: "vocabulary tell" },
  { name: '"underscore(s)"', re: /\bunderscor(e|es|ing)\b/gi, why: "vocabulary tell" },
  { name: '"in today\'s"', re: /\bin today(?:'|’)s\b/gi, why: "filler opener" },
  { name: '"ever-evolving"', re: /\bever[- ]evolving\b/gi, why: "vocabulary tell" },
  { name: '"empower"/"unlock"/"elevate"', re: /\b(empower|unlock|elevate)(s|ing|ed)?\b/gi, why: "marketing filler" },
  { name: '"deliberately"/"genuinely"', re: /\b(deliberately|genuinely)\b/gi, why: "hedging adverb, overused" },
  { name: '"holistic"/"synergy"', re: /\b(holistic|synerg(y|ies))\b/gi, why: "corporate filler" },
];

// Files whose *string content* reaches the reader.
const FILES = [
  "docs/Cover-Letter.md",
  "docs/Loom-Script.md",
  "docs/resume-source.md",
];

const stripCodeComments = (src) =>
  src
    .replace(/\/\*[\s\S]*?\*\//g, " ")     // block comments
    .replace(/^\s*\/\/.*$/gm, " ")          // line comments
    .replace(/^\s*#.*$/gm, " ");            // python comments

function scan(label, text) {
  const hits = [];
  for (const tell of TELLS) {
    const m = text.match(tell.re);
    if (m && m.length) hits.push({ tell: tell.name, count: m.length, why: tell.why });
  }
  return { label, hits, chars: text.length };
}

const results = [];

// ---- generated documents (markdown twins of the .docx) ----
for (const rel of FILES) {
  const abs = path.join(root, rel);
  if (!existsSync(abs)) continue;
  results.push(scan(rel, readFileSync(abs, "utf8")));
}

// ---- data.js string literals, comments excluded ----
const dataPath = path.join(root, "src/app/data.js");
if (existsSync(dataPath)) {
  results.push(scan("src/app/data.js (strings only)", stripCodeComments(readFileSync(dataPath, "utf8"))));
}

// ---- résumé html body text ----
const resumePath = path.join(root, "docs/resume.html");
if (existsSync(resumePath)) {
  const html = readFileSync(resumePath, "utf8")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ");
  results.push(scan("docs/resume.html (body text)", html));
}

// ---- live pages, if a base URL was supplied ----
if (baseUrl) {
  const routes = ["/", "/about", "/experience", "/projects", "/projects/2", "/tech-stack", "/contact"];
  /*
    puppeteer lives in the throwaway docs/.build install, not in the project's
    own dependencies. Resolve it through a require rooted there instead of
    guessing at its internal file layout, which differs between versions.
  */
  const { createRequire } = await import("module");
  const requireFromBuild = createRequire(
    path.join(root, "docs/.build/package.json")
  );
  const puppeteer = requireFromBuild("puppeteer");
  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  for (const route of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(baseUrl + route, { waitUntil: "networkidle2", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 2000));
    const text = await page.evaluate(() => document.body.innerText || "");
    results.push(scan(`page ${route}`, text));
    await page.close();
  }
  await browser.close();
}

let total = 0;
console.log("COPY AUDIT — AI writing tells\n");
for (const r of results) {
  const sum = r.hits.reduce((a, h) => a + h.count, 0);
  total += sum;
  if (!sum) {
    console.log(`  clean   ${r.label}`);
  } else {
    console.log(`  ${String(sum).padStart(5)}   ${r.label}`);
    for (const h of r.hits) {
      console.log(`          ${String(h.count).padStart(3)} x ${h.tell}  (${h.why})`);
    }
  }
}
console.log(
  total === 0
    ? "\nNo AI tells found in any user-facing copy."
    : `\n${total} total occurrences found.`
);
process.exit(total === 0 ? 0 : 1);
