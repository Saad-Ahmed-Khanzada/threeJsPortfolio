import Image from "next/image";
import Link from "next/link";
import bg from "../../../../public/background/contact-background2.webp";
import { techStackData, personalData } from "../../data";
import TechStackGrid from "@/components/TechStackGrid";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Tech Stack",
  description:
    "React, React Native, Next.js, SvelteKit, TypeScript, Redux Toolkit, Firebase, AWS and n8n, with an honest experience level against each one.",
};

export default function TechStack() {
  return (
    <>
      <Image
        src={bg}
        alt=""
        priority
        sizes="100vw"
        className="fixed left-0 top-0 -z-50 h-full w-full object-cover object-center opacity-20"
      />

      <div id="main-content" className="page-shell section-stack py-4">
        <header className="flex flex-col items-center text-center">
          <span className="eyebrow">Tech stack</span>

          <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            What I work with
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
            Grouped by role in the stack, with the honest experience level for
            each. Where I&apos;ve shipped production work in something without
            being a specialist in it, it says so instead of being padded into the
            main list.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="tag">{personalData.yearsExperience} years experience</span>
            <span className="tag">{techStackData.length} technologies</span>
          </div>
        </header>

        <TechStackGrid techStack={techStackData} />

        <div className="custom-bg-raised flex flex-col items-center gap-3 rounded-xl p-6 text-center sm:p-8">
          <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">
            Not seeing your stack?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-foreground/75">
            Two of the projects on this site were delivered in languages I
            hadn&apos;t shipped production code in before starting. Ramping into
            an unfamiliar codebase is a skill I&apos;ve worked at.
          </p>
          <div className="mt-1 flex flex-wrap justify-center gap-3">
            <Link href="/experience" className="btn-primary">
              How I do that
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
