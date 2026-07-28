#!/usr/bin/env python3
"""
Builds the cover letter and Loom video script.

Outputs both .docx (for editing) and .md (for pasting into application forms
and email, which is how a cover letter actually gets sent most of the time).

Content lives in this file rather than in data.js because it is prose, not
structured site content — but every factual claim here matches the résumé and
the portfolio. If you change a fact in one, change it in all three.

Usage:
  python make_career_docs.py <out_dir>
"""

import sys
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor

ACCENT = RGBColor(0x0B, 0x5F, 0x73)
INK = RGBColor(0x1A, 0x1A, 0x1A)
SUBTLE = RGBColor(0x55, 0x55, 0x55)

NAME = "Saad Ahmed Khanzada"
EMAIL = "saadkhanzada1@gmail.com"
PHONE = "+92 324 2400532"
PORTFOLIO = "saad-ahmed-khanzada-portfolio.vercel.app"
LINKEDIN = "linkedin.com/in/saad-ahmed-khanzada"


# --------------------------------------------------------------------------
# content
# --------------------------------------------------------------------------

COVER_LETTER_LONG = [
    "Dear [Hiring Manager’s name],",
    "I’m applying for the [Role] position at [Company]. [ONE SENTENCE ON WHY "
    "THIS COMPANY. See the notes at the end. This is the only line that has "
    "to change every time, and the only line that decides whether the rest "
    "gets read.]",
    "I’m a senior software engineer with 5+ years building web and mobile "
    "products for clients in the United States, United Kingdom, United Arab "
    "Emirates, and Pakistan. My title has usually said “developer”, but the "
    "work has consistently been wider than that: I run requirement sessions "
    "with clients directly, break what they need into technical plans, write "
    "the production React Native and Next.js code, and own the release "
    "through App Store Connect and Google Play.",
    "The clearest example is my current project. Our Project Manager left "
    "partway through an active engagement. I did not wait for a "
    "replacement. I took over delivery: planning, task assignment, reviewing "
    "everything before it reached the client, tracking risk, and running the "
    "client relationship. I now lead twelve people across frontend, backend, "
    "QA, design and business analysis, and the schedule never paused for the "
    "handover.",
    "I’d also point to two smaller projects that say something less obvious "
    "about how I work. One was a Flutter application, the other a C++ mobile "
    "codebase, and I had shipped production code in neither language. Both "
    "clients needed defects fixed, and neither had budgeted a learning "
    "period. I used AI-assisted code analysis to build a working model of "
    "each codebase in days and delivered the fixes. I’m not claiming to be a "
    "Flutter or C++ engineer. I’m claiming I can become useful in a stack I "
    "don’t know yet, which on most teams matters more.",
    "[OPTIONAL. The strongest single addition you can make: one sentence "
    "connecting a specific requirement from their job posting to something "
    "you have actually done. Delete this line if you can’t do it honestly.]",
    "My portfolio is at " + PORTFOLIO + ", where each project covers the role "
    "I held, the problem, and what I did about it. I’d welcome the chance to "
    "talk through any of it.",
    "Best regards,",
    NAME,
    f"{EMAIL}  ·  {PHONE}  ·  {LINKEDIN}",
]

COVER_LETTER_SHORT = [
    "Hi [Name],",
    "I’m applying for [Role] at [Company]. [One sentence on why this company.]",
    "I’m a senior software engineer with 5+ years building web and mobile "
    "products for clients in the US, UK, UAE and Pakistan, in React, React "
    "Native, Next.js and TypeScript. Beyond the code, I run client requirement "
    "sessions and own delivery end to end, including App Store and Play "
    "Console releases.",
    "Right now I lead a twelve-person cross-functional team. I took that over "
    "mid-project when our Project Manager left, without pausing the schedule.",
    f"Portfolio: {PORTFOLIO}",
    "Résumé attached.",
    "Happy to talk whenever suits.",
    NAME,
]

