"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import TechStackCard from "./TechStackCard";
import { techCategories } from "@/app/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

/*
  Tech stack grouped by role in the stack rather than shown as one flat grid.

  The "Exposure" group is deliberately separated and labelled: Flutter and
  C++ belong on this page as evidence of adaptability, but listing them
  beside React at four years would misrepresent the depth.
*/
const groupBlurbs = {
  Frontend: "Where most of my production web work lives.",
  Mobile: "Cross-platform delivery, including the native and release work.",
  Languages: "Day-to-day working languages.",
  State: "How I keep application state predictable at scale.",
  Styling: "Design system implementation on web and mobile.",
  "Backend & Data": "The service and data layer I integrate against and configure.",
  "AI & Automation": "Automation and AI as deliverables, not experiments.",
  "Release & DevOps": "Getting builds signed, submitted, and into the right environment.",
  "Design & Tooling": "Working with designers and the rest of the toolchain.",
  Exposure:
    "Stacks I have shipped production fixes in without claiming them as core competencies — included as evidence of adaptability.",
};

const TechStackGrid = ({ techStack }) => {
  const groups = techCategories
    .map((category) => ({
      category,
      items: techStack.filter((tech) => tech.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="flex w-full flex-col gap-10 sm:gap-12">
      {groups.map((group, groupIndex) => (
        <section key={group.category}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h2
                className={clsx(
                  "font-display text-lg font-bold sm:text-xl",
                  group.category === "Exposure" ? "text-foreground/70" : "text-foreground"
                )}
              >
                {group.category}
              </h2>
              <span className="tag-neutral">{group.items.length}</span>
            </div>

            {groupBlurbs[group.category] && (
              <p className="max-w-2xl text-xs leading-relaxed text-muted sm:text-sm">
                {groupBlurbs[group.category]}
              </p>
            )}

            <div aria-hidden="true" className="hairline mt-1 h-px w-full" />
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {group.items.map((tech) => (
              <TechStackCard
                key={`${group.category}-${tech.name}`}
                {...tech}
                subdued={group.category === "Exposure"}
              />
            ))}
          </motion.ul>
        </section>
      ))}
    </div>
  );
};

export default TechStackGrid;
