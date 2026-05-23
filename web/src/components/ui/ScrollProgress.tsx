"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Slim Lebarty Pink bar pinned to the top of the viewport.
 * Fills left-to-right with scroll. Spring-smoothed against jitter.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-brand"
      style={{ scaleX }}
    />
  );
}
