# Résumé sources

The résumé is generated, not hand-maintained. Editing the output files
directly means your next build overwrites the change.

## Where each thing lives

| To change | Edit | Then run |
|---|---|---|
| Résumé wording, layout, bullets | `docs/resume.html` | `./docs/build-documents.sh` |
| Portfolio + résumé DOCX content | `src/app/data.js` | `./docs/build-documents.sh` |
| Cover letter, Loom script | `docs/tools/make_career_docs.py` | `./docs/build-documents.sh` |

## Generated outputs (do not edit by hand)

- `public/Saad_Ahmed_Khanzada_Resume.pdf` (the file you send to recruiters)
- `docs/Saad_Ahmed_Khanzada_Resume.docx` (editable copy for one-off tailoring)
- `docs/Portfolio-Content.docx` (content management document)
- `docs/Cover-Letter.docx` / `.md`
- `docs/Loom-Script.docx` / `.md`

## Facts to keep consistent everywhere

- **4+ years professional experience.** Matches the documented timeline from
  Dec 2022. Do not inflate it without adding earlier roles to the experience
  section.
- **Positioning:** Senior Software Engineer. Also targets Technical Lead and
  Product Engineer.
- **Leads a 12-person cross-functional team**, taken over mid-project when the
  Project Manager left.
- **Flutter and C++ are never claimed as skills.** They appear only as
  evidence of ramping into an unfamiliar stack. Presenting them as expertise
  invites a technical question you cannot answer.
- **No invented metrics.** Every number is either countable (team size,
  project count, named clients) or omitted. The old resume's four separate
  "30%" improvements were removed because none could be substantiated.
- **American spelling throughout**, for US job postings and ATS keyword
  matching.

## Copy checks

```bash
node docs/tools/audit-copy.mjs                       # documents and data
node docs/tools/audit-copy.mjs http://localhost:3000 # also crawl live pages
```

Flags em-dashes and other phrasing that reads as machine-written. Exits
non-zero when anything is found.
