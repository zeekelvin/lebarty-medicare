"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CinematicAtmosphere } from "@/components/ui/CinematicAtmosphere";
import { KenBurns } from "@/components/ui/KenBurns";
import { site } from "@/lib/site";
import { assets } from "@/lib/assets";

export function DoctorSpotlight() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      id="dr-lebarty"
      className="relative w-full overflow-hidden bg-[#0b1f30] py-24 text-white sm:py-32"
    >
      <CinematicAtmosphere intensity={0.5} tone="trust" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-12 px-6 sm:px-12 lg:grid-cols-12">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10">
            <motion.div style={{ y: portraitY }} className="absolute inset-[-8%]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#12324a] to-[#0b1f30]" />
              <KenBurns
                src={assets.drLebarty}
                alt={site.founder.name}
                gentle
                duration={20}
                sizes="(max-width: 1024px) 100vw, 42vw"
                imgClassName="object-cover object-top"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1f30]/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand">
                Founder &amp; Physician
              </p>
              <p className="mt-1 font-display text-2xl text-white">
                {site.founder.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.42em] text-brand"
          >
            <span className="h-px w-12 bg-brand" />
            Meet your physician
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.04]"
          >
            A doctor who keeps
            <span className="block text-brand">showing up.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
          >
            Dr. Lebarty trained at Ellis Hospital in Schenectady and built a
            practice that refuses to specialize past the patient — primary
            care, addiction treatment, nursing-home rounds, immigration exams,
            and humanitarian work, all from one set of hands.
          </motion.p>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {site.founder.credentials.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.04] p-3.5 text-xs leading-relaxed text-white/85"
              >
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {c}
              </motion.li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/about/dr-lebarty">
              <MagneticButton className="bg-warm text-white hover:bg-warm/90">
                Dr. Lebarty's Full Story
              </MagneticButton>
            </Link>
            <Link href="/book">
              <MagneticButton className="border border-white/25 text-white hover:border-brand hover:text-brand">
                Book a Visit
              </MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
