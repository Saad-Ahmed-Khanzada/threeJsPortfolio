import Image from "next/image";
import bg from "../../../../public/background/about-background4.webp";

import RenderModel from "@/components/RenderModel";
// import AboutModel from "@/components/models/AboutModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const AboutModel = dynamic(() => import("@/components/models/AboutModel"), {
  ssr: false,
});

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

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-3/4 opacity-70 -translate-y-1/2 left-0">
        <RenderModel>
          <AboutModel />
        </RenderModel>
      </div>

      <div className="relative w-full p-0 lg:p-4 mt-8 h-full flex flex-col items-center justify-center">
        <div className="absolute flex  w-full flex-col items-center text-center top-[60%] sm:top-[-10%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold pb text-xl xs:text-2xl sm:text-4xl  lg:text-5xl  text-accent  bg-white bg-opacity-5 p-1 xs:p-2 sm:p-2 lg:p-4 rounded-full">
            Saad Ahmed Khanzada
          </h1>
          <p className="font-light text-foreground text-sm xs:text-sm sm:text-2xl  lg:text-3xl ">
           Computer Scientist
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
