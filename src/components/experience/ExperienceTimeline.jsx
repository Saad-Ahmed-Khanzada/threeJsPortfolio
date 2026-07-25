"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, CalendarDays } from "lucide-react";
import { experienceData } from "@/app/data";

/*
  Vertical work-history timeline. Each entry separates *responsibilities*
  (what the role required) from *major contributions* (what actually got
  done), because those answer two different recruiter questions.
*/

const ExperienceTimeline = () => {
  return (
    <ol className="relative flex flex-col gap-8 sm:gap-10">
      {/* Spine — hidden on the narrowest screens where the indent costs too much width */}
      <span
        aria-hidden="true"
        className="absolute left-[9px] top-2 hidden h-[calc(100%-1rem)] w-px
          bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:block"
      />

      {experienceData.map((role, index) => (
        <motion.li
          key={role.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="relative sm:pl-10"
        >
          {/* Timeline node */}
          <span
            aria-hidden="true"
            className={`absolute left-0 top-2 hidden h-[19px] w-[19px] items-center justify-center
              rounded-full border-2 sm:flex ${
                role.current
                  ? "border-accent bg-accent/20 shadow-cyan-glow"
                  : "border-accent/40 bg-background"
              }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                role.current ? "bg-accent" : "bg-accent/50"
              }`}
            />
          </span>

          <article className="custom-bg-raised rounded-xl p-5 sm:p-6 lg:p-7">
            {/* Header */}
            <div className="flex flex-col gap-3 border-b border-accent/15 pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                    {role.position}
                  </h3>
                  {role.current && (
                    <span className="tag">
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-accent">
                  <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {role.company}
                </p>

                {role.designationNote && (
                  <p className="mt-1.5 text-xs italic leading-relaxed text-muted">
                    {role.designationNote}
                  </p>
                )}
              </div>

              <div className="flex shrink-0 flex-col gap-1.5 text-xs text-muted sm:items-end">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {role.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {role.location}
                </span>
                <span className="tag-neutral">{role.workMode}</span>
              </div>
            </div>

            {/* Role summary */}
            <p className="mt-4 text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]">
              {role.summary}
            </p>

            {/* Contributions first — these are the strongest content */}
            <div className="mt-5">
              <h4 className="eyebrow mb-3">Major contributions</h4>
              <ul className="flex flex-col gap-2.5">
                {role.contributions.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-foreground/80">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mt-5">
              <h4 className="eyebrow mb-3">Scope of responsibility</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {role.responsibilities.map((point) => (
                  <li key={point} className="flex gap-2 text-xs leading-relaxed text-muted sm:text-[0.8rem]">
                    <span aria-hidden="true" className="text-accent/60">
                      ▸
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="mt-5 border-t border-accent/15 pt-4">
              <h4 className="eyebrow mb-3">Technologies</h4>
              <ul className="flex flex-wrap gap-1.5">
                {role.technologies.map((tech) => (
                  <li key={tech} className="tag-neutral">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </motion.li>
      ))}
    </ol>
  );
};

export default ExperienceTimeline;
