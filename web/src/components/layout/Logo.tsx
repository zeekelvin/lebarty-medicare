"use client";

import Link from "next/link";
import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = {
  variant?: "full" | "mark";
  /** 'dark' lightens the wordmark for dark surfaces (footer). */
  surface?: "light" | "dark";
  className?: string;
};

/**
 * Lebarty Medi-Care Hospital logo — a glossy 3D-shaded pink heart with a
 * white EKG heartbeat line. The mark beats continuously in a real
 * lub-dub rhythm (honors prefers-reduced-motion).
 */
export function Logo({ variant = "full", surface = "light", className }: Props) {
  const isDark = surface === "dark";
  const reduced = useReducedMotion();
  const uid = useId().replace(/:/g, "");

  const wordmarkPrimary = isDark ? "text-white" : "text-[#12324A]";
  const wordmarkAccent = isDark ? "text-white/70" : "text-[#0C7B79]";

  // Heartbeat: a quick lub-dub in the first third, then rest.
  const beat = reduced
    ? undefined
    : {
        scale: [1, 1.075, 1.0, 1.05, 1, 1, 1],
      };

  const Mark = (
    <motion.svg
      viewBox="0 0 700 620"
      className="h-11 w-11 shrink-0"
      aria-hidden="true"
      style={{ transformOrigin: "50% 55%" }}
      animate={beat}
      transition={
        reduced
          ? undefined
          : {
              duration: 1.7,
              times: [0, 0.12, 0.24, 0.34, 0.46, 0.6, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      <defs>
        <linearGradient id={`hg-${uid}`} x1="0.18" y1="0.05" x2="0.82" y2="0.98">
          <stop offset="0%" stopColor="#FF7DB0" />
          <stop offset="34%" stopColor="#F21872" />
          <stop offset="100%" stopColor="#A30F54" />
        </linearGradient>
        <radialGradient id={`hs-${uid}`} cx="0.34" cy="0.26" r="0.6">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M 350,556 C 350,556 80,360 80,205 C 80,108 160,56 244,56 C 307,56 346,102 350,150 C 354,102 393,56 456,56 C 540,56 620,108 620,205 C 620,360 350,556 350,556 Z"
        fill={`url(#hg-${uid})`}
      />
      <path
        d="M 350,556 C 350,556 80,360 80,205 C 80,108 160,56 244,56 C 307,56 346,102 350,150 C 354,102 393,56 456,56 C 540,56 620,108 620,205 C 620,360 350,556 350,556 Z"
        fill={`url(#hs-${uid})`}
      />
      <polyline
        points="135,300 290,300 318,262 346,300 398,300 442,128 486,470 528,236 562,330 584,300 590,300"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );

  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label="Lebarty Medi-Care Hospital — home"
        className={className}
      >
        {Mark}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Lebarty Medi-Care Hospital — home"
      className={className}
    >
      <span className="flex items-center gap-3">
        {Mark}
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-2xl font-semibold tracking-tight ${wordmarkPrimary}`}
          >
            Lebarty
          </span>
          <span
            className={`mt-1 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] ${wordmarkAccent}`}
          >
            Medi-Care Hospital
          </span>
        </span>
      </span>
    </Link>
  );
}
