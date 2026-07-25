"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

/*
  Panel wrapper for the About grid.

  The previous version animated from scale(0), which made every panel
  briefly unreadable as it entered and looked erratic on a grid where
  several panels enter at once. A short fade and rise reads as polish
  instead of as a transition effect.
*/
const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "custom-bg-raised flex items-center justify-center rounded-xl p-5 sm:p-6 lg:p-7",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
