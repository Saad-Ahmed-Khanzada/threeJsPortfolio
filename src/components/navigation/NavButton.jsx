"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Home, User, FolderOpen, Mail, Github, Linkedin, 
  Instagram, FileText, Layers3 
} from "lucide-react";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  const iconMap = {
    home: Home,
    about: "profile", // Special case for profile photo
    projects: FolderOpen,
    contact: Mail,
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    resume: FileText,
    stack: Layers3,
  };
  
  const IconComponent = iconMap[icon];
  
  // Handle profile photo for about section
  if (icon === "about") {
    return (
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors duration-300">
        <Image
              src="/edited-picaai.png"  // Add your photo here
          alt="Saad Ahmed Khanzada"
          width={48}
          height={48}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    );
  }
  
  return <IconComponent className="w-full h-auto" strokeWidth={1.5} />;
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
};

const NavLink = motion(Link);

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection = "right" }) => {
  return (
    <div
      className="absolute cursor-pointer z-50 group"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <NavLink
        variants={item}
        href={link}
        target={newTab ? "_blank" : "_self"}
        className={`
          text-foreground rounded-full flex items-center justify-center custom-bg
          hover:text-accent relative group-hover:scale-110 transition-all duration-300
          group-hover:pause animate-spin-slow-reverse
          ${icon === "about" 
            ? "w-12 h-12 md:w-14 md:h-14 p-0" 
            : "w-12 h-12 md:w-14 md:h-14 p-2.5 md:p-3"
          }
        `}
        aria-label={label}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {icon === "about" ? (
          getIcon(icon)
        ) : (
          <span className="w-6 h-6 md:w-7 md:h-7 relative">
            {getIcon(icon)}
          </span>
        )}

        {/* Enhanced Hover Label */}
        <span 
          className={`
            absolute px-3 py-2 custom-bg text-foreground text-sm font-medium rounded-lg
            opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
            transform scale-95 group-hover:scale-100 z-60 whitespace-nowrap
            ${labelDirection === "left" 
              ? "right-full mr-3 top-1/2 -translate-y-1/2" 
              : "left-full ml-3 top-1/2 -translate-y-1/2"
            }
            border border-accent/20 shadow-lg backdrop-blur-sm
            before:content-[''] before:absolute before:w-2 before:h-2 before:custom-bg
            before:border-l before:border-b before:border-accent/20 before:rotate-45
            before:top-1/2 before:-translate-y-1/2
            ${labelDirection === "left" 
              ? "before:-right-1" 
              : "before:-left-1"
            }
          `}
        >
          {label}
        </span>
      </NavLink>
    </div>
  );
};

export default NavButton;