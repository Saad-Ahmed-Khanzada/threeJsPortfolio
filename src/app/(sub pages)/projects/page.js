import Image from "next/image";
import bg from "../../../../public/background/projects-background6.webp";
import { projectsData } from "../../data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
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
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-20"
        priority
        sizes="100vw"
      />

      {/* Background 3D Model */}
      <div className="fixed inset-0 flex items-center justify-center -z-20 opacity-15">
        <RenderModel>
          <ProjectModel />
        </RenderModel>
      </div>

      {/* Projects List - Always in front */}
      <div className="relative z-10">
        <ProjectList projects={projectsData} />
      </div>
    </>
  );
}