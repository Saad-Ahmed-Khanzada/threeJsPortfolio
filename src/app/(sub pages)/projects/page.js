import Image from "next/image";
import bg from "../../../../public/background/projects-background6.webp";
import { projectsData, personalData } from "../../data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const ProjectModel = dynamic(() => import("@/components/models/ProjectModel"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
  description:
    "20+ delivered web and mobile products — investment platforms, regulated communication apps, national telecom PWAs, fitness applications, and AI workflow automation.",
};

export default function Projects() {
  const mobileCount = projectsData.filter((p) => p.category === "Mobile App").length;
  const webCount = projectsData.filter((p) => p.category === "Web Application").length;
  const automationCount = projectsData.filter(
    (p) => p.category === "AI & Automation"
  ).length;

  return (
    <>
      <Image
        src={bg}
        alt=""
        className="fixed left-0 top-0 -z-50 h-full w-full object-cover object-center opacity-20"
        priority
        sizes="100vw"
      />

      {/* Ambient 3D model — decorative, kept well behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 flex items-center justify-center opacity-[0.12]"
      >
        <RenderModel>
          <ProjectModel />
        </RenderModel>
      </div>

      <div id="main-content" className="page-shell section-stack py-4">
        <header className="content-vignette relative flex flex-col items-center text-center">
          <span className="eyebrow">Projects</span>

          <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Work I&apos;ve shipped
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
            {personalData.projectsDelivered} projects across mobile, web, and
            automation — for clients in the United States, United Kingdom, United
            Arab Emirates, and Pakistan. Each entry covers the role I held, the
            problem, and what I actually did about it.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            <li className="tag">{mobileCount} mobile apps</li>
            <li className="tag">{webCount} web applications</li>
            <li className="tag">{automationCount} AI &amp; automation builds</li>
          </ul>
        </header>

        <ProjectList projects={projectsData} />
      </div>
    </>
  );
}
