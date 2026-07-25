"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, MessagesSquare, Target, Rocket } from "lucide-react";
import { leadershipData } from "@/app/data";

// Pillar order in the data drives the order here; the icons map by index
// so the data file stays free of presentation concerns.
const icons = [Users, MessagesSquare, Target, Rocket];

const LeadershipPillars = () => {
  return (
    <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
      {leadershipData.pillars.map((pillar, index) => {
        const Icon = icons[index] || Users;

        return (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="custom-bg-raised hover-lift group flex flex-col rounded-xl p-5 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                {pillar.title}
              </h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              {pillar.body}
            </p>

            <ul className="mt-4 grid gap-1.5 border-t border-accent/15 pt-4">
              {pillar.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-xs leading-relaxed text-muted"
                >
                  <span aria-hidden="true" className="text-accent/60">
                    ▸
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </div>
  );
};

export default LeadershipPillars;
