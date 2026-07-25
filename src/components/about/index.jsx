"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Github, Linkedin } from "lucide-react";
import ItemLayout from "./ItemLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import {
  personalData,
  aboutParagraphs,
  coreCompetencies,
  servicesData,
} from "@/app/data";

const AboutDetails = () => {
  return (
    <div className="section-stack w-full">
      {/* ---------------- Profile + narrative ---------------- */}
      <section>
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
          {/* Photo + identity card */}
          <ItemLayout className="col-span-full flex-col items-center justify-start text-center lg:col-span-4">
            <div className="group relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 blur-xl transition-all duration-500 group-hover:blur-2xl"
              />
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-accent/40 transition-colors duration-300 group-hover:border-accent/70 sm:h-40 sm:w-40 md:h-44 md:w-44">
                <Image
                  src="/edited-picaai2.png"
                  alt={`${personalData.name}, ${personalData.title}`}
                  width={176}
                  height={176}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-display text-lg font-bold text-foreground">
                {personalData.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent">
                {personalData.title}
              </p>
              <p className="mt-0.5 text-xs text-muted">
                {personalData.secondaryTitles.join(" · ")}
              </p>
            </div>

            {/* py-1.5 keeps each row above the 24px minimum tap target —
                these were 16px tall and awkward to hit on a phone. */}
            <ul className="mt-5 flex w-full flex-col gap-1 border-t border-accent/15 pt-4 text-left">
              <li className="flex items-center gap-2 py-1.5 text-xs text-foreground/75">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                {personalData.location}
              </li>
              <li>
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-2 break-all rounded py-1.5 text-xs text-foreground/75 transition-colors hover:text-accent"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  {personalData.email}
                </a>
              </li>
              <li>
                <a
                  href={personalData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded py-1.5 text-xs text-foreground/75 transition-colors hover:text-accent"
                >
                  <Linkedin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personalData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded py-1.5 text-xs text-foreground/75 transition-colors hover:text-accent"
                >
                  <Github className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  GitHub
                </a>
              </li>
            </ul>
          </ItemLayout>

          {/* Narrative */}
          <ItemLayout className="col-span-full flex-col items-start lg:col-span-8">
            <span className="eyebrow">About me</span>
            <h2 className="mt-2 font-display text-xl font-bold leading-tight text-foreground sm:text-2xl">
              I stopped being a frontend developer a while ago
            </h2>
            <div aria-hidden="true" className="hairline mt-3 h-px w-24" />

            <div className="mt-5 flex flex-col gap-4">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-relaxed text-foreground/80 sm:text-[0.95rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/experience" className="btn-primary">
                See my experience
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/projects" className="btn-secondary">
                Browse projects
              </Link>
            </div>
          </ItemLayout>
        </div>
      </section>

      {/* ---------------- Core competencies ---------------- */}
      <section>
        <SectionHeading
          eyebrow="Core competencies"
          title="What I bring to a team"
          intro="Grouped by the four kinds of work I actually do day to day, rather than as one undifferentiated keyword list."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreCompetencies.map((group, index) => (
            <Reveal
              key={group.group}
              delay={index * 0.06}
              className="custom-bg-raised hover-lift flex h-full flex-col rounded-xl p-5"
            >
              <h3 className="font-display text-sm font-bold text-accent sm:text-base">
                {group.group}
              </h3>
              <div aria-hidden="true" className="hairline mt-3 h-px w-full" />
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex gap-2 text-xs leading-relaxed text-foreground/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section>
        <SectionHeading
          eyebrow="Services"
          title="How I'm usually brought in"
          intro="Whether as an employee or on contract, engagements tend to fall into one of these six shapes."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.05}
              className="custom-bg-raised hover-lift flex h-full flex-col rounded-xl p-5 sm:p-6"
            >
              <h3 className="font-display text-base font-bold leading-snug text-foreground">
                {service.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-foreground/75 sm:text-sm">
                {service.description}
              </p>
              <ul className="mt-4 flex flex-col gap-1.5 border-t border-accent/15 pt-4">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex gap-2 text-xs leading-relaxed text-muted"
                  >
                    <span aria-hidden="true" className="text-accent/60">
                      ▸
                    </span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- GitHub activity ---------------- */}
      <section>
        <SectionHeading
          eyebrow="Open source activity"
          title="GitHub"
          intro="Most of my professional work lives in private client repositories, so public activity understates the volume."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="custom-bg-raised overflow-hidden rounded-xl p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-auto w-full"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Saad-Ahmed-Khanzada&theme=transparent&hide_border=true&title_color=22D3EE&text_color=FFFFFF&icon_color=22D3EE&text_bold=false&layout=compact"
              alt="Most used programming languages on GitHub"
              loading="lazy"
            />
          </Reveal>

          <Reveal
            delay={0.06}
            className="custom-bg-raised overflow-hidden rounded-xl p-2 lg:col-span-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-auto w-full"
              src="https://github-readme-stats.vercel.app/api?username=Saad-Ahmed-Khanzada&theme=transparent&hide_border=true&title_color=22D3EE&text_color=FFFFFF&icon_color=22D3EE&text_bold=false"
              alt="GitHub contribution statistics"
              loading="lazy"
            />
          </Reveal>

          <Reveal
            delay={0.12}
            className="custom-bg-raised overflow-hidden rounded-xl p-2 sm:col-span-2 lg:col-span-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-auto w-full"
              src="https://github-readme-streak-stats.herokuapp.com?user=Saad-Ahmed-Khanzada&theme=dark&hide_border=true&type=svg&currStreakLabel=22D3EE&background=EB545400&ring=22D3EE"
              alt="GitHub contribution streak"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default AboutDetails;
