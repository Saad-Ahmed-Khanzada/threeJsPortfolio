"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, Lock, Smartphone, Globe, Bot, Layers } from "lucide-react";
import clsx from "clsx";

const categoryIcons = {
  "Mobile App": Smartphone,
  "Web Application": Globe,
  "AI & Automation": Bot,
  "Web & Mobile": Layers,
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const NavLink = motion(Link);

/*
  Project card.

  Leads with role and client rather than technology list — a recruiter
  scanning this wants to know what the person was responsible for before
  they care which state library was used.
*/
const ProjectLayout = ({
  id,
  name,
  description,
  period,
  technologies,
  category,
  role,
  client,
  featured,
  confidential,
  variant = "default",
}) => {
  const CategoryIcon = categoryIcons[category] || Layers;
  const isFeature = variant === "feature";

  return (
    <NavLink
      href={`/projects/${id}`}
      variants={item}
      className={clsx(
        "group relative flex w-full flex-col overflow-hidden rounded-xl p-5 transition-all duration-300",
        "custom-bg-raised hover:border-accent/55 hover:shadow-cyan-glow",
        isFeature ? "sm:p-6" : "sm:p-5"
      )}
    >
      {/* Accent wash on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex flex-col">
        {/* Meta row */}
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-accent">
            <CategoryIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {category}
          </span>

          <div className="flex shrink-0 items-center gap-2">
            {confidential && (
              <span
                className="inline-flex items-center gap-1 text-[0.65rem] text-muted"
                title="Client and product name withheld while in development"
              >
                <Lock className="h-3 w-3" aria-hidden="true" />
                NDA
              </span>
            )}
            <span className="text-[0.7rem] text-muted">{period}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className={clsx(
            "mt-3 font-display font-bold leading-snug text-foreground transition-colors group-hover:text-accent",
            isFeature ? "text-lg sm:text-xl" : "text-base sm:text-lg"
          )}
        >
          {name}
        </h3>

        {/* Role — the most load-bearing line on this card */}
        {role && (
          <p className="mt-1.5 text-xs font-semibold text-accent/90">{role}</p>
        )}

        {client && (
          <p className="mt-1 text-[0.7rem] italic text-muted">{client}</p>
        )}

        {/* Description */}
        <p
          className={clsx(
            "mt-3 text-xs leading-relaxed text-foreground/75 sm:text-sm",
            isFeature ? "line-clamp-3" : "line-clamp-2"
          )}
        >
          {description}
        </p>

        {/* Stack */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {technologies.slice(0, isFeature ? 5 : 3).map((tech) => (
            <li key={tech} className="tag-neutral">
              {tech}
            </li>
          ))}
          {technologies.length > (isFeature ? 5 : 3) && (
            <li className="px-1 py-1 text-[0.7rem] text-muted">
              +{technologies.length - (isFeature ? 5 : 3)}
            </li>
          )}
        </ul>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-accent/15 pt-3">
          {featured ? (
            <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-accent/70">
              Featured
            </span>
          ) : (
            <span />
          )}

          <span className="inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Case study
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProjectLayout;