COVER_LETTER_NOTES = [
    (
        "Customize the second line, every single time",
        "A recruiter can tell a template at a glance, and a generic cover "
        "letter is worth less than no cover letter. Spend five minutes on the "
        "company: read their product page, their engineering blog, or the job "
        "posting’s description of the team. Then write one specific sentence. "
        "“I’ve been following your work on X” is not specific. “You’re "
        "shipping a React Native app into a regulated market, which is "
        "exactly the constraint I worked under on CallMe” is.",
    ),
    (
        "Match the letter to the role you’re applying for",
        "For a Technical Lead role, lead with the twelve-person paragraph and "
        "cut the Flutter/C++ paragraph to one sentence. For a hands-on Senior "
        "Engineer role, do the reverse. For a startup, keep both, because range is "
        "the selling point there.",
    ),
    (
        "Keep it to one page",
        "The long version is already at the top of what actually gets read. "
        "If you add a sentence, remove one.",
    ),
    (
        "Use the short version more often than you think",
        "Most applications are an email or a form field, not an attached "
        "letter. The short version is built for that. Send the long one only "
        "when there is a real “cover letter” upload field.",
    ),
    (
        "Never claim Flutter or C++ as a skill",
        "The framing in both versions is deliberate and it is what makes the "
        "story credible. Presenting it as expertise invites a technical "
        "question you can’t answer and costs you the interview.",
    ),
    (
        "Address it to a person where you can",
        "Check the job posting, the company’s team page, or LinkedIn for the "
        "hiring manager or engineering lead. “Dear Hiring Team” is fine as a "
        "fallback; “To Whom It May Concern” reads as dated.",
    ),
]

# Words per minute assumed when generating timecodes. 140 is a relaxed,
# clear speaking pace — most people's first instinct is nearer 190, which is
# why an unscripted "two minute" video usually lands at 1:20 and sounds rushed.
SPEAKING_WPM = 140

# (label, on-screen direction, spoken lines). Timecodes are computed from the
# word count rather than written by hand, so editing a line can never leave
# the script promising a pace that cannot be delivered.
LOOM_SEGMENTS = [
    (
        "Hook",
        "Camera only. No screen share yet.",
        [
            "Hi, I\u2019m Saad. I\u2019m a senior software engineer, and for the last "
            "four years I\u2019ve been building web and mobile products, mostly "
            "React, React Native and Next.js, for clients in the US, the "
            "UK, the UAE and Pakistan.",
            "Let me show you what that actually looks like day to day.",
        ],
    ),
    (
        "The range",
        "Share your screen. Open the Experience page of your portfolio.",
        [
            "My title has usually said \u201cdeveloper\u201d. The work has been wider "
            "than that.",
            "A normal week has me on a call with a client working out what "
            "they actually need, turning that into tickets for the team, "
            "reviewing pull requests, writing production code myself, and "
            "getting the build through App Store review.",
            "That last part matters more than people expect. Projects stall "
            "less often because the code is wrong than because nobody owns "
            "the release. I handle that part.",
        ],
    ),
    (
        "Leadership: your strongest 30 seconds",
        "Scroll to the Leadership section, or come back to camera. Slow down here.",
        [
            "The biggest thing I\u2019ve taken on is on my current project. Our "
            "Project Manager left in the middle of an active engagement.",
            "I didn\u2019t wait for a replacement. I took over delivery. Planning, "
            "assigning work, reviewing everything before it reaches the "
            "client, and running the client relationship directly.",
            "I now lead twelve people: frontend, backend, QA, designers, and "
            "business analysts. The schedule didn\u2019t pause for the handover.",
        ],
    ),
    (
        "Adaptability",
        "Share screen. Open the Vastu and Walkaround project pages.",
        [
            "One more thing, because it\u2019s the question I\u2019d ask if I were you.",
            "Two of the projects on my site are in languages I hadn\u2019t shipped "
            "production code in. One was Flutter, one was a C++ mobile codebase. "
            "Both clients wanted bugs fixed, and neither had budgeted a "
            "learning period.",
            "I used AI to build a working understanding of each codebase in "
            "days, not months, and delivered the fixes.",
            "I\u2019m not telling you I\u2019m a Flutter developer. I\u2019m telling you I "
            "can be useful in a stack I don\u2019t know yet, quickly.",
        ],
    ),
    (
        "What you\u2019re looking for",
        "Stop sharing. Back to camera.",
        [
            "What I\u2019m looking for now is a senior or technical lead role, "
            "remote.",
            "Somewhere the job is owning a product instead of working "
            "through a ticket queue, because that\u2019s the part I\u2019m good at "
            "and the part I enjoy.",
        ],
    ),
    (
        "Close",
        "Camera. Smile. Don\u2019t rush the last line.",
        [
            "Everything I\u2019ve mentioned is on my portfolio, with the full "
            "story behind each project, including what went wrong and what I "
            "did about it. The link\u2019s below.",
            "Thanks for watching. I\u2019d be glad to talk.",
        ],
    ),
]


