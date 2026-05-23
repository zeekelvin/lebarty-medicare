"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

type Tone = "care" | "warm" | "cool" | "foundation" | "trust";

const TONE_PALETTE: Record<
  Tone,
  { particle: string; floor: string; vignette: number }
> = {
  // Care: soft Clinical Teal motes on Soft Cloud — the Lebarty default
  care: {
    particle: "14, 141, 139",
    floor: "rgba(14, 141, 139, 0.07)",
    vignette: 0.1,
  },
  // Warm: soft Lebarty Pink motes
  warm: {
    particle: "242, 24, 114",
    floor: "rgba(242, 24, 114, 0.07)",
    vignette: 0.16,
  },
  // Cool: pale mint-teal
  cool: {
    particle: "150, 200, 195",
    floor: "rgba(14, 141, 139, 0.06)",
    vignette: 0.18,
  },
  // Foundation: warm pink embers — donate / Africa storytelling sections
  foundation: {
    particle: "242, 75, 140",
    floor: "rgba(242, 24, 114, 0.09)",
    vignette: 0.14,
  },
  // Trust: deep teal motes for the dark physician section
  trust: {
    particle: "32, 150, 148",
    floor: "rgba(14, 141, 139, 0.1)",
    vignette: 0.16,
  },
};

/**
 * Layered atmospheric effects — drifting fog, upward particle drift,
 * floor glow, breathing vignette. Sits behind content, pointer-events: none.
 * `tone` swaps particle + glow colors.
 */
export function CinematicAtmosphere({
  intensity = 1,
  tone = "care",
  emberX,
  emberY,
}: {
  intensity?: number;
  tone?: Tone;
  emberX?: string | number;
  emberY?: string | number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const palette = TONE_PALETTE[tone];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    const particles: {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      tw: number;
    }[] = [];

    const setSize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();
    window.addEventListener("resize", setSize);

    const count =
      Math.max(36, Math.floor((width * height) / 22000)) * intensity;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -Math.random() * 0.35 - 0.08,
        a: Math.random() * 0.6 + 0.15,
        tw: Math.random() * Math.PI * 2,
      });
    }

    let raf = 0;
    let stopped = false;
    const tick = () => {
      if (stopped) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.tw += 0.03;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        const flicker = 0.5 + 0.5 * Math.sin(p.tw);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${palette.particle}, ${p.a * flicker * 0.7})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    if (!reduced) raf = requestAnimationFrame(tick);

    const onVis = () => {
      if (document.hidden) {
        stopped = true;
        cancelAnimationFrame(raf);
      } else if (stopped && !reduced) {
        stopped = false;
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [intensity, palette.particle]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Drifting volumetric fog */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40 mix-blend-multiply"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="fogNoise" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.025"
              numOctaves="2"
              seed="3"
            >
              <animate
                attributeName="baseFrequency"
                dur="38s"
                values="0.012 0.025;0.018 0.02;0.012 0.025"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix
              values="0 0 0 0 0.05
                      0 0 0 0 0.32
                      0 0 0 0 0.31
                      0 0 0 0.4 0"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#fogNoise)" />
      </svg>

      {/* Upward particle drift */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full mix-blend-multiply"
      />

      {/* Floor glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-[28%]"
        style={{
          background: `linear-gradient(to top, ${palette.floor}, transparent 70%)`,
        }}
      />

      {/* Vignette breathing */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 58%, rgba(11,31,48,${palette.vignette * 0.4}) 88%, rgba(11,31,48,${palette.vignette}) 100%)`,
        }}
        animate={{ opacity: [0.6, 0.82, 0.6] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Optional ember pulse */}
      {emberX !== undefined && emberY !== undefined && (
        <motion.div
          aria-hidden
          className="absolute h-32 w-32 rounded-full blur-2xl"
          style={{
            left: emberX,
            top: emberY,
            background: `radial-gradient(closest-side, rgba(${palette.particle},0.5), transparent 70%)`,
          }}
          animate={{
            opacity: [0.4, 0.85, 0.55, 0.95, 0.4],
            scale: [0.9, 1.1, 0.95, 1.15, 0.9],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
