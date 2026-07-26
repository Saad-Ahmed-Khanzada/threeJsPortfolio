#!/usr/bin/env python3
"""
Builds the two Word deliverables:

  1. Portfolio-Content.docx  — the editable content-management document,
     generated from src/app/data.js via content.json so it cannot drift
     from the deployed site.
  2. Saad_Ahmed_Khanzada_Resume.docx — editable resume matching the PDF.

Usage:
  python make_docx.py <content.json> <out_portfolio.docx> <out_resume.docx>
"""

import json
import sys
from datetime import date

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Pt, RGBColor, Inches, Emu

ACCENT = RGBColor(0x0B, 0x5F, 0x73)      # deep teal — prints legibly in mono
INK = RGBColor(0x1A, 0x1A, 0x1A)
SUBTLE = RGBColor(0x55, 0x55, 0x55)
RULE = "C8D4D8"


# --------------------------------------------------------------------------
# low-level helpers
# --------------------------------------------------------------------------

def set_base_style(doc, font="Calibri", size=10.5):
    style = doc.styles["Normal"]
    style.font.name = font
    style.font.size = Pt(size)
    style.font.color.rgb = INK
    pf = style.paragraph_format
    pf.space_after = Pt(4)
    pf.space_before = Pt(0)
    pf.line_spacing = 1.1
    # East-Asian font mapping, otherwise Word substitutes a fallback face
    rpr = style.element.get_or_add_rPr()
    rfonts = rpr.find(qn("w:rFonts"))
    if rfonts is None:
        rfonts = OxmlElement("w:rFonts")
        rpr.append(rfonts)
    rfonts.set(qn("w:eastAsia"), font)


def bottom_border(paragraph, color=RULE, size=6):
    pPr = paragraph._p.get_or_add_pPr()
    borders = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), str(size))
    bottom.set(qn("w:space"), "2")
    bottom.set(qn("w:color"), color)
    borders.append(bottom)
    pPr.append(borders)


def shade(paragraph, fill):
    pPr = paragraph._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:fill"), fill)
    pPr.append(shd)


def para(doc, text="", size=10.5, bold=False, italic=False, color=INK,
         space_before=0, space_after=4, align=None, indent=None,
         line_spacing=1.1, all_caps=False, spacing=None):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.line_spacing = line_spacing
    if align is not None:
        p.alignment = align
    if indent is not None:
        pf.left_indent = Inches(indent)
    if text:
        r = p.add_run(text)
        r.font.size = Pt(size)
        r.bold = bold
        r.italic = italic
        r.font.color.rgb = color
        r.font.all_caps = all_caps
        if spacing is not None:
            rpr = r._element.get_or_add_rPr()
            sp = OxmlElement("w:spacing")
            sp.set(qn("w:val"), str(int(spacing * 20)))
            rpr.append(sp)
    return p


def rich(doc, parts, size=10.5, space_before=0, space_after=4, indent=None,
         align=None, line_spacing=1.1):
    """parts = [(text, {bold/italic/color/size}), ...]"""
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.line_spacing = line_spacing
    if indent is not None:
        pf.left_indent = Inches(indent)
    if align is not None:
        p.alignment = align
    for text, opts in parts:
        r = p.add_run(text)
        r.font.size = Pt(opts.get("size", size))
        r.bold = opts.get("bold", False)
        r.italic = opts.get("italic", False)
        r.font.color.rgb = opts.get("color", INK)
    return p


def bullet(doc, text, size=10.5, indent=0.25, space_after=2.5, bold_lead=None):
    p = doc.add_paragraph(style="List Bullet")
    pf = p.paragraph_format
    pf.left_indent = Inches(indent + 0.16)
    pf.first_line_indent = Inches(-0.16)
    pf.space_after = Pt(space_after)
    pf.space_before = Pt(0)
    pf.line_spacing = 1.1
    if bold_lead:
        r = p.add_run(bold_lead)
        r.bold = True
        r.font.size = Pt(size)
        r.font.color.rgb = INK
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.font.color.rgb = INK
    return p


def h1(doc, text):
    p = para(doc, text, size=17, bold=True, color=INK, space_before=0,
             space_after=2, spacing=0.4)
    return p


