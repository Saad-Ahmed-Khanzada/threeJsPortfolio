"use client";
import React from "react";
import { motion } from "framer-motion";

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

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
};

// Tech icon mapping - using skill icons or custom fallbacks
const getTechIcon = (iconName, color, techName) => {
  const iconMap = {
    react: "react",
    svelte: "svelte", 
    javascript: "js",
    typescript: "ts",
    tailwindcss: "tailwind",
    redux: "redux",
    swift: "swift",
    nextjs: "nextjs",
    axios: "", // closest approximation
    n8n: "", // closest approximation
    openai: "python", // closest approximation for AI
    expo: "", // use react icon as fallback
    googleplay: "android" // use android icon as fallback
  };

  const skillIconName = iconMap[iconName] || iconName;
  
  return (
    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto overflow-hidden">
      <img
        src={`https://skillicons.dev/icons?i=${skillIconName}&theme=dark`}
        alt={techName}
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback to colored div if icon doesn't load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div 
        className="w-full h-full rounded-lg items-center justify-center text-2xl font-bold text-white hidden"
        style={{ backgroundColor: color }}
      >
        {getCustomIcon(iconName, techName)}
      </div>
    </div>
  );
};

// Custom icons for technologies not available in skillicons
const getCustomIcon = (iconName, techName) => {
  const customIcons = {
    expo: "⚡",
    googleplay: "📱",
    n8n: "🔄",
    openai: "🤖",
    axios: "🌐"
  };
  
  return customIcons[iconName] || techName.charAt(0).toUpperCase();
};

const TechCard = ({ tech, index }) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ 
        scale: 1.05, 
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.95 }}
      className="custom-bg p-6 rounded-xl text-center group cursor-pointer hover:shadow-glass-sm transition-all duration-300"
    >
      {/* Tech Icon */}
      {getTechIcon(tech.icon, tech.color, tech.name)}

      {/* Tech Name */}
      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
        {tech.name}
      </h3>

      {/* Tech Description */}
      <p className="text-sm text-muted group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
        {tech.description}
      </p>

      {/* Hover Effect Accent Line */}
      <div className="w-0 h-1 bg-accent mx-auto mt-4 group-hover:w-full transition-all duration-300 rounded-full"></div>
    </motion.div>
  );
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
              <TechCard key={tech.name} tech={tech} index={index} />
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
            <div className="text-3xl font-bold text-accent">4+</div>
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