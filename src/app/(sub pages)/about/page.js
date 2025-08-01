import Image from "next/image";
import bg from "../../../../public/background/about-background4.webp";

import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const AboutModel = dynamic(() => import("@/components/models/AboutModel"), {
  ssr: false,
});

export const metadata = {
  title: "About - Saad Ahmed Khanzada",
  description: "N8N Agent Architect | Frontend Developer | Expert in AI Automation | Agentic AI & Prompt Engineering | Creator of Scalable, User-Centric Solutions.",
};

export default function About() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 sm:top-3/4 opacity-70 -translate-y-1/2 left-0 -z-10">
        <RenderModel>
          <AboutModel />
        </RenderModel>
      </div>

      <div className="relative w-full flex flex-col items-center justify-start pt-8 sm:pt-16 lg:pt-24 min-h-screen">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center text-center mb-16 sm:mb-24 lg:mb-32">
          <h1 className="font-bold text-xl xs:text-2xl sm:text-4xl lg:text-5xl text-accent bg-white bg-opacity-5 p-1 xs:p-2 sm:p-2 lg:p-4 rounded-full mb-4">
            Saad Ahmed Khanzada
          </h1>
          
          <p className="font-light text-foreground text-xs xs:text-sm sm:text-lg lg:text-xl max-w-4xl leading-relaxed px-4">
            Frontend Developer | React & Next.js Expert | Mobile App Developer
          </p>
          
          <p className="font-light text-foreground/80 text-xs xs:text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed px-4 mt-2">
            TypeScript Specialist | PWA & Responsive Design | N8N Automation Architect
          </p>
          
          <div className="mt-4 flex flex-wrap justify-center gap-2 px-4">
            <span className="px-2 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full text-xs">
              3+ Years Experience
            </span>
            <span className="px-2 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full text-xs">
              16+ Projects
            </span>
            <span className="px-2 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full text-xs">
              Frontend Expert
            </span>
          </div>
        </div>

        {/* About Details Section */}
        <div className="w-full">
          <AboutDetails />
        </div>
      </div>
    </>
  );
}