def timed_segments(segments, wpm=SPEAKING_WPM):
    """Attach a start/end timecode to each segment based on its word count."""
    def stamp(seconds):
        return f"{int(seconds // 60)}:{int(round(seconds % 60)):02d}"

    out, cursor = [], 0.0
    for label, direction, lines in segments:
        words = sum(len(line.split()) for line in lines)
        duration = words / wpm * 60
        out.append((f"{stamp(cursor)} \u2013 {stamp(cursor + duration)}",
                    label, direction, lines, words, duration))
        cursor += duration
    return out, cursor


LOOM_SHORT = [
    "Hi, I’m Saad. I’m a senior software engineer with four years building "
    "web and mobile products in React, React Native and Next.js for clients "
    "in the US, UK and UAE.",
    "Most of my work goes wider than writing features. I run requirement "
    "sessions with clients, break the work down for the team, and own the "
    "release through App Store Connect and Google Play.",
    "On my current project our Project Manager left mid-engagement, so I took "
    "over delivery. I now lead twelve people across frontend, backend, QA, "
    "design and business analysis, and we didn’t pause the schedule for the "
    "handover.",
    "I’m looking for a senior or technical lead role, remote. Portfolio’s in "
    "the description. Thanks for watching.",
]

LOOM_DELIVERY_NOTES = [
    (
        "Don’t read this script",
        "Reading is audible and it kills the whole point of sending a video "
        "instead of a letter. Learn the six beats (hook, range, leadership, "
        "adaptability, what you want, close) and talk through them in your "
        "own words. The wording here is a floor, not a cage.",
    ),
    (
        "Slow down",
        "Almost everyone rushes their first recording. Aim for roughly 140 "
        "words a minute. If the video comes in at 1:45 instead of 2:30, you "
        "talked too fast. Record it again.",
    ),
    (
        "One take, minimal editing",
        "Small stumbles read as human. A heavily-cut video reads as a sales "
        "pitch, which is the opposite of the impression you want.",
    ),
    (
        "Look at the camera, not your preview",
        "Loom puts your face in the corner and it is very hard not to watch "
        "yourself. Cover that part of the screen if you need to.",
    ),
    (
        "Lead with the leadership story if you only have 60 seconds",
        "The twelve-person handover is the single most differentiating thing "
        "you have. In the short version it moves up front.",
    ),
    (
        "Set the thumbnail and the title",
        "Title it “Saad Ahmed Khanzada, Senior Software Engineer (2 min "
        "intro)”. Recruiters scan a list of links; an untitled Loom looks "
        "like a screen recording of a bug.",
    ),
    (
        "Where to use it",
        "Paste the link in your LinkedIn About section, in the message body "
        "when you apply directly, and in your reply to a recruiter’s first "
        "email. Do not attach it to a formal application form that only asks "
        "for a résumé.",
    ),
]


# --------------------------------------------------------------------------
# docx helpers
# --------------------------------------------------------------------------

def base_style(doc, size=11):
    st = doc.styles["Normal"]
    st.font.name = "Calibri"
    st.font.size = Pt(size)
    st.font.color.rgb = INK
    st.paragraph_format.space_after = Pt(8)
    st.paragraph_format.line_spacing = 1.18
    rpr = st.element.get_or_add_rPr()
    rf = rpr.find(qn("w:rFonts"))
    if rf is None:
        rf = OxmlElement("w:rFonts")
        rpr.append(rf)
    rf.set(qn("w:eastAsia"), "Calibri")


def margins(doc, v=0.8, h=0.9):
    for s in doc.sections:
        s.top_margin = Inches(v)
        s.bottom_margin = Inches(v)
        s.left_margin = Inches(h)
        s.right_margin = Inches(h)


def border(p, color="C8D4D8", size=6):
    pPr = p._p.get_or_add_pPr()
    bd = OxmlElement("w:pBdr")
    b = OxmlElement("w:bottom")
    b.set(qn("w:val"), "single")
    b.set(qn("w:sz"), str(size))
    b.set(qn("w:space"), "2")
    b.set(qn("w:color"), color)
    bd.append(b)
    pPr.append(bd)