def h2(doc, text, space_before=13):
    p = para(doc, text, size=10.5, bold=True, color=ACCENT,
             space_before=space_before, space_after=5, all_caps=True,
             spacing=0.9)
    bottom_border(p)
    return p


def h3(doc, text, space_before=8, size=11.5):
    return para(doc, text, size=size, bold=True, color=INK,
                space_before=space_before, space_after=2)


def label_block(doc, label, value, size=10):
    """'Label: value' line used throughout the content document."""
    return rich(doc, [
        (f"{label}: ", {"bold": True, "color": ACCENT, "size": size}),
        (value, {"size": size}),
    ], space_after=2.5)


def field_list(doc, label, items, size=10):
    if not items:
        return
    para(doc, label, size=size, bold=True, color=ACCENT,
         space_before=5, space_after=2)
    for it in items:
        bullet(doc, it, size=size, indent=0.18)


def page_number_footer(section, text):
    footer = section.footer
    p = footer.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run(text + "    Page ")
    r.font.size = Pt(8)
    r.font.color.rgb = SUBTLE

    fld = OxmlElement("w:fldSimple")
    fld.set(qn("w:instr"), "PAGE")
    run = OxmlElement("w:r")
    rpr = OxmlElement("w:rPr")
    sz = OxmlElement("w:sz")
    sz.set(qn("w:val"), "16")
    rpr.append(sz)
    run.append(rpr)
    fld.append(run)
    p._p.append(fld)


def set_margins(doc, top=0.55, bottom=0.55, left=0.65, right=0.65):
    for s in doc.sections:
        s.top_margin = Inches(top)
        s.bottom_margin = Inches(bottom)
        s.left_margin = Inches(left)
        s.right_margin = Inches(right)


# --------------------------------------------------------------------------
# RESUME
# --------------------------------------------------------------------------

