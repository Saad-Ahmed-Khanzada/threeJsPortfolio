import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-12 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        {/* Profile Photo Section */}
        <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-4 flex-col items-center justify-center"}>
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Photo Container */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent/40 group-hover:border-accent/70 transition-all duration-300">
            <img
                src="/edited-picaai2.png" 
                alt="Saad Ahmed Khanzada"
                className="w-full object-cover object-center group-hover:scale-110 transition-all duration-500 
                  group-hover:h-48 sm:group-hover:h-56 md:group-hover:h-64 lg:group-hover:h-72 xl:group-hover:h-80"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Name & Title under photo */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-accent">Saad Ahmed</h3>
            <p className="text-sm text-muted">Frontend Developer</p>
          </div>
        </ItemLayout>

        {/* Experience Stats */}
        <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-4 text-center"}>
          <p className="font-semibold w-full text-2xl sm:text-3xl lg:text-4xl text-accent">
            3+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        {/* Projects Count */}
        <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-4 text-center"}>
          <p className="font-semibold w-full text-2xl sm:text-3xl lg:text-4xl text-accent">
            16+ <sub className="font-semibold text-base">completed projects</sub> 
          </p>
        </ItemLayout>

        {/* Main Bio Section */}
        <ItemLayout className={"col-span-full flex-col items-start"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize mb-4">
            About Me
          </h2>
          
          {/* Professional Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs font-medium">
              React & Next.js Expert
            </span>
            <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs font-medium">
              Mobile App Developer
            </span>
            <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs font-medium">
              TypeScript Specialist
            </span>
            <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs font-medium">
              PWA & Responsive Design
            </span>
            <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs font-medium">
              N8N Automation Architect
            </span>
          </div>

          <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed">
            Passionate Computer Science graduate with 3+ years of specialized experience in <strong className="text-accent">Frontend Development</strong> 
            and intelligent automation solutions. I excel at creating user-centric applications using modern JavaScript frameworks including 
            <strong className="text-accent"> React, React Native, Next.js, and SvelteKit</strong>, delivering seamless cross-platform experiences 
            that prioritize performance and user experience.
          </p>
          
          <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed mt-4">
            My frontend expertise encompasses the entire modern web development ecosystem: <strong className="text-accent">TypeScript</strong> for 
            type-safe development, <strong className="text-accent">Tailwind CSS</strong> for responsive design, <strong className="text-accent">Redux 
            & Redux Toolkit</strong> for state management, and <strong className="text-accent">Expo</strong> for rapid mobile app development. 
            I specialize in building Progressive Web Applications (PWAs) and mobile-first designs that work flawlessly across all devices.
          </p>

          <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed mt-4">
            As an <strong className="text-accent">N8N Agent Architect</strong>, I bridge the gap between frontend applications and backend automation, 
            creating intelligent workflow systems that enhance user experiences. My automation solutions include AI-powered customer service bots, 
            voice-activated systems using <strong className="text-accent">Twilio integration</strong>, and seamless API integrations that connect 
            frontend interfaces with powerful backend services.
          </p>

          <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed mt-4">
            I am committed to writing clean, maintainable code and following modern development practices including <strong className="text-accent">
            component-based architecture, responsive design patterns, and performance optimization</strong>. My approach combines technical excellence 
            in frontend development with strategic automation thinking to deliver scalable solutions that grow with business needs.
          </p>
        </ItemLayout>
        
        {/* GitHub Top Languages */}
        <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-4 !p-0"}>
          <img 
            className="w-full h-auto" 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Saad-Ahmed-Khanzada&theme=transparent&hide_border=true&title_color=22D3EE&text_color=FFFFFF&icon_color=22D3EE&text_bold=false" 
            alt="Saad Ahmed Top Languages" 
            loading="lazy" 
          />
        </ItemLayout>

        {/* GitHub Stats */}
        <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-8 !p-0"}>
          <img 
            className="w-full h-auto" 
            src="https://github-readme-stats.vercel.app/api?username=Saad-Ahmed-Khanzada&theme=transparent&hide_border=true&title_color=22D3EE&text_color=FFFFFF&icon_color=22D3EE&text_bold=false" 
            alt="Saad Ahmed GitHub Stats" 
            loading="lazy" 
          />
        </ItemLayout>

        {/* Skills Icons */}
        <ItemLayout className={"col-span-full !p-2"}>
          <img 
            className="w-full h-auto" 
            src="https://skillicons.dev/icons?i=react,js,ts,nextjs,svelte,tailwind,redux,nodejs,swift,firebase,github,gitlab,vscode,postman,figma" 
            alt="Technical Skills" 
            loading="lazy" 
          />
        </ItemLayout>
       
        {/* GitHub Streak */}
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img 
            className="w-full h-auto"  
            src="https://github-readme-streak-stats.herokuapp.com?user=Saad-Ahmed-Khanzada&theme=dark&hide_border=true&type=svg&currStreakLabel=22D3EE&background=EB545400&ring=22D3EE"  
            alt="GitHub Contribution Streak" 
            loading="lazy" 
          />
        </ItemLayout>
        
        {/* Featured Repository */}
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img 
            className="w-full h-auto" 
            src="https://github-readme-stats.vercel.app/api/pin/?username=Saad-Ahmed-Khanzada&repo=KorraApp-ReactNative&theme=transparent&hide_border=true&title_color=22D3EE&text_color=FFFFFF&icon_color=22D3EE&text_bold=false&description_lines_count=2" 
            alt="Featured Project - Korra AI" 
            loading="lazy" 
          />
        </ItemLayout>

        {/* Automation Expertise */}
        <ItemLayout className={"col-span-full xs:col-span-6 text-center"}>
          <p className="font-semibold w-full text-xl sm:text-2xl text-accent">
            N8N <sub className="font-semibold text-base">Workflow Expert</sub>
          </p>
        </ItemLayout>

        {/* AI Integration */}
        <ItemLayout className={"col-span-full xs:col-span-6 text-center"}>
          <p className="font-semibold w-full text-xl sm:text-2xl text-accent">
            AI <sub className="font-semibold text-base">Integration Specialist</sub>
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;