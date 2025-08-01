"use client";
import React from "react";
import { motion } from "framer-motion";
import TechStackCard from "./TechStackCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const TechStackGrid = ({ techStack }) => {
  // Group technologies by category
  const groupedTech = techStack.reduce((acc, tech) => {
    const category = tech.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {});

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-6xl px-4 mx-auto space-y-12"
    >
      {Object.entries(groupedTech).map(([category, technologies]) => (
        <div key={category} className="space-y-6">
          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              {category}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </motion.div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <TechStackCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>
      ))}

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center space-y-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="custom-bg p-4 rounded-xl">
            <div className="text-3xl font-bold text-accent">{techStack.length}</div>
            <div className="text-sm text-muted">Technologies</div>
          </div>
          
          <div className="custom-bg p-4 rounded-xl">
            <div className="text-3xl font-bold text-accent">
              {Object.keys(groupedTech).length}
            </div>
            <div className="text-sm text-muted">Categories</div>
          </div>
          
          <div className="custom-bg p-4 rounded-xl">
            <div className="text-3xl font-bold text-accent">3+</div>
            <div className="text-sm text-muted">Years Exp.</div>
          </div>
          
          <div className="custom-bg p-4 rounded-xl">
            <div className="text-3xl font-bold text-accent">16</div>
            <div className="text-sm text-muted">Projects</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechStackGrid;