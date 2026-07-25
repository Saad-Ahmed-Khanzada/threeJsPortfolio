"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { aiAutomationData } from "@/app/data";

/*
  The Flutter and C++ stories are the most persuasive things on this site,
  and also the easiest to misread as "claims to be a Flutter developer".
  Each card carries an explicit takeaway line stating what the proof point
  does and does not demonstrate.
*/

const AiAdaptability = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {aiAutomationData.proofPoints.map((point, index) => (
          <motion.article
            key={point.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="custom-bg-raised flex flex-col rounded-xl p-5 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="font-display text-base font-bold leading-snug text-foreground">
                {point.title}
              </h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              {point.body}
            </p>

            <p className="mt-4 rounded-lg border-l-2 border-accent/60 bg-accent/5 px-3 py-2.5 text-xs italic leading-relaxed text-foreground/70">
              {point.takeaway}
            </p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-2"
      >
        <span className="eyebrow mr-1">Tools</span>
        {aiAutomationData.tools.map((tool) => (
          <span key={tool} className="tag">
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AiAdaptability;
