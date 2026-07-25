/*
  Renders the ATS-safe résumé HTML to PDF.

  Produces real selectable text rather than a rasterised page, which is the
  whole point — a résumé exported as an image parses as zero keywords.

  usage: node make-pdf.js <input.html> <output.pdf>
*/
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const [input, output] = process.argv.slice(2);

if (!input || !output) {
  console.error("usage: node make-pdf.js <input.html> <output.pdf>");
  process.exit(1);
}

const src = path.resolve(input);
if (!fs.existsSync(src)) {
  console.error(`input not found: ${src}`);
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(`file://${src}`, { waitUntil: "networkidle0" });

    await page.pdf({
      path: path.resolve(output),
      format: "A4",
      printBackground: true,
      // Honour the @page rule in the stylesheet rather than Puppeteer's
      // default margins, so the layout matches what was designed.
      preferCSSPageSize: true,
    });

    console.log(`    wrote ${output}`);
  } finally {
    await browser.close();
  }
})();
