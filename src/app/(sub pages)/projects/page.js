import Image from "next/image";
import bg from "../../../../public/background/projects-background4.png";
import { projectsData } from "../../data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
// import ProjectModel from "@/components/models/ProjectModel";
import dynamic from "next/dynamic";

const ProjectModel = dynamic(() => import("@/components/models/ProjectModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-60"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <ProjectModel />
        </RenderModel>
      </div>
    </>
  );
}
