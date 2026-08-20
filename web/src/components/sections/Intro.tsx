"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const STATS = [
  { figure: "3", label: "Board-certified specialties" },
  { figure: "100%", label: "Telehealth across New York" },
  { figure: "12+", label: "Communities reached in Africa" },
];

export function Intro() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full overflow-hidden border-t border-fg/8 py-24 sm:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 sm:px-12 lg:grid-cols-12">
        <motion.div style={{ y: lineY }} className="lg:col-span-7">
          <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.42em] text-accent">
            <span className="h-px w-12 bg-accent" />
            Who we are
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] text-fg">
            {"A practice built around the patient — and a mission that reaches a continent."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-12%" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-end lg:col-span-5"
        >
          <p className="text-base leading-relaxed text-fg/70 sm:text-lg">
            Lebarty Medicare was founded by Dr. Nosa Lebarty — board-certified in
            family medicine, a USCIS civil surgeon, and medical director for
            Albany County. He built the practice and the Lebarty Community
            Health Foundation on one belief: every person, wherever they are,
            deserves an unhurried, competent doctor.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 grid w-full max-w-[1600px] grid-cols-1 gap-px overflow-hidden rounded-sm border border-fg/10 bg-fg/10 px-6 sm:grid-cols-3 sm:px-12">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-bg p-8 sm:p-10"
          >
            <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent">
              {s.figure}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-fg/55">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
