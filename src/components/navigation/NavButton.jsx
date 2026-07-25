"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Instagram,
  FileText,
  Layers3,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  home: Home,
  projects: FolderOpen,
  contact: Mail,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  resume: FileText,
  stack: Layers3,
  experience: Briefcase,
};

const getIcon = (icon) => {
  // "about" renders the profile photo instead of a glyph — a face is a
  // stronger entry point into an about page than an icon.
  if (icon === "about") {
    return (
      <div className="h-full w-full overflow-hidden rounded-full border-2 border-accent/30 transition-colors duration-300 group-hover:border-accent">
        <Image
          src="/edited-picaai.png"
          alt=""
          width={56}
          height={56}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    );
  }

  const IconComponent = iconMap[icon];
  if (!IconComponent) return null;

  return <IconComponent className="h-full w-auto" strokeWidth={1.5} aria-hidden="true" />;
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
  isCircular = false,
}) => {
  return (
    <div
      className={isCircular ? "group absolute z-50 cursor-pointer" : "group z-50 cursor-pointer"}
      style={isCircular ? { transform: `translate(${x}, ${y})` } : {}}
    >
      <NavLink
        variants={item}
        href={link}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
        aria-label={label}
        title={label}
        className={`
          custom-bg relative flex items-center justify-center rounded-full
          text-foreground transition-all duration-300
          hover:text-accent hover:border-accent/60 hover:shadow-cyan-glow
          group-hover:scale-110
          ${isCircular ? "animate-spin-slow-reverse group-hover:pause" : ""}
          ${icon === "about" ? "h-12 w-12 p-0 md:h-14 md:w-14" : "h-12 w-12 p-2.5 md:h-14 md:w-14 md:p-3"}
        `}
      >
        {icon === "about" ? (
          getIcon(icon)
        ) : (
          <span className="relative h-6 w-6 md:h-7 md:w-7">{getIcon(icon)}</span>
        )}

        {/* Hover tooltip on the orbit; the edge-docked mobile layout uses
            titles and aria-labels instead, since there is no room for it. */}
        {isCircular && (
          <span
            aria-hidden="true"
            className={`
              custom-bg pointer-events-none absolute z-[60] whitespace-nowrap
              rounded-lg px-3 py-1.5 text-sm font-medium text-foreground opacity-0
              shadow-lg transition-all duration-300 group-hover:opacity-100
              ${
                labelDirection === "left"
                  ? "right-full top-1/2 mr-3 -translate-y-1/2"
                  : "left-full top-1/2 ml-3 -translate-y-1/2"
              }
            `}
          >
            {label}
          </span>
        )}
      </NavLink>
    </div>
  );
};

export default NavButton;
