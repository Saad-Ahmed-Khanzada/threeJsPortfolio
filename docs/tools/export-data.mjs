/*
  Exports the portfolio content from src/app/data.js to JSON.

  The .docx content-management document is built from this JSON, so the
  document and the live site are generated from the same source. That is the
  whole point of the sync requirement — a hand-maintained Word file would
  drift from the code within one edit.

  data.js is ESM but lives in a package without "type":"module", so Node
  would parse it as CommonJS and choke on `export const`. Copying it to a
  .mjs beside itself makes the module type unambiguous.
*/
import { writeFileSync, copyFileSync, unlinkSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const projectRoot = process.argv[2];
const outFile = process.argv[3];

if (!projectRoot || !outFile) {
  console.error("usage: node export-data.mjs <projectRoot> <out.json>");
  process.exit(1);
}

const dataJs = path.join(projectRoot, "src", "app", "data.js");
const shim = path.join(projectRoot, "src", "app", "__data_export.mjs");

copyFileSync(dataJs, shim);

try {
  const mod = await import(`file://${shim}`);

  const payload = {
    personalData: mod.personalData,
    professionalSummary: mod.professionalSummary,
    aboutParagraphs: mod.aboutParagraphs,
    careerHighlights: mod.careerHighlights,
    coreCompetencies: mod.coreCompetencies,
    servicesData: mod.servicesData,
    experienceData: mod.experienceData,
    leadershipData: mod.leadershipData,
    aiAutomationData: mod.aiAutomationData,
    projectsData: mod.projectsData,
    testimonialsData: mod.testimonialsData,
    techStackData: mod.techStackData,
    techCategories: mod.techCategories,
    educationData: mod.educationData,
    certificationsData: mod.certificationsData,
    languagesData: mod.languagesData,
    BtnList: mod.BtnList,
  };

  const missing = Object.entries(payload)
    .filter(([, v]) => v === undefined)
    .map(([k]) => k);
  if (missing.length) {
    throw new Error("data.js is missing exports: " + missing.join(", "));
  }

  writeFileSync(outFile, JSON.stringify(payload, null, 2));
  console.log(
    `Exported ${payload.projectsData.length} projects, ` +
      `${payload.experienceData.length} roles, ` +
      `${payload.techStackData.length} technologies -> ${outFile}`
  );
} finally {
  unlinkSync(shim);
}
