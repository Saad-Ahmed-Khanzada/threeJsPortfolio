"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const STORAGE_KEY = "musicConsent";

/*
  Ambient audio toggle.

  This used to open a blocking modal on first load asking "Do you like to play
  the background music?" — an interstitial standing between a visitor and any
  content at all. For a portfolio whose primary audience is recruiters giving
  the page thirty seconds, that was the single most expensive interaction on
  the site: a question nobody came to answer, blocking the thing they did come
  for.

  Audio is now opt-in and off by default. The toggle stays available for
  anyone who wants the ambience, and the choice persists. Browsers block
  autoplay without a user gesture anyway, so the modal was not buying
  playback reliability either.

  Docked bottom-right so it never collides with the sub-page nav bar.
*/
const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Restore a previous opt-in, but never start playback without a gesture.
  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "true") {
        setIsPlaying(false);
      }
    } catch {
      // localStorage can throw in private browsing modes — non-fatal.
    }
  }, []);

  const toggle = useCallback(() => {
    const next = !isPlaying;
    setIsPlaying(next);

    const audio = audioRef.current;
    if (audio) {
      if (next) {
        audio.volume = 0.35;
        audio.play().catch(() => setIsPlaying(false));
      } else {
        audio.pause();
      }
    }

    try {
      localStorage.setItem(STORAGE_KEY, String(next));
    } catch {
      // Ignore — the toggle still works for this session.
    }
  }, [isPlaying]);

  return (
    <div className="group fixed bottom-4 right-3 z-50 xs:right-4">
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        type="button"
        onClick={toggle}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        aria-pressed={isPlaying}
        aria-label={
          isPlaying ? "Turn off ambient sound" : "Turn on ambient sound"
        }
        className="custom-bg flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2.5 text-foreground transition-all hover:border-accent/60 hover:text-accent xs:h-12 xs:w-12 xs:p-3"
      >
        {isPlaying ? (
          <Volume2 className="h-full w-full" strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <VolumeX className="h-full w-full" strokeWidth={1.5} aria-hidden="true" />
        )}
      </motion.button>

      <span
        aria-hidden="true"
        className="custom-bg pointer-events-none absolute bottom-1/2 right-full mr-3 translate-y-1/2 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        {isPlaying ? "Sound on" : "Ambient sound"}
      </span>
    </div>
  );
};

export default Sound;
