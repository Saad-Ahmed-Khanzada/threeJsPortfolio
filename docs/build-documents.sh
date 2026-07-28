#!/usr/bin/env bash
#
# Regenerates all three document deliverables from source.
#
#   docs/Portfolio-Content.docx            <- generated from src/app/data.js
#   docs/Saad_Ahmed_Khanzada_Resume.docx   <- generated from src/app/data.js
#   public/Saad_Ahmed_Khanzada_Resume.pdf  <- generated from docs/resume.html
#
# Run this after editing src/app/data.js or docs/resume.html so the documents
# never drift from the live site.
#
#   ./docs/build-documents.sh
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD="$ROOT/docs/.build"
mkdir -p "$BUILD"

echo "==> Setting up Python environment"
if [ ! -d "$BUILD/venv" ]; then
  python3 -m venv "$BUILD/venv"
fi
"$BUILD/venv/bin/pip" install --quiet --upgrade pip
"$BUILD/venv/bin/pip" install --quiet python-docx pypdf

echo "==> Installing Node dependencies for PDF rendering"
if [ ! -d "$BUILD/node_modules/puppeteer" ]; then
  # Written directly rather than via `npm init -y`: npm derives the package
  # name from the directory, and ".build" is not a valid npm package name, so
  # `npm init` fails here.
  cat > "$BUILD/package.json" <<'JSON'
{
  "name": "portfolio-doc-build",
  "version": "1.0.0",
  "private": true
}
JSON
  (cd "$BUILD" && npm install --silent puppeteer)
fi

echo "==> Exporting content from src/app/data.js"
node "$ROOT/docs/tools/export-data.mjs" "$ROOT" "$BUILD/content.json"

echo "==> Building Word documents"
"$BUILD/venv/bin/python" "$ROOT/docs/tools/make_docx.py" \
  "$BUILD/content.json" \
  "$ROOT/docs/Portfolio-Content.docx" \
  "$ROOT/docs/Saad_Ahmed_Khanzada_Resume.docx"

echo "==> Building cover letter and Loom script"
"$BUILD/venv/bin/python" "$ROOT/docs/tools/make_career_docs.py" "$ROOT/docs"

echo "==> Rendering résumé PDF"
NODE_PATH="$BUILD/node_modules" node "$ROOT/docs/tools/make-pdf.js" \
  "$ROOT/docs/resume.html" \
  "$ROOT/public/Saad_Ahmed_Khanzada_Resume.pdf"

echo "==> Verifying PDF is machine-readable"
"$BUILD/venv/bin/python" - "$ROOT/public/Saad_Ahmed_Khanzada_Resume.pdf" <<'PY'
import sys
from pypdf import PdfReader

reader = PdfReader(sys.argv[1])
text = "\n".join(page.extract_text() for page in reader.pages)
pages = len(reader.pages)

required = [
    "Senior Software Engineer", "12-person", "InvestWizz", "Flutter", "C++",
    "Redux Toolkit", "App Store Connect", "n8n", "saadkhanzada1@gmail.com",
    "React Native", "SvelteKit", "5+ years",
]
missing = [k for k in required if k not in text]

print(f"    pages: {pages}")
print(f"    extractable characters: {len(text)}")
if missing:
    print("    FAIL — keywords not extractable: " + ", ".join(missing))
    sys.exit(1)
if pages > 2:
    print(f"    WARNING — {pages} pages; two is the target for this profile")
print("    OK — all ATS keywords extractable")
PY

echo
echo "Done:"
echo "  docs/Portfolio-Content.docx"
echo "  docs/Saad_Ahmed_Khanzada_Resume.docx"
echo "  docs/Cover-Letter.docx  (+ .md)"
echo "  docs/Loom-Script.docx   (+ .md)"
echo "  public/Saad_Ahmed_Khanzada_Resume.pdf"
