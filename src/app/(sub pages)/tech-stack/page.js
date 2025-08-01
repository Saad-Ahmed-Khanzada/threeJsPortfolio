import Image from "next/image";
import bg from "../../../../public/background/contact-background2.webp";
import { techStackData } from "../../data";
import TechStackGrid from "@/components/TechStackGrid";

export const metadata = {
  title: "Tech Stack - Saad's Portfolio",
  description: "Technologies and tools I use for development including React, React Native, TypeScript, and more.",
};

export default function TechStack() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        priority 
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-20"
      />

      <article className="relative w-full flex flex-col items-center justify-center space-y-8 py-8 sm:py-0">
        <div className="flex flex-col items-center justify-center space-y-6 w-full">
          <h1 className="text-accent font-semibold text-center text-4xl md:text-5xl capitalize">
            Tech Stack
          </h1>
          
          <p className="font-light text-sm xs:text-base text-center max-w-2xl text-foreground/80">
            Here are the technologies, frameworks, and tools I use to bring ideas to life. 
            From mobile app development to web applications and automation workflows, 
            these are the building blocks of my development journey.
          </p>

          <TechStackGrid techStack={techStackData} />
        </div>
      </article>
    </>
  );
}