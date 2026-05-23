"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import { navPrimary, site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Floating cinematic header for desktop (lg+).
 * Transparent over the hero, condenses to a frosted bar once scrolled.
 * Mobile uses MobileNav instead.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[55] hidden lg:block"
    >
      <div className="mx-auto max-w-[1600px] px-6 pt-4">
        <div
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-6 rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled
              ? "border border-fg/10 bg-bg/85 shadow-[0_8px_30px_-12px_rgba(18,50,74,0.25)] backdrop-blur-md"
              : "border border-transparent bg-transparent",
          )}
        >
          <Logo />

          <nav aria-label="Primary">
            <ul className="flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/70">
              {navPrimary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-cursor="hover"
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${site.contact.phoneTel}`}
              data-cursor="hover"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg/55 transition-colors hover:text-accent"
            >
              {site.contact.phoneDisplay}
            </a>
            <Link
              href="/book"
              data-cursor="hover"
              className="rounded-full bg-accent px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-accent/90"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
