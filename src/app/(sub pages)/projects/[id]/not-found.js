import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { projectsData } from "@/app/data";

export default function ProjectNotFound() {
  /*
    Suggestions are derived from the data file rather than hard-coded.
    The previous version listed "FitForge Pro", "DreamScope Analytics", and
    "WealthWise Portfolio" as links — placeholder names that no longer exist
    after the projects were renamed, so every suggestion on the 404 page was
    itself broken or misleading.
  */
  const suggestions = [...projectsData]
    .filter((project) => project.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

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

      <div
        id="main-content"
        className="page-shell max-w-2xl items-center py-10 text-center"
      >
        <div className="custom-bg flex h-20 w-20 items-center justify-center rounded-full">
          <AlertCircle className="h-10 w-10 text-accent" aria-hidden="true" />
        </div>

        <h1 className="mt-7 font-display text-2xl font-extrabold text-foreground sm:text-4xl">
          Project not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
          That project doesn&apos;t exist, or it may have been renamed.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/projects" className="btn-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>
          <Link href="/" className="btn-secondary">
            Go home
          </Link>
        </div>

        <div className="custom-bg-raised mt-12 w-full rounded-xl p-5 text-left sm:p-6">
          <h2 className="font-display text-base font-bold text-foreground">
            Try one of these instead
          </h2>
          <div aria-hidden="true" className="hairline mt-3 h-px w-full" />
          <ul className="mt-4 flex flex-col gap-3">
            {suggestions.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/projects/${project.id}`}
                  className="group flex flex-col rounded-lg py-1 transition-colors"
                >
                  <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.name}
                  </span>
                  <span className="mt-0.5 text-xs text-muted">
                    {project.role} · {project.period}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
