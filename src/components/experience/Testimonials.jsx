"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Linkedin, ArrowUpRight } from "lucide-react";
import { testimonialsData, linkedInRecommendationsUrl } from "@/app/data";

/*
  Client testimonials.

  Renders nothing while testimonialsData is empty — an empty "what clients
  say" heading is worse than no section at all, and it means the component can
  ship before any consent has been obtained.

  Attribution falls back to role + context when the person has not agreed to
  be named, which keeps the quote credible without publishing anyone's
  personal information.
*/

const attributionFor = (t) => {
  // Named attribution only when consent was explicitly recorded as "named".
  const named = t.consent === "named" && t.name;
  const primary = named ? t.name : t.role;
  const secondary = named
    ? [t.role, t.company].filter(Boolean).join(", ")
    : [t.company, t.context].filter(Boolean).join(", ");

  return { primary, secondary };
};

const Testimonials = () => {
  const hasQuotes = testimonialsData.length > 0;

  // Nothing to show and no recommendations link configured — render nothing.
  if (!hasQuotes && !linkedInRecommendationsUrl) return null;

  return (
    <div className="flex flex-col gap-5">
      {hasQuotes && (
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          {testimonialsData.map((t, index) => {
            const { primary, secondary } = attributionFor(t);

            return (
              <motion.figure
                key={`${primary}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="custom-bg-raised flex flex-col rounded-xl p-5 sm:p-6"
              >
                <Quote
                  className="h-5 w-5 shrink-0 text-accent/70"
                  aria-hidden="true"
                />

                <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-4 border-t border-accent/15 pt-4">
                  <span className="block text-sm font-semibold text-foreground">
                    {primary}
                  </span>
                  {secondary && (
                    <span className="mt-0.5 block text-xs text-muted">
                      {secondary}
                    </span>
                  )}
                  {t.project && (
                    <span className="mt-1.5 inline-block text-[0.7rem] text-accent/80">
                      {t.project}
                    </span>
                  )}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      )}

      {linkedInRecommendationsUrl && (
        <motion.a
          href={linkedInRecommendationsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="custom-bg-raised group flex items-center justify-between gap-4 rounded-xl p-5 transition-colors hover:border-accent/55 sm:p-6"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                Recommendations on LinkedIn
              </span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                Written and published by the colleagues and clients themselves.
              </span>
            </span>
          </span>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </motion.a>
      )}
    </div>
  );
};

export default Testimonials;
