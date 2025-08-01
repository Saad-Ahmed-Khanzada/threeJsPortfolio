import Image from "next/image";
import Link from "next/link";
import HomeBtn from "@/components/HomeBtn";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function ProjectNotFound() {
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
        
        <div className="relative w-full max-w-2xl flex flex-col items-center text-center space-y-8">
          {/* Error Icon */}
          <div className="w-24 h-24 rounded-full custom-bg flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-accent" />
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-accent">
              Project Not Found
            </h1>
            <p className="text-foreground/80 text-lg">
              The project you're looking for doesn't exist or may have been moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/projects"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>
            
            <Link 
              href="/"
              className="flex items-center justify-center px-6 py-3 custom-bg text-foreground font-medium rounded-lg hover:shadow-glass-sm transition-all"
            >
              Go Home
            </Link>
          </div>

          {/* Suggested Projects */}
          <div className="w-full mt-12 custom-bg p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Check out my latest projects instead:
            </h2>
            <div className="grid gap-3">
              <Link href="/projects/1" className="text-accent hover:text-accent/80 transition-colors">
                → FitForge Pro - Fitness Mobile App
              </Link>
              <Link href="/projects/2" className="text-accent hover:text-accent/80 transition-colors">
                → DreamScope Analytics - AI Dream Analysis
              </Link>
              <Link href="/projects/3" className="text-accent hover:text-accent/80 transition-colors">
                → WealthWise Portfolio - Investment Management
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}