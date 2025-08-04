import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/app/data";
import HomeBtn from "@/components/HomeBtn";
import { ArrowLeft, Calendar, Code, Smartphone, Globe } from "lucide-react";
import Link from "next/link";

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.id.toString() === params.id);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} - Saad's Portfolio`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }) {
  const project = projectsData.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Mobile App":
        return <Smartphone className="w-5 h-5" />;
      case "Web Application":
        return <Globe className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <>
      {/* Background Image */}
      <Image
        src="/background/projects-background6.webp"
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-20"
        priority
        fill
        sizes="100vw"
      />

      <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 py-20 lg:px-32">
        <HomeBtn />
        
        {/* Back to Projects Button */}
        <Link 
          href="/projects"
          className="fixed top-4 right-4 z-50 flex items-center space-x-2 text-foreground rounded-full custom-bg p-3 hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back to Projects</span>
        </Link>

        <article className="relative w-full max-w-4xl flex flex-col space-y-8">
          {/* Project Header */}
          <header className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-accent">
              {getCategoryIcon(project.category)}
              <span className="text-sm font-medium">{project.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
              {project.name}
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-muted">
              <Calendar className="w-4 h-4" />
              <span>{new Date(project.date).toLocaleDateString("en-US", { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </header>

          {/* Project Description */}
          <div className="custom-bg p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
              {project.detailedDescription}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="custom-bg p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center space-x-2">
              <Code className="w-6 h-6" />
              <span>Technologies Used</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-background/50 border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors"
                >
                  <span className="text-foreground font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="custom-bg p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Key Features</h2>
            <div className="grid gap-3">
              {project.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-background/30 border border-muted/10 hover:border-accent/20 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <span className="text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="custom-bg p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-accent mb-2">{project.technologies.length}</div>
              <div className="text-muted">Technologies</div>
            </div>
            
            <div className="custom-bg p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-accent mb-2">{project.features.length}</div>
              <div className="text-muted">Features</div>
            </div>
            
            <div className="custom-bg p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {new Date().getFullYear() - new Date(project.date).getFullYear() || "Recent"}
              </div>
              <div className="text-muted">Years Ago</div>
            </div>
          </div>

          {/* Additional Project Info */}
          <div className="custom-bg p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Project Impact</h2>
            <p className="text-foreground/80 leading-relaxed">
              This project demonstrates my expertise in {project.technologies.slice(0, 3).join(", ")} 
              and showcases my ability to deliver comprehensive {project.category.toLowerCase()} solutions. 
              The implementation focuses on user experience, performance optimization, and scalable architecture 
              to meet modern development standards.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="custom-bg p-6 md:p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">Interested in this project?</h3>
            <p className="text-muted mb-4">Let&apos;s discuss how I can help you build something similar</p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}