import React from "react";
import ItemLayout from "./ItemLayout";


const AboutDetails = () => {
  return (
    <section className="py-0 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Saad Ahmed Khanzada Info
          </h2>
          <p className=" font-light text-xs sm:text-sm md:text-base">
            Computer Science graduate with around 2 year of experience crafting
            interactive e-commerce applications using JavaScript frameworks like
            ReactJS, React Native, Sveltekit, and NextJS. Transitioned from
            front-end to full-stack development, delivering seamless and
            responsive web experiences. Increased website traffic by 20% through
            optimized user interfaces and collaborated effectively with
            designers to ensure seamless UX integration. Eager to leverage
            diverse skillset on impactful projects.
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl ">
            Multiple <sub className="font-semibold text-base"> clients project completed </sub> 
            </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4"}>
        
          <p className="font-semibold w-full text-left  text-2xl sm:text-4xl text-accent ">
          2+ <sub className="font-semibold text-base"> years of experience</sub>
            </p>
        </ItemLayout>
        
        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
            <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/??username=Saad-Ahmed-Khanzada&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="saadAhmed" loading="lazy" />
        </ItemLayout>

        {/* we are not using Image component of next js because this data is dynamically generated
        and provided in the image format */}
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
            <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=Saad-Ahmed-Khanzada&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="saadAhmed" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full "}>
            <img className="w-full h-auto" src="https://skillicons.dev/icons?i=nextjs,svelte,react,js,html,css,discord,github,gitlab,linux,redux,tailwind,ts,vite,vscode,yarn,postman,ps,gmail,firebase,c#," alt="saadAhmed" loading="lazy" />
        </ItemLayout>
       
       {/* ! with padding means important in tailwind */}
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
     <img className="w-full h-auto"  src="https://github-readme-streak-stats.herokuapp.com?user=Saad-Ahmed-Khanzada&theme=dark&hide_border=true&type=svg&currStreakLabel=FEFE58&background=EB545400&ring=FEFE58"  alt="github contributions" loading="lazy" />
        </ItemLayout>
        {/* <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
     <img className="w-full h-auto"  src="https://github-readme-streak-stats.herokuapp.com?user=Saad-Ahmed-Khanzada&theme=dark&hide_border=true&type=png&currStreakLabel=FEFE58&background=EB545400&ring=FEFE58"  alt="github contributions" loading="lazy" />
        </ItemLayout> */}

        
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
            <img className="w-full h-auto" src="  https://github-readme-stats.vercel.app/api/pin/?username=Saad-Ahmed-Khanzada&repo=KorraApp-ReactNative&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="saadAhmed" loading="lazy" />
        </ItemLayout>



      </div>
    </section>
  );
};

export default AboutDetails;
