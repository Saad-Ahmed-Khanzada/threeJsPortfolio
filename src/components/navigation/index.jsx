"use client";

import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const Navigation = () => {
  const size = useScreenSize();

  /*
    useScreenSize reads window.innerWidth in an effect, so it is undefined on
    the server and on the first client render. Rendering nothing until it
    resolves avoids a hydration mismatch and the visible flash of the mobile
    layout on desktop that the previous version had.
  */
  if (!size) return null;

  const isOrbit = size >= 480;
  const isLarge = size >= 1024;
  const isMedium = size >= 768;
  const angleIncrement = 360 / BtnList.length;

  /*
    Orbit radius is bounded on two sides:
      - large enough to clear the hero text block, or the buttons sweep
        straight through the name and title;
      - small enough to stay inside the viewport on *both* axes.

    Sizing off vw alone broke on wide, short screens — a 1280x720 laptop got
    a 410px radius with only 360px of vertical room, so the buttons at the
    top and bottom of the ring were clipped off-screen. min() against vh
    keeps the whole ring visible at any aspect ratio.
  */
  const radius = isLarge
    ? "calc(min(32vw, 40vh) - 1rem)"
    : isMedium
    ? "calc(min(38vw, 40vh) - 1rem)"
    : "calc(min(40vw, 38vh) - 1rem)";

  /*
    pointer-events-none on the nav wrapper is load-bearing, not cosmetic.

    Both layouts below are transparent elements covering the entire viewport
    at z-40, and hit testing ignores transparency — an invisible element still
    catches the click. Without this, the nav swallowed every click aimed at
    the hero underneath it at z-20, so "View my work" and "Résumé" rendered,
    hovered, and did nothing.

    NavButton re-enables pointer events on the buttons themselves.
  */
  if (isOrbit) {
    return (
      <nav
        aria-label="Primary"
        className="pointer-events-none fixed inset-0 z-40 flex h-screen w-full items-center justify-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="group relative flex w-max animate-spin-slow items-center justify-center hover:pause"
        >
          {BtnList.map((btn, index) => {
            const angleRad = (index * angleIncrement * Math.PI) / 180;
            const x = `calc(${radius}*${Math.cos(angleRad)})`;
            const y = `calc(${radius}*${Math.sin(angleRad)})`;

            return (
              <NavButton
                key={btn.label}
                x={x}
                y={y}
                {...btn}
                // Flip the tooltip inward when the button is on the left arc
                // so labels never run off the edge of the viewport.
                labelDirection={Math.cos(angleRad) < -0.2 ? "left" : "right"}
                isCircular
              />
            );
          })}
        </motion.div>
      </nav>
    );
  }

  // Below 480px the orbit has no room — buttons dock to the screen edges and
  // leave the middle column free for the hero copy.
  const half = Math.ceil(BtnList.length / 2);

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-0 z-40 flex h-screen w-full items-center justify-between px-2.5"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-start justify-center space-y-3"
      >
        {BtnList.slice(0, half).map((btn) => (
          <NavButton key={btn.label} x={0} y={0} {...btn} isCircular={false} />
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-end justify-center space-y-3"
      >
        {BtnList.slice(half).map((btn) => (
          <NavButton
            key={btn.label}
            x={0}
            y={0}
            {...btn}
            labelDirection="left"
            isCircular={false}
          />
        ))}
      </motion.div>
    </nav>
  );
};

export default Navigation;
