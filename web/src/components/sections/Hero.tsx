"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

/**
 * Hero carousel slides — drop the corresponding files into /public/hero/.
 * "contain" slides (text-dense graphics / portrait shots) render fully visible
 * over a blurred fill; "cover" slides fill the frame edge-to-edge.
 */
const heroSlides = [
  {
    src: "/hero/slide-2.jpg",
    alt: "Lebarty Medi-Care Hospital — Compassion. Excellence. Trust.",
    fit: "contain",
  },
  {
    src: "/hero/slide-3.jpg",
    alt: "The Lebarty Medi-Care Hospital building in Benin City",
    fit: "cover",
  },
  {
    src: "/hero/slide-4.jpg",
    alt: "Lebarty Medi-Care Hospital — delivering world-class healthcare",
    fit: "contain",
  },
] as const;

/**
 * Homepage film-card hero.
 * Layered: gradient base → still image → looping video, with mouse-parallax,
 * scroll parallax, animated title reveal, and magnetic CTAs.
 * Degrades gracefully if /assets/hero-still.png or /assets/hero-loop.mp4
 * are missing — the gradient base shows through.
 */
export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 22, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 22, mass: 0.6 });
  const heroX = useTransform(sx, [-1, 1], [-8, 8]);
  const heroY = useTransform(sy, [-1, 1], [-6, 6]);
  const lightX = useTransform(sx, [-1, 1], [-80, 80]);
  const lightY = useTransform(sy, [-1, 1], [-40, 40]);

  const [slide, setSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Honor prefers-reduced-motion: no auto-advance, dots still work.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAutoPlay(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(
      () => setSlide((s) => (s + 1) % heroSlides.length),
      7000,
    );
    return () => clearInterval(id);
  }, [autoPlay]);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-bg"
    >
      <motion.div
        className="absolute inset-0 z-[1] will-change-transform"
        style={{ y: bgY, scale: bgScale }}
      >
        {/* Gradient base — always present, shows if media missing */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f30] via-[#12324a] to-[#0b1f30]" />

        <motion.div
          className="absolute inset-[-4%] will-change-transform"
          style={{ x: heroX, y: heroY }}
        >
          {heroSlides.map((s, i) => (
            <div
              key={s.src}
              aria-hidden={slide !== i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                slide === i ? "opacity-100" : "opacity-0"
              }`}
            >
              {s.fit === "contain" && (
                <Image
                  src={s.src}
                  alt=""
                  aria-hidden
                  fill
                  sizes="100vw"
                  className="scale-110 object-cover object-center opacity-40 blur-2xl"
                />
              )}
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={
                  s.fit === "contain"
                    ? "object-contain object-center"
                    : "object-cover object-center"
                }
              />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-bg/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/35 via-transparent to-bg/20" />
        </motion.div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            x: lightX,
            y: lightY,
            background:
              "radial-gradient(closest-side, rgba(242,24,114,0.4), transparent 75%)",
          }}
        />
      </motion.div>

      {/* Top kicker */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="pointer-events-none absolute inset-x-0 top-24 z-[10] flex flex-col items-center px-6 text-center sm:top-28"
      >
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[10px] uppercase tracking-[0.42em] text-fg/70 sm:text-[11px]"
        >
          Benin City, Edo State · Your Health, Our Mission
        </motion.span>
        <motion.div
          aria-hidden
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 h-px bg-brand"
        />
      </motion.div>

      {/* Bottom headline + CTAs */}
      <motion.div
        style={{ y: subY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-12 z-[10] px-6 sm:bottom-16 sm:px-12"
      >
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
              <span className="h-px w-10 bg-accent" />
              Lebarty Medicare &amp; Foundation
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,6.4vw,5.6rem)] leading-[0.98] tracking-tight text-[#C30B38]">
              Your Health, Our Mission.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-fg/70 sm:text-base">
              A hospital in Benin City: general medicine,
              pediatrics, emergency care, and more. Every visit helps fund
              community clinics across Africa.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/book">
              <MagneticButton className="bg-accent text-white hover:bg-accent/90">
                Book a Visit
              </MagneticButton>
            </Link>
            <Link href="/foundation">
              <MagneticButton className="hairline border text-fg hover:border-accent hover:text-accent">
                The Foundation
              </MagneticButton>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Carousel dots */}
      <div className="absolute bottom-5 right-6 z-[10] flex items-center gap-2 sm:right-12">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show hero slide ${i + 1}`}
            onClick={() => setSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              slide === i ? "w-6 bg-accent" : "w-2 bg-fg/25 hover:bg-fg/50"
            }`}
          />
        ))}
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-4 left-1/2 z-[10] -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.42em] text-fg/40"
        animate={{ y: [0, 6, 0], opacity: [0.3, 0.85, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
