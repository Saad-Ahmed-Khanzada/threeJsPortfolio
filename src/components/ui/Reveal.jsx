"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

/*
  Scroll-triggered entrance used across the sub-pages.

  Deliberately subtle: a short fade and 24px rise, once only. The previous
  version of this site animated panels in from scale(0), which is dramatic on
  first view and irritating on every subsequent one — and it made content
  briefly unreadable while a recruiter was trying to read it.
*/

export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const Reveal = ({ children, className, delay = 0, as = "div" }) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={clsx(className)}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
