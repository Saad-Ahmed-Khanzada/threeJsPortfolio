import Image from "next/image";
import Link from "next/link";
import bg from "../../../../public/background/about-background4.webp";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import LeadershipPillars from "@/components/experience/LeadershipPillars";
import AiAdaptability from "@/components/experience/AiAdaptability";
import Testimonials from "@/components/experience/Testimonials";
import {
  personalData,
  professionalSummary,
  careerHighlights,
  leadershipData,
  aiAutomationData,
  educationData,
  certificationsData,
  languagesData,
} from "@/app/data";
import { ArrowRight, FileText, GraduationCap, Award, Languages } from "lucide-react";

export const metadata = {
  title: "Experience",
  description:
    "4+ years of professional software engineering across the US, UK, UAE, and Pakistan — technical leadership of a 12-person cross-functional team, client-facing delivery ownership, and hands-on web and mobile development.",
};

export default function Experience() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt=""
        className="fixed left-0 top-0 -z-50 h-full w-full object-cover object-center opacity-20"
      />

      <div id="main-content" className="page-shell section-stack py-4">
        {/* ---------------- Intro ---------------- */}
        <section>
          {/* Real <h1> — the rest of the page uses SectionHeading, which
              renders <h2>, so without this the document had no top-level
              heading for search engines or screen readers. */}
          <Reveal>
            <span className="eyebrow">Experience</span>
            <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              4+ years shipping products — and leading the teams behind them
            </h1>
            <div aria-hidden="true" className="hairline mt-4 h-px w-24" />
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base">
              {professionalSummary}
            </p>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.1}>
            <Link href="/projects" className="btn-primary">
              Browse projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Download résumé
            </a>
          </Reveal>
        </section>

        {/* ---------------- Career highlights ---------------- */}
        <section>
          <SectionHeading
            eyebrow="Career highlights"
            title="What the last four years actually consisted of"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careerHighlights.map((highlight, index) => (
              <Reveal
                key={highlight.title}
                delay={index * 0.06}
                className="custom-bg-raised hover-lift flex h-full flex-col rounded-xl p-5"
              >
                <h3 className="font-display text-sm font-bold leading-snug text-accent sm:text-base">
                  {highlight.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  {highlight.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- Work history ---------------- */}
        <section>
          <SectionHeading
            eyebrow="Work history"
            title="Where I've worked"
            intro="Four roles across the United States, United Arab Emirates, United Kingdom, and Pakistan — each one widening the scope from writing features to owning delivery."
          />

          <div className="mt-8">
            <ExperienceTimeline />
          </div>
        </section>

        {/* ---------------- Leadership ---------------- */}
        <section>
          <SectionHeading
            eyebrow="Leadership & ownership"
            title={leadershipData.headline}
            intro={leadershipData.intro}
          />

          <div className="mt-8">
            <LeadershipPillars />
          </div>
        </section>

        {/* ---------------- AI & automation ---------------- */}
        <section>
          <SectionHeading
            eyebrow="AI & automation"
            title={aiAutomationData.headline}
            intro={aiAutomationData.intro}
          />

          <div className="mt-8">
            <AiAdaptability />
          </div>
        </section>

        {/* ---------------- Testimonials ---------------- */}
        <section>
          <SectionHeading
            eyebrow="Client feedback"
            title="What the people I've worked with say"
            intro="Recommendations written and published by colleagues and clients themselves — no private correspondence reproduced here."
          />

          <div className="mt-8">
            <Testimonials />
          </div>
        </section>

        {/* ---------------- Education / certs / languages ---------------- */}
        <section>
          <SectionHeading
            eyebrow="Background"
            title="Education, certifications & languages"
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Reveal className="custom-bg-raised rounded-xl p-5 sm:p-6">
              <h3 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-foreground">
                <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" />
                Education
              </h3>
              <ul className="flex flex-col gap-4">
                {educationData.map((entry) => (
                  <li key={entry.institution} className="border-l-2 border-accent/40 pl-3">
                    <p className="text-sm font-semibold text-foreground">
                      {entry.qualification}
                    </p>
                    <p className="mt-0.5 text-xs text-accent">{entry.institution}</p>
                    <p className="mt-0.5 text-xs text-muted">
                      {entry.period} · {entry.location}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.06} className="custom-bg-raised rounded-xl p-5 sm:p-6">
              <h3 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-foreground">
                <Award className="h-4 w-4 text-accent" aria-hidden="true" />
                Certifications
              </h3>
              <ul className="flex flex-col gap-4">
                {certificationsData.map((cert) => (
                  <li key={cert.name} className="border-l-2 border-accent/40 pl-3">
                    <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                    <p className="mt-0.5 text-xs text-accent">{cert.issuer}</p>
                    <p className="mt-0.5 text-xs text-muted">{cert.period}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12} className="custom-bg-raised rounded-xl p-5 sm:p-6">
              <h3 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-foreground">
                <Languages className="h-4 w-4 text-accent" aria-hidden="true" />
                Languages
              </h3>
              <ul className="flex flex-col gap-4">
                {languagesData.map((lang) => (
                  <li key={lang.name} className="border-l-2 border-accent/40 pl-3">
                    <p className="text-sm font-semibold text-foreground">{lang.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{lang.level}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <Reveal className="custom-bg-raised flex flex-col items-center gap-4 rounded-xl p-7 text-center sm:p-10">
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            Hiring for a senior or lead role?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-foreground/75">
            I&apos;m open to remote positions worldwide. Happy to walk through any
            of this in detail — including the parts that went wrong and what I did
            about them.
          </p>
          <div className="mt-1 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${personalData.email}`}
              className="btn-secondary"
            >
              {personalData.email}
            </a>
          </div>
        </Reveal>
      </div>
    </>
  );
}
