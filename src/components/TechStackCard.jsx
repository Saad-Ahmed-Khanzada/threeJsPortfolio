"use client";
import React from "react";
import { motion } from "framer-motion";

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

const getTechIcon = (iconName, color) => {
  const iconMap = {
    react: "react",
    svelte: "svelte", 
    javascript: "js",
    typescript: "ts",
    tailwindcss: "tailwind",
    redux: "redux",
    swift: "swift",
    expo: "expo",
    axios: "axios",
    googleplay: "googleplay",
    n8n: "nodejs",
    openai: "python"
  };

  const skillIconName = iconMap[iconName] || iconName;
  
  return (
    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto overflow-hidden">
      <img
        src={`https://skillicons.dev/icons?i=${skillIconName}&theme=dark`}
        alt={iconName}
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
        {iconName.charAt(0).toUpperCase()}
      </div>
    </div>
  );
};

const TechStackCard = ({ tech, index }) => {
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
      {getTechIcon(tech.icon, tech.color)}

      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
        {tech.name}
      </h3>

      <p className="text-sm text-muted group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
        {tech.description}
      </p>

      <div className="w-0 h-1 bg-accent mx-auto mt-4 group-hover:w-full transition-all duration-300 rounded-full"></div>
    </motion.div>
  );
};

export default TechStackCard;