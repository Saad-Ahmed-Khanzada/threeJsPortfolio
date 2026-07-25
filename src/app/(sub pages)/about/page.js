import Image from "next/image";
import bg from "../../../../public/background/about-background4.webp";

import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import { personalData } from "@/app/data";

const AboutModel = dynamic(() => import("@/components/models/AboutModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
  description:
    "Senior Software Engineer working across product engineering, technical leadership, client communication, release engineering, and AI-assisted development.",
};

export default function About() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt=""
        className="fixed left-0 top-0 -z-50 h-full w-full object-cover object-center opacity-20"
      />

      {/*
        The 3D model is decorative here and now sits low on the page as an
        ambient element rather than behind the body copy, where it was
        competing with text for attention.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-1/2 -z-20 h-[45vh] w-full -translate-x-1/2 opacity-40 sm:h-[55vh]"
      >
        <RenderModel>
          <AboutModel />
        </RenderModel>
      </div>

      <div id="main-content" className="page-shell section-stack py-4">
        {/* Page header */}
        <header className="content-vignette relative flex flex-col items-center text-center">
          <span className="eyebrow">About</span>

          <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {personalData.name}
          </h1>

          <p className="mt-3 font-display text-base font-semibold text-accent sm:text-lg lg:text-xl">
            {personalData.title}
            <span className="text-foreground/50">
              {" · "}
              {personalData.secondaryTitles.join(" · ")}
            </span>
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
            {personalData.heroIntro}
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            <li className="tag">{personalData.yearsExperience} years experience</li>
            <li className="tag">{personalData.projectsDelivered} projects delivered</li>
            <li className="tag">{personalData.teamLed}-person team led</li>
            <li className="tag">Web &amp; mobile</li>
            <li className="tag">Client-facing</li>
          </ul>
        </header>

        <AboutDetails />
      </div>
    </>
  );
}
