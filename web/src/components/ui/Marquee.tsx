"use client";

import { motion, useScroll, useTransform, useVelocity } from "motion/react";
import { useRef } from "react";

/**
 * Continuous horizontal scroller. Scroll velocity boosts speed so fast
 * scrolling visibly accelerates the marquee. Items render 3x for seamless
 * wrap, separated by a Lebarty Pink mark.
 */
export function Marquee({
  items,
  baseDuration = 32,
}: {
  items: string[];
  baseDuration?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const boost = useTransform(velocity, [-2000, 0, 2000], [-12, 0, 12]);

  const row = [...items, ...items, ...items];

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden border-y border-fg/10 bg-muted/50 py-5 backdrop-blur-sm"
    >
      <motion.div style={{ x: boost }} className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: baseDuration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 items-center gap-12 pr-12"
        >
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-12 font-display text-2xl uppercase tracking-tight text-fg/35 sm:text-3xl"
            >
              {item}
              <span className="text-brand">+</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
