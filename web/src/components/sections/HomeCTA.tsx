"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CinematicAtmosphere } from "@/components/ui/CinematicAtmosphere";
import { site } from "@/lib/site";

export function HomeCTA() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-fg/8 py-28 sm:py-40"
    >
      <CinematicAtmosphere intensity={0.55} tone="care" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center sm:px-12">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[10px] uppercase tracking-[0.42em] text-accent"
        >
          Ready when you are
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[0.98] text-fg"
        >
          Book a visit. Or just
          <span className="block text-accent">call — we still answer.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-fg/70 sm:text-base"
        >
          Same-week appointments for new patients. Telehealth most weekday
          evenings. Whatever you need, a real person here will help you sort it
          out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/book">
            <MagneticButton className="bg-accent text-white hover:bg-accent/90">
              Book a Visit
            </MagneticButton>
          </Link>
          <a href={`tel:${site.contact.phoneTel}`}>
            <MagneticButton className="hairline border text-fg hover:border-accent hover:text-accent">
              Call {site.contact.phoneDisplay}
            </MagneticButton>
          </a>
          <Link href="/services/telehealth">
            <MagneticButton className="text-accent hover:text-accent/80">
              Start with Telehealth →
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
