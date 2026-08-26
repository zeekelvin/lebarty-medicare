"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { navMore, navPrimary, site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Floating cinematic header for desktop (lg+).
 * Transparent over the hero, condenses to a frosted bar once scrolled.
 * Mobile uses MobileNav instead.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  // Interior pages open on a dark hero band — the transparent state is only
  // legible over the homepage hero, so everywhere else starts frosted.
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const moreRef = useRef<HTMLLIElement | null>(null);
  const moreButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!moreOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMoreOpen(false);
        moreButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!moreRef.current?.contains(event.target as Node)) setMoreOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [moreOpen]);

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
            solid
              ? "border border-fg/10 bg-bg/85 shadow-[0_8px_30px_-12px_rgba(18,50,74,0.25)] backdrop-blur-md"
              : "border border-transparent bg-transparent",
          )}
        >
          <Logo />

          <nav aria-label="Primary">
            <ul className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/70 xl:gap-7">
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

              {/* "More" dropdown — Patients, Foundation, Resources */}
              <li ref={moreRef} className="relative">
                <button
                  ref={moreButtonRef}
                  type="button"
                  aria-expanded={moreOpen}
                  aria-controls="header-more-menu"
                  onClick={() => setMoreOpen((value) => !value)}
                  className={cn(
                    "flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-accent",
                    moreOpen ? "text-accent" : "text-fg/70",
                  )}
                >
                  More
                  <ChevronDown
                    size={13}
                    strokeWidth={2}
                    className={cn(
                      "transition-transform duration-200",
                      moreOpen && "rotate-180",
                    )}
                  />
                </button>

                {moreOpen ? (
                  // pt-3 (not margin) keeps the hover path unbroken between
                  // the trigger and the panel.
                  <div
                    id="header-more-menu"
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                  >
                    <ul className="w-48 rounded-2xl border border-fg/10 bg-bg/95 p-2 shadow-[0_18px_50px_-20px_rgba(18,50,74,0.35)] backdrop-blur-md">
                      {navMore.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMoreOpen(false)}
                            className="block rounded-xl px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/70 transition-colors hover:bg-muted hover:text-accent"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${site.contact.phoneTel}`}
              data-cursor="hover"
              className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-fg/55 transition-colors hover:text-accent xl:block"
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
