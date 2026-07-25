import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData, personalData } from "@/app/data";
import Reveal from "@/components/ui/Reveal";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Code,
  Smartphone,
  Globe,
  Bot,
  Layers,
  Lock,
  Building2,
  UserCircle,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Trophy,
  ListChecks,
} from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id.toString() }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.id.toString() === params.id);

  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} — ${project.role}`,
      description: project.description,
    },
  };
}

const categoryIcons = {
  "Mobile App": Smartphone,
  "Web Application": Globe,
  "AI & Automation": Bot,
  "Web & Mobile": Layers,
};

// Two-column list block used for challenges/solutions and achievements.
function ListPanel({ icon: Icon, title, items, accent = "accent" }) {
  if (!items?.length) return null;

  return (
    <Reveal className="custom-bg-raised rounded-xl p-5 sm:p-6">
      <h2 className="flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg">
        <Icon
          className={`h-4 w-4 shrink-0 ${
            accent === "warn" ? "text-amber-400" : "text-accent"
          }`}
          aria-hidden="true"
        />
        {title}
      </h2>
      <div aria-hidden="true" className="hairline mt-3 h-px w-full" />
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((entry) => (
          <li
            key={entry}
            className="flex gap-2.5 text-sm leading-relaxed text-foreground/80"
          >
            <span
              aria-hidden="true"
              className={`mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                accent === "warn" ? "bg-amber-400/80" : "bg-accent"
              }`}
            />
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function ProjectDetail({ params }) {
  const project = projectsData.find((p) => p.id.toString() === params.id);

  if (!project) notFound();

  const CategoryIcon = categoryIcons[project.category] || Layers;

  // Next / previous by recency, so a recruiter can walk the portfolio
  // without returning to the index between every case study.
  const ordered = [...projectsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const position = ordered.findIndex((p) => p.id === project.id);
  const previous = ordered[position - 1];
  const next = ordered[position + 1];

  return (
    <>
      <Image
        src="/background/projects-background6.webp"
        alt=""
        className="fixed left-0 top-0 -z-50 h-full w-full object-cover object-center opacity-20"
        priority
        fill
        sizes="100vw"
      />

      <article id="main-content" className="page-shell max-w-4xl py-4">
        <Reveal>
          <Link
            href="/projects"
            className="-ml-2 inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All projects
          </Link>
        </Reveal>

        {/* ---------------- Header ---------------- */}
        <Reveal className="mt-6 flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
              <CategoryIcon className="h-4 w-4" aria-hidden="true" />
              {project.category}
            </span>

            {project.featured && <span className="tag">Featured</span>}

            {project.confidential && (
              <span className="inline-flex items-center gap-1 text-xs text-muted">
                <Lock className="h-3 w-3" aria-hidden="true" />
                Client name withheld
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {project.name}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
            {project.description}
          </p>
        </Reveal>

        {/* ---------------- Fact bar ---------------- */}
        <Reveal delay={0.06} className="custom-bg-raised mt-7 grid gap-4 rounded-xl p-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow flex items-center gap-1.5">
              <UserCircle className="h-3 w-3" aria-hidden="true" />
              Role
            </p>
            <p className="mt-1.5 text-sm font-semibold text-foreground">
              {project.role}
            </p>
          </div>

          <div>
            <p className="eyebrow flex items-center gap-1.5">
              <CalendarDays className="h-3 w-3" aria-hidden="true" />
              Timeline
            </p>
            <p className="mt-1.5 text-sm font-semibold text-foreground">
              {project.period}
            </p>
          </div>

          <div>
            <p className="eyebrow flex items-center gap-1.5">
              <Clock className="h-3 w-3" aria-hidden="true" />
              Duration
            </p>
            <p className="mt-1.5 text-sm font-semibold text-foreground">
              {project.duration}
            </p>
          </div>

          <div>
            <p className="eyebrow flex items-center gap-1.5">
              <Building2 className="h-3 w-3" aria-hidden="true" />
              Context
            </p>
            <p className="mt-1.5 text-sm font-semibold text-foreground">
              {project.employer || project.client}
            </p>
            {project.employer && project.client && (
              <p className="mt-0.5 text-xs text-muted">{project.client}</p>
            )}
          </div>
        </Reveal>

        <div className="mt-6 flex flex-col gap-5">
          {/* ---------------- Overview ---------------- */}
          <Reveal className="custom-bg-raised rounded-xl p-5 sm:p-6">
            <h2 className="font-display text-base font-bold text-foreground sm:text-lg">
              Overview
            </h2>
            <div aria-hidden="true" className="hairline mt-3 h-px w-full" />
            <p className="mt-4 text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]">
              {project.detailedDescription}
            </p>
          </Reveal>

          {/* ---------------- Responsibilities ---------------- */}
          <ListPanel
            icon={ListChecks}
            title="My responsibilities"
            items={project.responsibilities}
          />

          {/* ---------------- Challenges & solutions ---------------- */}
          <div className="grid gap-5 lg:grid-cols-2">
            <ListPanel
              icon={AlertTriangle}
              title="Challenges"
              items={project.challenges}
              accent="warn"
            />
            <ListPanel
              icon={Lightbulb}
              title="How I solved them"
              items={project.solutions}
            />
          </div>

          {/* ---------------- Impact ---------------- */}
          {project.impact && (
            <Reveal className="custom-bg-raised rounded-xl border-l-2 border-l-accent p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg">
                <TrendingUp className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                Business impact
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]">
                {project.impact}
              </p>
            </Reveal>
          )}

          {/* ---------------- Achievements ---------------- */}
          <ListPanel
            icon={Trophy}
            title="Key achievements"
            items={project.achievements}
          />

          {/* ---------------- Features ---------------- */}
          {project.features?.length > 0 && (
            <Reveal className="custom-bg-raised rounded-xl p-5 sm:p-6">
              <h2 className="font-display text-base font-bold text-foreground sm:text-lg">
                What was built
              </h2>
              <div aria-hidden="true" className="hairline mt-3 h-px w-full" />
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-lg border border-muted/10 bg-background/30 p-3 text-xs leading-relaxed text-foreground/80 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {/* ---------------- Stack ---------------- */}
          <Reveal className="custom-bg-raised rounded-xl p-5 sm:p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg">
              <Code className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              Technologies used
            </h2>
            <div aria-hidden="true" className="hairline mt-3 h-px w-full" />
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-accent/20 bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/50 sm:text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---------------- Prev / next ---------------- */}
        <nav
          aria-label="Project navigation"
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.id}`}
              className="custom-bg group flex flex-col rounded-xl p-4 transition-colors hover:border-accent/55"
            >
              <span className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wider text-muted">
                <ArrowLeft className="h-3 w-3" aria-hidden="true" />
                More recent
              </span>
              <span className="mt-1.5 font-display text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                {previous.name}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next && (
            <Link
              href={`/projects/${next.id}`}
              className="custom-bg group flex flex-col rounded-xl p-4 text-right transition-colors hover:border-accent/55 sm:items-end"
            >
              <span className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wider text-muted">
                Earlier
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </span>
              <span className="mt-1.5 font-display text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                {next.name}
              </span>
            </Link>
          )}
        </nav>

        {/* ---------------- CTA ---------------- */}
        <Reveal className="custom-bg-raised mt-6 flex flex-col items-center gap-3 rounded-xl p-6 text-center sm:p-8">
          <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">
            Want the detail behind this?
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-foreground/75">
            Happy to walk through the architecture, the decisions I&apos;d make
            differently now, and what I learned.
          </p>
          <div className="mt-1 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={`mailto:${personalData.email}`} className="btn-secondary">
              {personalData.email}
            </a>
          </div>
        </Reveal>
      </article>
    </>
  );
}