def build_resume(d, out_path):
    doc = Document()
    set_base_style(doc, "Calibri", 10)
    set_margins(doc, 0.5, 0.5, 0.6, 0.6)

    p = d["personalData"]

    # ---- header
    hp = h1(doc, p["name"].upper())
    hp.alignment = WD_ALIGN_PARAGRAPH.LEFT

    para(doc, f'{p["title"]}  ·  ' + "  ·  ".join(p["secondaryTitles"]),
         size=10.5, bold=True, color=ACCENT, space_after=4)

    contact = rich(doc, [
        (p["email"], {"size": 9}),
        ("  |  ", {"size": 9, "color": SUBTLE}),
        (p["phone"], {"size": 9}),
        ("  |  ", {"size": 9, "color": SUBTLE}),
        (f'{p["location"]} · open to remote worldwide', {"size": 9}),
    ], space_after=1)

    links = rich(doc, [
        ("linkedin.com/in/saad-ahmed-khanzada", {"size": 9}),
        ("  |  ", {"size": 9, "color": SUBTLE}),
        ("github.com/Saad-Ahmed-Khanzada", {"size": 9}),
        ("  |  ", {"size": 9, "color": SUBTLE}),
        ("saad-ahmed-khanzada-portfolio.vercel.app", {"size": 9}),
    ], space_after=6)
    bottom_border(links, color="0B5F73", size=12)

    # ---- summary
    h2(doc, "Professional Summary", space_before=9)
    para(doc, d["professionalSummary"], size=10,
         align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=3)

    # ---- competencies
    h2(doc, "Core Competencies")
    comps = []
    for group in d["coreCompetencies"]:
        comps.extend(group["items"])
    para(doc, "  ·  ".join(comps), size=9.5,
         align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=3)

    # ---- technical skills
    h2(doc, "Technical Skills")
    skill_rows = [
        ("Languages", "TypeScript, JavaScript (ES6+), HTML5, CSS3"),
        ("Frontend", "React (4 yrs), Next.js (2 yrs), SvelteKit (1 yr), Tailwind CSS, ShadCN, NextUI"),
        ("Mobile", "React Native (4 yrs), Expo, React Navigation, Gesture Handler, NativeWind"),
        ("State & Data", "Redux Toolkit, Redux, REST APIs, Axios, PocketBase"),
        ("Backend & Cloud", "Firebase (Auth, Firestore, Cloud Messaging), AWS (integrations, Secrets Manager), FastAPI integration"),
        ("Release & DevOps", "App Store Connect, Google Play Console, native iOS/Android configuration, multi-environment setup (dev/staging/prod), Git"),
        ("AI & Automation", "n8n, OpenAI API, Claude, OpenAI Codex, custom AI coding agents"),
        ("Testing & Tooling", "Cypress, Postman, Figma, VS Code"),
        ("Exposure (production fixes, not core stacks)", "Flutter / Dart, C++"),
    ]
    for label, value in skill_rows:
        rich(doc, [
            (f"{label}: ", {"bold": True, "size": 9.5}),
            (value, {"size": 9.5}),
        ], space_after=2)

    # ---- experience
    h2(doc, "Professional Experience")
    for i, role in enumerate(d["experienceData"]):
        rich(doc, [
            (role["position"], {"bold": True, "size": 11}),
            ("  |  ", {"size": 11, "color": SUBTLE}),
            (role["company"], {"bold": True, "size": 11, "color": ACCENT}),
        ], space_before=(0 if i == 0 else 8), space_after=1)

        mode = f' ({role["workMode"]})' if role.get("workMode") else ""
        para(doc, f'{role["location"]}{mode}  ·  {role["period"]}',
             size=9, color=SUBTLE, space_after=(2 if not role.get("designationNote") else 1))

        if role.get("designationNote"):
            para(doc, role["designationNote"], size=8.5, italic=True,
                 color=SUBTLE, space_after=3)

        for point in role["contributions"]:
            bullet(doc, point, size=9.8, indent=0.12, space_after=2.4)

        rich(doc, [
            ("Technologies: ", {"bold": True, "size": 9, "color": ACCENT}),
            (", ".join(role["technologies"]), {"size": 9, "color": SUBTLE}),
        ], space_before=2, space_after=1, indent=0.12)

    # ---- selected projects
    # Six most recent featured projects — the same set as the PDF. The others
    # are already represented by the role bullets above, and a longer list
    # pushes the resume past two pages.
    h2(doc, "Selected Projects")
    featured = [pr for pr in d["projectsData"] if pr.get("featured")]
    featured.sort(key=lambda x: x["date"], reverse=True)
    for pr in featured[:6]:
        rich(doc, [
            (pr["name"], {"bold": True, "size": 10}),
            ("  ·  ", {"size": 10, "color": SUBTLE}),
            (f'{pr["role"]} · {pr["period"]}', {"italic": True, "size": 9.3, "color": SUBTLE}),
        ], space_before=5, space_after=1)
        para(doc, pr["description"], size=9.5, space_after=1, indent=0.12)
        para(doc, ", ".join(pr["technologies"]), size=8.8, italic=True,
             color=SUBTLE, space_after=1, indent=0.12)

    # ---- education / certs / languages
    h2(doc, "Education")
    for e in d["educationData"]:
        rich(doc, [
            (e["qualification"], {"bold": True, "size": 9.8}),
            ("  ·  ", {"size": 9.8, "color": SUBTLE}),
            (f'{e["institution"]}, {e["location"]}  ·  {e["period"]}',
             {"size": 9.3, "color": SUBTLE}),
        ], space_after=2)

    h2(doc, "Certifications")
    for c in d["certificationsData"]:
        rich(doc, [
            (c["name"], {"bold": True, "size": 9.8}),
            ("  ·  ", {"size": 9.8, "color": SUBTLE}),
            (f'{c["issuer"]}  ·  {c["period"]}', {"size": 9.3, "color": SUBTLE}),
        ], space_after=2)

    h2(doc, "Languages")
    para(doc, "   ·   ".join(f'{l["name"]} ({l["level"]})' for l in d["languagesData"]),
         size=9.5, space_after=2)

    doc.save(out_path)
    return out_path


# --------------------------------------------------------------------------
# PORTFOLIO CONTENT MANAGEMENT DOCUMENT
# --------------------------------------------------------------------------

