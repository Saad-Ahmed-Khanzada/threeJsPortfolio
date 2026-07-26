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
      /*
        No alignment utilities in the base class.

        This used to hardcode "items-center justify-center", which silently beat
        the "items-start" that callers passed in. Tailwind resolves conflicting
        utilities by their order in the generated stylesheet, not by their order
        in the class attribute, so items-center always won and the About
        narrative rendered with a centered eyebrow and heading above
        left-aligned body copy. Callers now own their own alignment.
      */
      className={clsx(
        "custom-bg-raised flex rounded-xl p-5 sm:p-6 lg:p-7",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
