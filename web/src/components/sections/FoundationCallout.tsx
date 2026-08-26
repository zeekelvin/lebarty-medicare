"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { assets } from "@/lib/assets";

export function FoundationCallout() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const [videoExists, setVideoExists] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  // Mount the (large) banner video well before the section arrives so it has
  // time to buffer, but never for visitors who prefer reduced motion — they
  // keep the calm gradient instead of an unpausable autoplay loop.
  const nearViewport = useInView(ref, { once: true, margin: "1500px 0px" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      id="foundation"
      className="relative min-h-[90svh] w-full overflow-hidden border-t border-fg/8"
    >
      {/* Background media */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-[-8%] z-0 will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#a30f54] via-[#f21872] to-[#7a0e40]" />
        {nearViewport && !reducedMotion && videoExists && assets.foundationLoop && (
          <video
            src={assets.foundationLoop}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoExists(false)}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </motion.div>

      {/* Readability scrim */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0b1f30] via-[#0b1f30]/55 to-[#0b1f30]/35" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0b1f30]/80 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90svh] w-full max-w-[1600px] flex-col justify-end px-6 py-20 sm:px-12 sm:py-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.42em] text-white/80"
        >
          <span className="h-px w-12 bg-warm" />
          The Lebarty Community Health Foundation
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] text-white"
        >
          Care here.
          <span className="block italic text-warm">Clinics there.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base"
        >
          The Foundation builds and supplies community health clinics in
          under-served villages across Africa. Funding starts with patient
          visits in Benin City, and every appointment is a quiet act of
          solidarity with a community a world away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link href="/foundation/donate">
            <MagneticButton className="bg-warm text-white hover:bg-warm/90">
              Donate to the Foundation
            </MagneticButton>
          </Link>
          <Link href="/foundation">
            <MagneticButton className="border border-white/30 text-white hover:border-warm hover:text-warm">
              See Our Programs
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
