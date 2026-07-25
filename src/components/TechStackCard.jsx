"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// Maps our icon keys onto skillicons.dev slugs. An empty string means the
// service has no icon for it and we fall back to a coloured monogram.
const skillIconSlugs = {
  react: "react",
  svelte: "svelte",
  javascript: "js",
  typescript: "ts",
  tailwindcss: "tailwind",
  redux: "redux",
  nextjs: "nextjs",
  firebase: "firebase",
  aws: "aws",
  postman: "postman",
  figma: "figma",
  git: "git",
  flutter: "flutter",
  cpp: "cpp",
  apple: "apple",
  androidstudio: "androidstudio",
  expo: "",
  openai: "",
};

const levelStyles = {
  Expert: "border-accent/50 bg-accent/15 text-accent",
  Advanced: "border-accent/30 bg-accent/10 text-accent/90",
  Proficient: "border-muted/30 bg-background/50 text-foreground/70",
  "Working knowledge": "border-muted/25 bg-background/50 text-muted",
};

const TechStackCard = ({
  name,
  description,
  experience,
  level,
  icon,
  color,
  subdued = false,
}) => {
  const slug = skillIconSlugs[icon] ?? icon;
  const monogram = name.slice(0, 2).toUpperCase();

  return (
    <motion.li
      variants={item}
      className={clsx(
        "custom-bg-raised hover-lift group flex flex-col rounded-xl p-4 transition-colors duration-300 hover:border-accent/50",
        subdued && "opacity-80"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Icon, with a monogram fallback so a blocked CDN never leaves a gap */}
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-accent/20 bg-background/60">
          {slug ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={`https://skillicons.dev/icons?i=${slug}&theme=dark`}
              alt=""
              className="h-7 w-7 object-contain"
              loading="lazy"
            />
          ) : (
            <span
              className="font-display text-[0.7rem] font-bold"
              style={{ color: color || "currentColor" }}
            >
              {monogram}
            </span>
          )}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="font-display text-sm font-bold leading-tight text-foreground transition-colors group-hover:text-accent">
            {name}
          </h3>
          <p className="mt-1 text-[0.7rem] text-muted">{experience}</p>
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-foreground/70">
        {description}
      </p>

      <span
        className={clsx(
          "mt-3 self-start rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold",
          levelStyles[level] || levelStyles.Proficient
        )}
      >
        {level}
      </span>
    </motion.li>
  );
};

export default TechStackCard;
