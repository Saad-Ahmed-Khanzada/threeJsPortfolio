import Image from "next/image";
import bg from "../../public/background/home-background9.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main
      id="main-content"
      className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden"
    >
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt=""
        fill
        className="h-full w-full object-cover object-center opacity-25"
      />

      {/* Depth gradient so the hero copy always has a dark base to sit on */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_center,transparent_25%,rgb(var(--background)/0.75)_100%)]"
      />

      <div className="relative h-screen w-full">
        {/*
          Stacking order on this screen:
            model canvas (behind) → hero copy → orbiting navigation (top)
          The model stays the visual centrepiece; the copy makes sure a
          recruiter knows whose portfolio this is within one second.
        */}
        {/*
          The model is anchored to the lower half of the screen rather than
          dead centre. Centred, it rendered straight through the name and
          title — the copy was unreadable over the character's torso.
        */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[-16vh] z-0 h-[72vh] opacity-90"
        >
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>

        <Hero />

        <Navigation />
      </div>
    </main>
  );
}
