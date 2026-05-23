"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Custom cursor — outer ring + inner dot in Clinical Teal.
 * Only mounts on hover-capable pointer-fine devices (desktop with mouse).
 * Adds `has-cursor` to body so globals.css hides the native cursor.
 * Ring scales up over [data-cursor="hover"], a, button.
 */
export function MagneticCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { damping: 26, stiffness: 320, mass: 0.4 });
  const springY = useSpring(y, { damping: 26, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest('[data-cursor="hover"], a, button')) setHovering(true);
    };
    const out = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest('[data-cursor="hover"], a, button')) setHovering(false);
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          className="rounded-full border border-accent"
          animate={{
            width: hovering ? 56 : 32,
            height: hovering ? 56 : 32,
            opacity: hovering ? 1 : 0.6,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x, y }}
      />
    </>
  );
}