def para(doc, text="", size=11, bold=False, italic=False, color=INK,
         before=0, after=8, align=None, indent=None, caps=False):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
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
        r.font.all_caps = caps
    return p


def heading(doc, text, before=16):
    p = para(doc, text, size=11, bold=True, color=ACCENT, before=before,
             after=6, caps=True)
    border(p)
    return p


def bullet(doc, text, size=10.5, indent=0.2):
    p = doc.add_paragraph(style="List Bullet")
    pf = p.paragraph_format
    pf.left_indent = Inches(indent + 0.18)
    pf.first_line_indent = Inches(-0.18)
    pf.space_after = Pt(4)
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.font.color.rgb = INK
    return p


# --------------------------------------------------------------------------
# builders
# --------------------------------------------------------------------------

def word_count(blocks):
    """Words excluding [bracketed placeholders], which the user replaces."""
    import re

    text = " ".join(blocks)
    text = re.sub(r"\[.*?\]", "", text, flags=re.S)
    return len([w for w in text.split() if w.strip()])


def build_cover_letter(out_docx, out_md):
    # Counted rather than asserted — a note claiming "about 330 words" beside
    # a 293-word letter is exactly the kind of small wrongness that erodes
    # trust in the rest of the document.
    long_words = word_count(COVER_LETTER_LONG)
    short_words = word_count(COVER_LETTER_SHORT)

    doc = Document()
    base_style(doc)
    margins(doc)

    para(doc, NAME, size=18, bold=True, after=2)
    para(doc, "Senior Software Engineer  ·  Product Engineer  ·  Technical Lead",
         size=10.5, bold=True, color=ACCENT, after=3)
    p = para(doc, f"{EMAIL}  ·  {PHONE}  ·  {LINKEDIN}  ·  {PORTFOLIO}",
             size=9.5, color=SUBTLE, after=10)
    border(p, color="0B5F73", size=12)

    heading(doc, "Cover letter: full version", before=10)
    para(doc, "For applications with a dedicated cover-letter field or upload. "
              f"{long_words} words excluding the bracketed placeholders; keep "
              "it to one page.",
         size=9.5, italic=True, color=SUBTLE, after=10)

    for block in COVER_LETTER_LONG:
        is_contact = block.startswith(EMAIL)
        is_signoff = block in ("Best regards,", NAME) or is_contact
        para(
            doc,
            block,
            size=9.5 if is_contact else 11,
            after=4 if is_signoff else 9,
            # Sign-off lines stay left-aligned; body paragraphs justify.
            align=None if is_signoff else WD_ALIGN_PARAGRAPH.JUSTIFY,
            color=SUBTLE if is_contact else INK,
        )

    doc.add_page_break()

    heading(doc, "Cover letter: short version", before=0)
    para(doc, "For an email body, a form field with a character limit, or a "
              f"direct message to a recruiter. {short_words} words. You will "
              "use this one more often than the long version.",
         size=9.5, italic=True, color=SUBTLE, after=10)

    for block in COVER_LETTER_SHORT:
        para(doc, block, size=11, after=8)

    heading(doc, "How to use these")
    for title, body in COVER_LETTER_NOTES:
        para(doc, title, size=10.5, bold=True, color=ACCENT, before=8, after=3)
        para(doc, body, size=10.5, after=4, indent=0.15,
             align=WD_ALIGN_PARAGRAPH.JUSTIFY)

    doc.save(out_docx)

    # markdown twin, for pasting
    md = [f"# {NAME}: Cover Letter", "",
          f"{EMAIL} · {PHONE} · {LINKEDIN} · {PORTFOLIO}", "",
          "---", "", "## Full version",
          f"*For a dedicated cover-letter field. {long_words} words excluding "
          "placeholders.*", ""]
    md += [b + "\n" for b in COVER_LETTER_LONG]
    md += ["", "---", "", "## Short version",
           f"*For email bodies and form fields. {short_words} words.*", ""]
    md += [b + "\n" for b in COVER_LETTER_SHORT]
    md += ["", "---", "", "## How to use these", ""]
    for title, body in COVER_LETTER_NOTES:
        md += [f"**{title}**", "", body, ""]
    Path(out_md).write_text("\n".join(md))


