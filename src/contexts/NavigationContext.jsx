"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NavigationContext = createContext(null);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const startLoading = useCallback(() => setIsLoading(true), []);
  const stopLoading = useCallback(() => setIsLoading(false), []);

  /*
    Show the loader when an internal link is clicked, and clear it once the
    pathname actually changes.

    The previous implementation reassigned router.push and router.replace to
    wrapped versions on every effect run. That mutates an object shared across
    the whole app, and because the effect depended on `router` it could patch
    an already-patched method — each render layering another wrapper, and the
    cleanup restoring a stale reference. Listening for clicks and reacting to
    pathname is enough, and leaves the router untouched.
  */
  useEffect(() => {
    const handleLinkClick = (event) => {
      // Ignore modified clicks — those open a new tab and never navigate here.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        href !== pathname &&
        anchor.target !== "_blank"
      ) {
        startLoading();
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [pathname, startLoading]);

  // Clear on route settle, plus a safety timeout so a cancelled navigation
  // can never leave the overlay stuck over the page.
  useEffect(() => {
    stopLoading();
  }, [pathname, stopLoading]);

  useEffect(() => {
    if (!isLoading) return;
    const timeoutId = setTimeout(stopLoading, 2500);
    return () => clearTimeout(timeoutId);
  }, [isLoading, stopLoading]);

  return (
    <NavigationContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
      <RouteLoader isLoading={isLoading} />
    </NavigationContext.Provider>
  );
};

const RouteLoader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-lg"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-14 w-14">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-accent/20"
              />
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-2 border-transparent border-r-accent border-t-accent"
              />
              <motion.span
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
              />
            </div>

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-foreground/80"
            >
              LOADING
            </motion.p>

            <div className="h-0.5 w-40 overflow-hidden rounded-full bg-accent/20">
              <motion.div
                animate={{ x: ["-100%", "220%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-16 rounded-full bg-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationProvider;
