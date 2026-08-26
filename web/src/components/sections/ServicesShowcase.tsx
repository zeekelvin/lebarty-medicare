"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/cn";
import { assets } from "@/lib/assets";
import { KenBurns } from "@/components/ui/KenBurns";

type Span = "feature" | "wide" | "tall" | "square";

type Service = {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  span: Span;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    slug: "primary-care",
    category: "For your whole life",
    title: "Primary Care",
    tagline: "Annual physicals, chronic care, screenings, all with continuity.",
    span: "wide",
    bullets: ["Annual physicals & wellness", "Chronic condition management", "Same-week new patients"],
  },
  {
    slug: "telehealth",
    category: "Care that travels",
    title: "Telehealth",
    tagline: "Secure video visits, wherever you are.",
    span: "square",
    bullets: ["HIPAA-secure video", "Evening slots", "Same physician, same chart"],
  },
  {
    slug: "addiction-medicine",
    category: "Healing without judgment",
    title: "Addiction Medicine",
    tagline: "Suboxone & medication-assisted treatment. No stigma, ever.",
    span: "feature",
    bullets: ["Suboxone / buprenorphine", "Telehealth induction available", "Same-week appointments"],
  },
  {
    slug: "nursing-home-visits",
    category: "For our oldest neighbors",
    title: "Nursing Home Visits",
    tagline: "On-site and telehealth assessments across Benin City.",
    span: "square",
    bullets: ["On-site physician rounds", "Telehealth follow-ups", "Family coordination"],
  },
  {
    slug: "laboratory",
    category: "Diagnostics",
    title: "Laboratory",
    tagline: "Lab tests and results, handled under one roof.",
    span: "square",
    bullets: ["Blood work & urinalysis", "Screening support", "Results explained clearly"],
  },
  {
    slug: "preventive-care",
    category: "Stay ahead of it",
    title: "Preventive Care",
    tagline: "Screenings, labs, and wellness calibrated to your life.",
    span: "wide",
    bullets: ["Age-appropriate screenings", "In-house & partner labs", "Women's & men's health"],
  },
];

export function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full overflow-hidden border-t border-fg/8 py-24 sm:py-32"
      aria-label="Care services"
    >
      <motion.div
        style={{ y: titleY }}
        className="mx-auto mb-12 w-full max-w-[1600px] px-6 sm:mb-20 sm:px-12"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.42em] text-accent">
              <span className="h-px w-12 bg-accent" />
              The Services · 06 ways we care
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-fg">
              <span className="block">One team.</span>
              <span className="block text-accent">Every kind of care.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-fg/65 sm:text-base">
            Walk in, log on, or we come to you. Whichever you choose, you keep
            the same physician and the same chart: care that never makes you
            start over.
          </p>
        </div>
      </motion.div>

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-3 px-6 sm:grid-cols-6 sm:gap-4 sm:px-12">
        {SERVICES.map((s, i) => (
          <Tile key={s.slug} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function Tile({ s, index }: { s: Service; index: number }) {
  const [hover, setHover] = useState(false);
  const tileRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(tileRef, { margin: "-15%" });
  const reduced = useReducedMotion();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoExists, setVideoExists] = useState(true);

  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ["start end", "end start"],
  });
  const layerY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const imgUrl = assets.services[s.slug] || "";
  const videoUrl = assets.serviceVideos[s.slug] || "";
  const hasVideo = !!videoUrl && videoExists && !reduced;

  const active = hover || inView;

  const spanClass = {
    feature: "sm:col-span-6 aspect-[16/10] sm:aspect-[16/6]",
    wide: "sm:col-span-4 aspect-[16/10]",
    tall: "sm:col-span-2 sm:row-span-2 aspect-[4/5]",
    square: "sm:col-span-2 aspect-[16/11] sm:aspect-square",
  }[s.span];

  // Play the loop whenever the tile is on screen; pause when it scrolls away.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !hasVideo) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView, hasVideo]);

  return (
    <motion.div
      ref={tileRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className={cn(
        "group relative overflow-hidden rounded-sm border border-fg/10 bg-muted",
        spanClass,
      )}
    >
      <Link
        href={`/services/${s.slug}`}
        className="absolute inset-0 z-20"
        aria-label={s.title}
      />

      {/* Motion media layer */}
      <motion.div
        style={{ y: layerY }}
        className="absolute inset-[-7%] will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#12324a] to-[#0b1f30]" />

        {/* Ken Burns image — base layer + poster while video loads */}
        <KenBurns
          src={imgUrl}
          alt={s.title}
          variant={index}
          duration={26 + index * 2}
          sizes="(max-width: 768px) 100vw, 60vw"
          imgClassName={`object-cover object-center transition-all duration-700 ${
            active ? "brightness-110 saturate-110" : "brightness-100"
          }`}
        />

        {/* Generated motion loop — plays whenever the tile is on screen */}
        {hasVideo && (
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            poster={imgUrl || undefined}
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => setVideoExists(false)}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1f30]/85 via-[#0b1f30]/15 to-transparent" />

      {/* Activity glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-40 w-40 rounded-full blur-3xl"
        style={{
          left: "34%",
          top: "52%",
          background:
            "radial-gradient(closest-side, rgba(242,24,114,0.5), transparent 70%)",
        }}
        animate={{
          opacity: active ? [0.3, 0.8, 0.5, 0.9, 0.3] : 0.15,
          scale: active ? [0.9, 1.15, 1.0, 1.2, 0.9] : 0.85,
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-white/85 sm:text-[10px]">
            {String(index + 1).padStart(2, "0")} · {s.category}
          </span>
          <motion.span
            animate={{ scale: active ? 1.3 : 1 }}
            className="h-2 w-2 rounded-full bg-brand"
          />
        </div>
        <div>
          <h3 className="font-display text-2xl leading-[1.05] text-white sm:text-3xl md:text-4xl">
            {s.title}
          </h3>
          <p className="mt-2 text-xs text-white/80 sm:text-sm">{s.tagline}</p>
          <motion.div
            animate={{
              height: hover ? "auto" : 0,
              opacity: hover ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-4 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85">
              {s.bullets.map((b) => (
                <li key={b}>+ {b}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 z-10 h-px bg-brand"
        animate={{ width: active ? "100%" : "0%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
