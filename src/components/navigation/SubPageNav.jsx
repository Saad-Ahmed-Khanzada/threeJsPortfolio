"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Menu, X, FileText } from "lucide-react";
import clsx from "clsx";
import { personalData } from "@/app/data";

/*
  Persistent sub-page navigation.

  The orbiting home navigation is the signature of this site, but it only
  exists on the landing page — previously the only control on a sub-page was
  a "back home" button, so moving from About to Projects meant a round trip
  through the home screen. That is fine for a visitor browsing for fun and
  actively hostile to a recruiter trying to find your experience in 30
  seconds. This bar gives every page a direct route to every other page.
*/

const pageLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Contact", href: "/contact" },
];

const SubPageNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      {/*
        Deliberately more opaque than the generic .custom-bg panel: this bar
        sits over scrolling content, and at 40% opacity the text passing
        underneath stayed legible through it and turned the bar to mush.
      */}
      <nav
        aria-label="Site"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-xl
          border border-accent/25 bg-background/90 px-3 py-2 shadow-lg backdrop-blur-xl sm:px-4"
      >
        {/* Home + identity */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-lg px-1 py-1 text-foreground transition-colors hover:text-accent"
          aria-label="Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
            <Home className="h-4 w-4" aria-hidden="true" />
          </span>
          {/* Shown at every width — on mobile the bar is otherwise just two
              icons with a large empty gap, which wastes the one piece of
              persistent branding on the page. */}
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-xs font-bold">
              {personalData.shortName}
            </span>
            <span className="truncate text-[0.6rem] text-muted">
              {personalData.title}
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {pageLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={clsx(
                  "relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors lg:text-sm",
                  isActive(link.href)
                    ? "text-accent"
                    : "text-foreground/75 hover:text-foreground"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="subnav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-background transition-colors hover:bg-accent/90 sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            Résumé
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="subnav-mobile"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-foreground transition-colors hover:text-accent md:hidden"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="subnav-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-xl border
              border-accent/25 bg-background/95 p-2 shadow-lg backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={clsx(
                      "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-accent/10 text-accent"
                        : "text-foreground/80 hover:bg-accent/5 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center gap-2 rounded-lg bg-accent px-3 py-2.5 text-sm font-semibold text-background"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Download résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default SubPageNav;
