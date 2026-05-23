"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  { value: 6400, suffix: "+", label: "Patient encounters", sub: "Across the Foundation's outreach programs" },
  { value: 12, suffix: "+", label: "Communities served", sub: "Village clinics built and supplied" },
  { value: 4, label: "Countries reached", sub: "And growing each year" },
  { value: 100, suffix: "%", label: "Of donations to programs", sub: "Every dollar funds the work" },
];

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(stat.value);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(stat.value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);

  return (
    <span ref={ref}>
      {stat.prefix}
      {display.toLocaleString()}
      {stat.suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section
      id="impact"
      className="relative w-full overflow-hidden border-t border-fg/8 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.42em] text-accent">
            <span className="h-px w-12 bg-accent" />
            The Impact
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1] text-fg">
            Numbers that started
            <span className="block text-accent">as a single visit.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-fg/10 bg-fg/10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-bg p-8 transition-colors hover:bg-muted sm:p-10"
            >
              <p className="font-display text-[clamp(2.8rem,5vw,4.4rem)] leading-none text-accent">
                <CountUp stat={s} />
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-fg">
                {s.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fg/60">{s.sub}</p>
              <span className="mt-5 block h-px w-0 bg-brand transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-fg/40">
          Figures are placeholders pending the Foundation's verified numbers.
        </p>
      </div>
    </section>
  );
}
