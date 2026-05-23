"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * KenBurns — turns a still image into continuous motion content.
 * A slow, looping scale + drift gives every photograph a living, cinematic
 * feel without any video file or generation credits.
 *
 * `variant` (0-3) picks a distinct motion path so adjacent images don't
 * drift in sync. `gentle` is a softer scale-only loop for portraits/faces.
 * Honors prefers-reduced-motion — falls back to a static cover image.
 */
const PATHS = [
  { scale: [1.06, 1.17, 1.06], x: ["0%", "-2.5%", "0%"], y: ["0%", "-2%", "0%"] },
  { scale: [1.17, 1.06, 1.17], x: ["-2%", "1.5%", "-2%"], y: ["1.5%", "-2%", "1.5%"] },
  { scale: [1.08, 1.18, 1.08], x: ["1.5%", "-2%", "1.5%"], y: ["-1.5%", "2%", "-1.5%"] },
  { scale: [1.15, 1.07, 1.15], x: ["-1.5%", "2%", "-1.5%"], y: ["2%", "-1.5%", "2%"] },
];

export function KenBurns({
  src,
  alt,
  variant = 0,
  duration = 24,
  imgClassName = "object-cover object-center",
  sizes = "100vw",
  priority = false,
  gentle = false,
}: {
  src: string;
  alt: string;
  variant?: number;
  duration?: number;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  gentle?: boolean;
}) {
  const reduced = useReducedMotion();
  const [ok, setOk] = useState(true);

  if (!src || !ok) return null;

  const p = PATHS[variant % PATHS.length];
  const animate = reduced
    ? undefined
    : gentle
      ? { scale: [1.02, 1.09, 1.02] }
      : { scale: p.scale, x: p.x, y: p.y };

  return (
    <motion.div
      className="absolute inset-0 h-full w-full will-change-transform"
      animate={animate}
      transition={
        reduced
          ? undefined
          : { duration, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setOk(false)}
        className={imgClassName}
      />
    </motion.div>
  );
}
