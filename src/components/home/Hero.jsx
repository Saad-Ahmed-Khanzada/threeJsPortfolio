"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { personalData } from "@/app/data";

/*
  Sits in the centre of the orbiting navigation, over the 3D model.
  The vignette behind it keeps the copy legible without hiding the model.

  Layout note: the orbit ring has a radius of 20–40vw depending on
  breakpoint, and on the smallest screens the nav collapses to two edge
  columns. This block is width-constrained at every breakpoint so it never
  collides with the buttons.
*/

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="content-vignette pointer-events-none absolute left-1/2 top-1/2
        z-20 flex w-[min(74vw,250px)] -translate-x-1/2 -translate-y-[58%]
        flex-col items-center text-center
        xs:w-[min(50vw,280px)] sm:w-[min(46vw,380px)] lg:w-[min(34vw,450px)]"
    >
      {/* Availability line */}
      <motion.div
        variants={rise}
        className="pointer-events-auto mb-3 hidden items-center gap-2 rounded-full
          border border-accent/25 bg-background/60 px-3 py-1 backdrop-blur-md xs:inline-flex"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        <span className="text-[0.65rem] font-medium tracking-wide text-foreground/80 sm:text-xs">
          {personalData.availability}
        </span>
      </motion.div>

      <motion.h1
        variants={rise}
        className="font-display text-lg font-extrabold leading-[1.15] text-foreground
          [text-shadow:0_2px_18px_rgb(var(--background))] xs:text-xl sm:text-3xl lg:text-4xl"
      >
        {personalData.name}
      </motion.h1>

      <motion.p
        variants={rise}
        className="mt-2 font-display text-[0.78rem] font-semibold text-accent
          [text-shadow:0_2px_14px_rgb(var(--background))] xs:mt-2.5 xs:text-sm sm:text-base lg:text-lg"
      >
        {/* One title only. Stacking three of them here pushed the line to
            two rows and diluted the strongest one; the secondary titles are
            on the About page where there is room for them. */}
        {personalData.title}
      </motion.p>

      <motion.p
        variants={rise}
        className="mt-3 hidden max-w-[38ch] text-[0.8rem] leading-relaxed text-foreground/75 sm:block lg:text-sm"
      >
        {personalData.tagline}
      </motion.p>

      {/* Quick credibility numbers — the three things a recruiter scans for */}
      <motion.dl
        variants={rise}
        className="mt-4 hidden items-center gap-4 sm:flex lg:gap-6"
      >
        {[
          { value: personalData.yearsExperience, label: "years experience" },
          { value: personalData.projectsDelivered, label: "projects delivered" },
          { value: personalData.teamLed, label: "person team led" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <dt className="font-display text-lg font-bold text-accent lg:text-xl">
              {stat.value}
            </dt>
            <dd className="mt-0.5 text-[0.6rem] uppercase tracking-wider text-muted lg:text-[0.65rem]">
              {stat.label}
            </dd>
          </div>
        ))}
      </motion.dl>

      {/* Primary calls to action */}
      <motion.div
        variants={rise}
        className="pointer-events-auto mt-4 flex flex-col items-center gap-2
          xs:mt-6 xs:flex-row xs:gap-3"
      >
        <Link href="/experience" className="btn-primary w-full xs:w-auto">
          View my work
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          href={personalData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary w-full xs:w-auto"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Résumé
        </a>
      </motion.div>

    </motion.div>
  );
};

export default Hero;
