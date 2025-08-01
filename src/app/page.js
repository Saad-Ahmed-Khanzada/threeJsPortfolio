import Image from "next/image";
import bg from "../../public/background/home-background7.webp";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import ProfilePhoto from "@/components/ProfilePhoto";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image 
        priority 
        sizes="100vw" 
        src={bg} 
        alt="" 
        fill 
        className="w-full h-full object-cover object-center opacity-25"
      />
    
      <div className="w-full h-screen">
        {/* Navigation */}
        <Navigation/>
        
        {/* Choose between 3D Wizard OR Profile Photo */}
        
        {/* Option 1: Keep 3D Wizard (current) */}
        <RenderModel>
          <Wizard/>
        </RenderModel>
        
        {/* Option 2: Replace with Profile Photo (uncomment to use) */}
        {/* <ProfilePhoto /> */}
        
        {/* Option 3: Both - Photo in center, Wizard smaller in corner (uncomment to use) */}
        
        {/* <ProfilePhoto /> */}
        {/* <div className="absolute bottom-10 right-10 w-32 h-32 opacity-60">
          <RenderModel>
            <Wizard/>
          </RenderModel>
        </div> */}
       
      </div>
    </main>
  );
}