def build_loom_script(out_docx, out_md):
    segments, total_seconds = timed_segments(LOOM_SEGMENTS)
    total = f"{int(total_seconds // 60)}:{int(round(total_seconds % 60)):02d}"

    doc = Document()
    base_style(doc)
    margins(doc)

    para(doc, "Loom video script", size=18, bold=True, after=2)
    para(doc, f"{NAME}  ·  “What I do” intro  ·  runs {total} at "
              f"{SPEAKING_WPM} words per minute",
         size=10.5, bold=True, color=ACCENT, after=3)
    p = para(doc, "Six beats: hook, range, leadership, adaptability, what you "
                  "want, close. Timecodes are calculated from the word count, "
                  "so if you come in noticeably under them you are talking too "
                  "fast.", size=9.5, color=SUBTLE, after=10)
    border(p, color="0B5F73", size=12)

    heading(doc, "Before you record", before=10)
    for item in [
        "Close every app that can notify you. A Slack toast on screen means "
        "re-recording.",
        "Open your portfolio in a clean browser window. No bookmarks bar, no "
        "other tabs, no personal email visible.",
        "Have the Experience page and the Vastu and Walkaround project pages "
        "already open in tabs so you are not navigating live.",
        "Face a window if you can. Good light matters more than a good camera.",
        "Do one throwaway take to warm up, then delete it.",
    ]:
        bullet(doc, item)

    heading(doc, "The script")

    for timecode, label, direction, lines, words, duration in segments:
        para(doc, f"{timecode}   ·   {label}", size=11.5, bold=True,
             color=ACCENT, before=14, after=2)
        para(doc, f"{direction}   ({words} words, ~{int(round(duration))}s)",
             size=9.5, italic=True, color=SUBTLE, after=6)
        for line in lines:
            para(doc, line, size=11, after=7, indent=0.15)

    doc.add_page_break()

    heading(doc, "60-second version", before=0)
    para(doc, "For LinkedIn, or when a recruiter asks for something short. "
              "The leadership story moves to the front.",
         size=9.5, italic=True, color=SUBTLE, after=10)
    for line in LOOM_SHORT:
        para(doc, line, size=11, after=8, indent=0.15)

    heading(doc, "Delivery notes")
    for title, body in LOOM_DELIVERY_NOTES:
        para(doc, title, size=10.5, bold=True, color=ACCENT, before=8, after=3)
        para(doc, body, size=10.5, after=4, indent=0.15,
             align=WD_ALIGN_PARAGRAPH.JUSTIFY)

    doc.save(out_docx)

    md = [f"# Loom Script: {NAME}", "",
          f"**“What I do” intro · runs {total} at {SPEAKING_WPM} words per "
          "minute**", "",
          "Six beats: hook, range, leadership, adaptability, what you want, "
          "close. Timecodes are calculated from the word count. If you come "
          "in noticeably under them, you are talking too fast.",
          "", "---", "", "## Before you record", ""]
    md += [
        "- Close every app that can notify you.",
        "- Open your portfolio in a clean browser window.",
        "- Pre-open the Experience, Vastu, and Walkaround pages in tabs.",
        "- Face a window. Light matters more than the camera.",
        "- Do one throwaway take to warm up.",
        "", "---", "", "## The script", "",
    ]
    for timecode, label, direction, lines, words, duration in segments:
        md += [f"### {timecode} · {label}", "",
               f"*{direction}  ({words} words, ~{int(round(duration))}s)*", ""]
        md += [line + "\n" for line in lines]
        md += [""]
    md += ["---", "", "## 60-second version", ""]
    md += [line + "\n" for line in LOOM_SHORT]
    md += ["", "---", "", "## Delivery notes", ""]
    for title, body in LOOM_DELIVERY_NOTES:
        md += [f"**{title}**", "", body, ""]
    Path(out_md).write_text("\n".join(md))


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)

    out = Path(sys.argv[1])
    out.mkdir(parents=True, exist_ok=True)

    build_cover_letter(out / "Cover-Letter.docx", out / "Cover-Letter.md")
    print(f"Wrote {out / 'Cover-Letter.docx'}")
    print(f"Wrote {out / 'Cover-Letter.md'}")

    build_loom_script(out / "Loom-Script.docx", out / "Loom-Script.md")
    print(f"Wrote {out / 'Loom-Script.docx'}")
    print(f"Wrote {out / 'Loom-Script.md'}")


if __name__ == "__main__":
    main()