def build_portfolio_doc(d, out_path):
    doc = Document()
    set_base_style(doc, "Calibri", 10.5)
    set_margins(doc, 0.7, 0.7, 0.8, 0.8)

    p = d["personalData"]
    today = date.today().strftime("%d %B %Y")

    # ---------------- cover ----------------
    para(doc, "", space_after=60)
    para(doc, "PORTFOLIO CONTENT", size=9.5, bold=True, color=ACCENT,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=4, spacing=2.0)
    para(doc, p["name"], size=30, bold=True,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=6)
    rule = para(doc, "", align=WD_ALIGN_PARAGRAPH.CENTER, space_after=8)
    bottom_border(rule, color="0B5F73", size=12)
    para(doc, f'{p["title"]}  ·  ' + "  ·  ".join(p["secondaryTitles"]),
         size=12, bold=True, color=ACCENT,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=30)

    para(doc, "Content Management Document", size=13, bold=True,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=6)
    para(doc,
         "Single source of truth for every piece of copy on the portfolio "
         "website. Edit this document to plan changes, then apply them to "
         "src/app/data.js — the site reads all content from that one file.",
         size=10, color=SUBTLE, align=WD_ALIGN_PARAGRAPH.CENTER,
         space_after=24)

    para(doc, f"Generated {today}", size=9, color=SUBTLE,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=2)
    para(doc, "Generated from src/app/data.js — regenerate after any content change.",
         size=8.5, italic=True, color=SUBTLE,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=0)

    doc.add_page_break()

    # ---------------- how to use ----------------
    h2(doc, "How to use this document", space_before=0)
    para(doc,
         "Every section below maps to a named export in src/app/data.js. The "
         "site has no hard-coded copy — changing the data file changes the "
         "site. The mapping:", size=10, space_after=6)

    mapping = [
        ("Hero Section, Contact Information", "personalData"),
        ("Professional Summary", "professionalSummary"),
        ("About Me", "aboutParagraphs"),
        ("Career Highlights", "careerHighlights"),
        ("Core Competencies", "coreCompetencies"),
        ("Services", "servicesData"),
        ("Work Experience", "experienceData"),
        ("Leadership & Client Communication", "leadershipData"),
        ("AI & Automation Experience", "aiAutomationData"),
        ("Featured Projects, Project Details", "projectsData"),
        ("Testimonials", "testimonialsData"),
        ("Technical Skills", "techStackData"),
        ("Education", "educationData"),
        ("Certifications", "certificationsData"),
        ("Languages", "languagesData"),
        ("Navigation", "BtnList"),
    ]
    for section, export in mapping:
        rich(doc, [
            ("• ", {"color": ACCENT}),
            (section, {"bold": True, "size": 9.8}),
            ("  →  ", {"size": 9.8, "color": SUBTLE}),
            (export, {"size": 9.8, "italic": True, "color": ACCENT}),
        ], space_after=2, indent=0.12)

    para(doc, "", space_after=6)
    para(doc,
         "To regenerate this document after editing data.js, re-run the "
         "generation script. Do not hand-edit the .docx as the primary "
         "record — it will drift from the site.",
         size=9, italic=True, color=SUBTLE, space_after=4)

    doc.add_page_break()

    # ---------------- 1. hero ----------------
    h2(doc, "1. Hero Section", space_before=0)
    label_block(doc, "Name", p["name"])
    label_block(doc, "Primary title", p["title"])
    label_block(doc, "Secondary titles", " · ".join(p["secondaryTitles"]))
    label_block(doc, "Tagline", p["tagline"])
    label_block(doc, "Hero intro", p["heroIntro"])
    label_block(doc, "Availability badge", p["availability"])
    label_block(doc, "Stat — years experience", p["yearsExperience"])
    label_block(doc, "Stat — projects delivered", p["projectsDelivered"])
    label_block(doc, "Stat — team led", p["teamLed"])
    label_block(doc, "Primary CTA", "View my work → /experience")
    label_block(doc, "Secondary CTA", f'Résumé → {p["resumeUrl"]}')

    # ---------------- 2. professional summary ----------------
    h2(doc, "2. Professional Summary")
    para(doc, "Used on the Experience page and as the résumé summary.",
         size=9, italic=True, color=SUBTLE, space_after=4)
    para(doc, d["professionalSummary"], size=10,
         align=WD_ALIGN_PARAGRAPH.JUSTIFY)

    # ---------------- 3. about me ----------------
    h2(doc, "3. About Me")
    para(doc, "Heading: “I stopped being a frontend developer a while ago”",
         size=9.5, italic=True, color=SUBTLE, space_after=5)
    for i, block in enumerate(d["aboutParagraphs"], 1):
        para(doc, f"Paragraph {i}", size=9, bold=True, color=ACCENT,
             space_before=4, space_after=2)
        para(doc, block, size=10, align=WD_ALIGN_PARAGRAPH.JUSTIFY,
             space_after=3)

    # ---------------- 4. career highlights ----------------
    h2(doc, "4. Career Highlights")
    for hl in d["careerHighlights"]:
        h3(doc, hl["title"], space_before=6, size=10.5)
        para(doc, hl["detail"], size=9.8, space_after=2, indent=0.12)

    # ---------------- 5. core competencies ----------------
    h2(doc, "5. Core Competencies")
    for group in d["coreCompetencies"]:
        h3(doc, group["group"], space_before=6, size=10.5)
        for it in group["items"]:
            bullet(doc, it, size=9.8, indent=0.12)

    # ---------------- 6. technical skills ----------------
    h2(doc, "6. Technical Skills")
    para(doc,
         "Grouped as they appear on the Tech Stack page. The Exposure group is "
         "deliberately separated and labelled — Flutter and C++ are evidence of "
         "adaptability, not claimed competencies.",
         size=9, italic=True, color=SUBTLE, space_after=5)

    for category in d["techCategories"]:
        items = [t for t in d["techStackData"] if t["category"] == category]
        if not items:
            continue
        h3(doc, category, space_before=6, size=10.5)
        for t in items:
            rich(doc, [
                ("• ", {"color": ACCENT}),
                (t["name"], {"bold": True, "size": 9.8}),
                (f'  ({t["experience"]} · {t["level"]})',
                 {"size": 9, "color": ACCENT}),
                (f'  — {t["description"]}', {"size": 9.3, "color": SUBTLE}),
            ], space_after=2, indent=0.12)

    # ---------------- 7. services ----------------
    h2(doc, "7. Services")
    for s in d["servicesData"]:
        h3(doc, s["title"], space_before=6, size=10.5)
        para(doc, s["description"], size=9.8, space_after=2, indent=0.12)
        field_list(doc, "Deliverables", s["deliverables"], size=9.5)

    doc.add_page_break()

    # ---------------- 8. work experience ----------------
    h2(doc, "8. Work Experience", space_before=0)
    for role in d["experienceData"]:
        rich(doc, [
            (role["position"], {"bold": True, "size": 13}),
        ], space_before=10, space_after=1)
        rich(doc, [
            (role["company"], {"bold": True, "size": 11, "color": ACCENT}),
        ], space_after=2)

        label_block(doc, "Employment dates", role["period"], size=9.8)
        label_block(doc, "Location", f'{role["location"]} ({role["workMode"]})', size=9.8)
        if role.get("designationNote"):
            label_block(doc, "Designation note", role["designationNote"], size=9.8)
        label_block(doc, "Summary", role["summary"], size=9.8)

        field_list(doc, "Responsibilities", role["responsibilities"], size=9.5)
        field_list(doc, "Major contributions", role["contributions"], size=9.5)

        para(doc, "Technologies used", size=9.5, bold=True, color=ACCENT,
             space_before=5, space_after=2)
        para(doc, ", ".join(role["technologies"]), size=9.5, indent=0.18,
             space_after=4)

    doc.add_page_break()

    # ---------------- 9. featured projects ----------------
    h2(doc, "9. Featured Projects", space_before=0)
    ordered = sorted(d["projectsData"], key=lambda x: x["date"], reverse=True)
    featured = [x for x in ordered if x.get("featured")]
    others = [x for x in ordered if not x.get("featured")]

    para(doc,
         f'{len(featured)} of {len(ordered)} projects are flagged as featured '
         "and appear in the larger cards at the top of the Projects page.",
         size=9, italic=True, color=SUBTLE, space_after=5)
    for pr in featured:
        rich(doc, [
            ("• ", {"color": ACCENT}),
            (pr["name"], {"bold": True, "size": 10}),
            (f'  —  {pr["role"]}  ·  {pr["period"]}',
             {"size": 9.3, "color": SUBTLE}),
        ], space_after=2, indent=0.12)

    # ---------------- 10. project details ----------------
    h2(doc, "10. Project Details")
    para(doc,
         "Full record for every project on the site, newest first. Featured "
         "projects are marked.",
         size=9, italic=True, color=SUBTLE, space_after=5)

    for idx, pr in enumerate(ordered, 1):
        rich(doc, [
            (f'{idx}. {pr["name"]}', {"bold": True, "size": 13}),
            ("   [FEATURED]" if pr.get("featured") else "",
             {"size": 8.5, "bold": True, "color": ACCENT}),
        ], space_before=12, space_after=3)

        label_block(doc, "Project name", pr["name"], size=9.8)
        label_block(doc, "Duration", f'{pr["period"]} ({pr["duration"]})', size=9.8)
        label_block(doc, "Category", pr["category"], size=9.8)
        label_block(doc, "Client / context", pr.get("client") or "—", size=9.8)
        if pr.get("employer"):
            label_block(doc, "Delivered at", pr["employer"], size=9.8)
        label_block(doc, "Role", pr["role"], size=9.8)
        label_block(doc, "Technologies used", ", ".join(pr["technologies"]), size=9.8)
        if pr.get("confidential"):
            label_block(doc, "Confidentiality",
                        "Client and product name withheld while in development",
                        size=9.8)

        para(doc, "Short description", size=9.5, bold=True, color=ACCENT,
             space_before=5, space_after=2)
        para(doc, pr["description"], size=9.5, indent=0.18, space_after=3)

        para(doc, "Full description", size=9.5, bold=True, color=ACCENT,
             space_before=3, space_after=2)
        para(doc, pr["detailedDescription"], size=9.5, indent=0.18,
             space_after=3, align=WD_ALIGN_PARAGRAPH.JUSTIFY)

        field_list(doc, "Responsibilities", pr.get("responsibilities"), size=9.5)
        field_list(doc, "Challenges", pr.get("challenges"), size=9.5)
        field_list(doc, "Solutions", pr.get("solutions"), size=9.5)

        if pr.get("impact"):
            para(doc, "Business impact", size=9.5, bold=True, color=ACCENT,
                 space_before=5, space_after=2)
            para(doc, pr["impact"], size=9.5, indent=0.18, space_after=3)

        field_list(doc, "Key achievements", pr.get("achievements"), size=9.5)
        field_list(doc, "What was built (features)", pr.get("features"), size=9.5)

    doc.add_page_break()

    # ---------------- 11. leadership ----------------
    h2(doc, "11. Leadership Experience", space_before=0)
    lead = d["leadershipData"]
    para(doc, lead["headline"], size=12, bold=True, space_after=3)
    para(doc, lead["intro"], size=10, space_after=6,
         align=WD_ALIGN_PARAGRAPH.JUSTIFY)

    for pillar in lead["pillars"]:
        h3(doc, pillar["title"], space_before=8, size=11)
        para(doc, pillar["body"], size=9.8, indent=0.12, space_after=3,
             align=WD_ALIGN_PARAGRAPH.JUSTIFY)
        field_list(doc, "Key points", pillar["points"], size=9.5)

    # ---------------- 12. client communication ----------------
    h2(doc, "12. Client Communication")
    client_pillar = next(
        (x for x in lead["pillars"] if "Client" in x["title"]), None
    )
    if client_pillar:
        para(doc, client_pillar["body"], size=10, space_after=4,
             align=WD_ALIGN_PARAGRAPH.JUSTIFY)
        field_list(doc, "Activities", client_pillar["points"], size=9.5)

    # ---------------- 13. AI & automation ----------------
    h2(doc, "13. AI & Automation Experience")
    ai = d["aiAutomationData"]
    para(doc, ai["headline"], size=12, bold=True, space_after=3)
    para(doc, ai["intro"], size=10, space_after=6,
         align=WD_ALIGN_PARAGRAPH.JUSTIFY)

    for pp in ai["proofPoints"]:
        h3(doc, pp["title"], space_before=7, size=10.5)
        para(doc, pp["body"], size=9.8, indent=0.12, space_after=2,
             align=WD_ALIGN_PARAGRAPH.JUSTIFY)
        rich(doc, [
            ("Takeaway: ", {"bold": True, "size": 9.3, "color": ACCENT}),
            (pp["takeaway"], {"italic": True, "size": 9.3, "color": SUBTLE}),
        ], indent=0.18, space_after=3)

    para(doc, "Tools", size=9.5, bold=True, color=ACCENT,
         space_before=6, space_after=2)
    para(doc, " · ".join(ai["tools"]), size=9.8, indent=0.18)

    # ---------------- 14. achievements ----------------
    h2(doc, "14. Achievements")
    para(doc,
         "Aggregated from every project. No invented metrics — each item is "
         "either verifiable or stated qualitatively.",
         size=9, italic=True, color=SUBTLE, space_after=5)
    for pr in ordered:
        if not pr.get("achievements"):
            continue
        para(doc, pr["name"], size=9.8, bold=True, color=ACCENT,
             space_before=5, space_after=2)
        for a in pr["achievements"]:
            bullet(doc, a, size=9.5, indent=0.12)

    # ---------------- 15. education ----------------
    h2(doc, "15. Education")
    for e in d["educationData"]:
        h3(doc, e["qualification"], space_before=5, size=10.5)
        para(doc, f'{e["institution"]}, {e["location"]}  ·  {e["period"]}',
             size=9.5, color=SUBTLE, indent=0.12, space_after=2)

    # ---------------- 16. certifications ----------------
    h2(doc, "16. Certifications")
    for c in d["certificationsData"]:
        rich(doc, [
            ("• ", {"color": ACCENT}),
            (c["name"], {"bold": True, "size": 9.8}),
            (f'  —  {c["issuer"]}  ·  {c["period"]}',
             {"size": 9.3, "color": SUBTLE}),
        ], space_after=2.5, indent=0.12)

    # ---------------- 17. testimonials ----------------
    h2(doc, "17. Testimonials")

    count = len(d.get("testimonialsData") or [])
    if count:
        for t in d["testimonialsData"]:
            named = t.get("consent") == "named" and t.get("name")
            who = t["name"] if named else t.get("role", "—")
            extra = (
                ", ".join(filter(None, [t.get("role"), t.get("company")]))
                if named
                else ", ".join(filter(None, [t.get("company"), t.get("context")]))
            )
            para(doc, f'“{t["quote"]}”', size=9.8, italic=True,
                 space_before=6, space_after=2,
                 align=WD_ALIGN_PARAGRAPH.JUSTIFY)
            rich(doc, [
                ("— ", {"color": ACCENT}),
                (who, {"bold": True, "size": 9.5}),
                (f"  ({extra})" if extra else "", {"size": 9.3, "color": SUBTLE}),
                (f'  · {t["project"]}' if t.get("project") else "",
                 {"size": 9.3, "color": ACCENT}),
                (f'  [consent: {t.get("consent", "UNRECORDED")}]',
                 {"size": 8.5, "color": SUBTLE}),
            ], indent=0.18, space_after=3)
    else:
        para(doc, "None published yet — the section is hidden on the site "
                  "while the testimonials list is empty.",
             size=9.8, bold=True, color=ACCENT, space_after=4)

    para(doc, "Why this matters", size=9.5, bold=True, color=ACCENT,
         space_before=6, space_after=2)
    para(doc,
         "You consistently receive positive client feedback on communication "
         "and professionalism. Right now that is asserted in your own voice on "
         "the Experience page, which is far weaker than someone else saying it. "
         "This remains the highest-value addition to the site.",
         size=9.8, space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)

    para(doc, "Publishing rules — read before adding anything", size=9.5,
         bold=True, color=ACCENT, space_before=4, space_after=2)
    for rule in [
        "Never publish a client's name, role, or company without explicit "
        "written permission. This applies even when the quote is flattering, "
        "and even when the person is a friend.",
        "Never republish a quote taken from private correspondence — Slack, "
        "email, WhatsApp, a call transcript — without asking first. Ask them "
        "to write a sentence they are happy to see published instead.",
        "Anonymizing is not sufficient on its own. A client can usually "
        "identify themselves and their project from an anonymized quote, so "
        "permission is still required for the quote itself.",
        "Check the engagement's NDA before naming the client or product at "
        "all. Where the build is unreleased, keep it in the confidential form "
        "already used for the social platform project.",
        "Record what was agreed in the consent field so a later edit cannot "
        "accidentally promote an anonymized quote to a named one.",
    ]:
        bullet(doc, rule, size=9.5, indent=0.12)

    para(doc, "Three options, safest first", size=9.5, bold=True,
         color=ACCENT, space_before=6, space_after=2)
    for opt_title, opt_body in [
        ("LinkedIn recommendations (no new consent needed)",
         "The author wrote and published it themselves, so nothing private is "
         "being republished and no personal information is being moved to a "
         "new venue. The Experience page already links to your LinkedIn "
         "recommendations. This is the strongest option and costs you only a "
         "polite request."),
        ("Anonymized quote with role and context",
         "“Product Manager, US investment platform” carries most of "
         "the credibility of a named quote with none of the personal "
         "information. Still ask permission for the quote itself. Set name and "
         "company to null and consent to “anonymized”."),
        ("Named quote with written permission",
         "Strongest on the page, but only after the person has confirmed in "
         "writing that they are happy to be named publicly. Set consent to "
         "“named”. Keep the written permission on file."),
    ]:
        h3(doc, opt_title, space_before=5, size=10)
        para(doc, opt_body, size=9.5, indent=0.12, space_after=2,
             align=WD_ALIGN_PARAGRAPH.JUSTIFY)

    para(doc, "How to add one", size=9.5, bold=True, color=ACCENT,
         space_before=6, space_after=2)
    para(doc,
         "Add an object to the testimonialsData array in src/app/data.js. The "
         "section renders automatically once the array is non-empty, and stays "
         "hidden while it is empty. Fields: quote, name, role, company, "
         "context, project, consent (“named” or “anonymized”).",
         size=9.5, indent=0.18, space_after=3)

    # ---------------- 18. languages ----------------
    h2(doc, "18. Languages")
    for l in d["languagesData"]:
        rich(doc, [
            ("• ", {"color": ACCENT}),
            (l["name"], {"bold": True, "size": 9.8}),
            (f'  —  {l["level"]}', {"size": 9.5, "color": SUBTLE}),
        ], space_after=2.5, indent=0.12)

    # ---------------- 19. contact ----------------
    h2(doc, "19. Contact Information")
    label_block(doc, "Email", p["email"])
    label_block(doc, "Phone", p["phone"])
    label_block(doc, "Location", p["location"])
    label_block(doc, "Availability", p["availability"])
    label_block(doc, "LinkedIn", p["links"]["linkedin"])
    label_block(doc, "GitHub", p["links"]["github"])
    label_block(doc, "Instagram", p["links"]["instagram"])
    label_block(doc, "Résumé file", p["resumeUrl"])

    para(doc, "Contact page — “Good fits” list", size=9.5, bold=True,
         color=ACCENT, space_before=6, space_after=2)
    for fit in [
        "Senior Software Engineer roles (web, mobile, or both)",
        "Technical Lead or delivery ownership positions",
        "Product engineering at a startup that needs range",
        "Contract work on React Native or Next.js products",
        "Stabilising or taking over an inherited codebase",
    ]:
        bullet(doc, fit, size=9.5, indent=0.12)

    # ---------------- 20. navigation ----------------
    h2(doc, "20. Site Navigation")
    para(doc, "Order shown is the orbit order on the home page.",
         size=9, italic=True, color=SUBTLE, space_after=4)
    for b in d["BtnList"]:
        rich(doc, [
            ("• ", {"color": ACCENT}),
            (b["label"], {"bold": True, "size": 9.8}),
            (f'  →  {b["link"]}', {"size": 9.3, "color": SUBTLE}),
            ("  (new tab)" if b.get("newTab") else "",
             {"size": 8.5, "italic": True, "color": SUBTLE}),
        ], space_after=2.5, indent=0.12)

    page_number_footer(doc.sections[0],
                       f'{p["name"]} — Portfolio Content')

    doc.save(out_path)
    return out_path


def main():
    if len(sys.argv) != 4:
        print(__doc__)
        sys.exit(1)

    content_json, out_portfolio, out_resume = sys.argv[1:4]

    with open(content_json) as fh:
        d = json.load(fh)

    build_resume(d, out_resume)
    print(f"Wrote {out_resume}")

    build_portfolio_doc(d, out_portfolio)
    print(f"Wrote {out_portfolio}")


if __name__ == "__main__":
    main()
