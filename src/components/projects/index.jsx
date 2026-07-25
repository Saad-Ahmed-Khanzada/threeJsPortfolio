"use client";

import React, { useMemo, useState } from "react";
import ProjectLayout from "./ProjectLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { projectCategories } from "@/app/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

/*
  Project index.

  Two changes that matter for a recruiter:
    1. Featured work is separated out and given larger cards, so the
       strongest six projects are seen before the long tail.
    2. Category filtering, so someone hiring for mobile can see only mobile
       without scrolling through twenty entries.

  Sorted newest-first by date within each tier.
*/
const ProjectList = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const sorted = useMemo(
    () => [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [projects]
  );

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? sorted
        : sorted.filter((p) => p.category === activeCategory),
    [sorted, activeCategory]
  );

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  // Only offer categories that actually contain something.
  const availableCategories = projectCategories.filter(
    (category) =>
      category === "All" || sorted.some((p) => p.category === category)
  );

  return (
    <div className="flex w-full flex-col gap-10 sm:gap-14">
      {/* Filters */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap justify-center gap-2"
      >
        {availableCategories.map((category) => {
          const isActive = activeCategory === category;
          const count =
            category === "All"
              ? sorted.length
              : sorted.filter((p) => p.category === category).length;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={clsx(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 sm:text-sm",
                isActive
                  ? "border-accent bg-accent text-background shadow-cyan-glow"
                  : "border-accent/25 bg-background/40 text-foreground/75 backdrop-blur-md hover:border-accent/60 hover:text-accent"
              )}
            >
              {category}
              <span
                className={clsx(
                  "ml-1.5 text-[0.65rem]",
                  isActive ? "text-background/70" : "text-muted"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured tier */}
      <AnimatePresence mode="wait">
        {featured.length > 0 && (
          <motion.section
            key={`featured-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <SectionHeading
              eyebrow="Featured work"
              title="The projects worth reading first"
              intro="Selected for the scope of ownership involved rather than for how new they are."
              align="center"
            />

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {featured.map((project) => (
                <ProjectLayout key={project.id} {...project} variant="feature" />
              ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Long tail */}
      <AnimatePresence mode="wait">
        {rest.length > 0 && (
          <motion.section
            key={`rest-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <SectionHeading
              eyebrow="More work"
              title="Everything else"
              intro="Earlier and smaller engagements, newest first."
              align="center"
            />

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {rest.map((project) => (
                <ProjectLayout key={project.id} {...project} />
              ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-muted">
          No projects in this category.
        </p>
      )}
    </div>
  );
};

export default ProjectList;
