"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

/*
  One heading treatment used by every section on every sub-page, so the
  visual hierarchy stays identical as a recruiter moves between pages.
*/
const SectionHeading = ({ eyebrow, title, intro, align = "left", className }) => {
  const centered = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}

      <h2 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      <div
        aria-hidden="true"
        className={clsx("hairline h-px w-24", centered && "mx-auto")}
      />

      {intro && (
        <p
          className={clsx(
            "max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-base",
            centered && "mx-auto"
          )}
        >
          {intro}
        </p>
      )}
    </motion.header>
  );
};

export default SectionHeading;
