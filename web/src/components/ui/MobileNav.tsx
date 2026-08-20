"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const MotionLink = motion.create(Link);

export type MobileNavLink = { href: string; label: string; n: string };

/**
 * Hamburger top-right → fullscreen overlay nav.
 * - Visible only below lg breakpoint
 * - Body scroll lock while open, ESC closes
 * - Auto-closes on `nav:scrolled` (a link inside was clicked)
 * Works with real route hrefs (multi-page) or hash anchors.
 */
export function MobileNav({
  brandKicker = "Lebarty Medicare",
  brandName = "& FOUNDATION",
  links,
  cta = { href: "/book", label: "Book a Visit →" },
  footer = "Benin City, Edo State · Telehealth available",
}: {
  brandKicker?: string;
  brandName?: string;
  links: MobileNavLink[];
  cta?: { href: string; label: string };
  footer?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onNav = () => setOpen(false);
    window.addEventListener("nav:scrolled", onNav);
    return () => window.removeEventListener("nav:scrolled", onNav);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto fixed right-5 top-5 z-[80] flex h-11 w-11 items-center justify-center rounded-full border border-fg/15 bg-bg/70 backdrop-blur-md transition-colors hover:border-accent hover:text-accent lg:hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              <X size={20} strokeWidth={1.5} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              <Menu size={20} strokeWidth={1.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0, originY: 1 }}
              transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
              className="absolute inset-0 bg-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-muted" />

            <div className="relative z-[1] flex h-full flex-col justify-between px-6 py-12">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="block font-mono text-[10px] uppercase tracking-[0.42em] text-fg/55"
                >
                  {brandKicker}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-1 block font-display text-xl uppercase tracking-[0.28em] text-accent"
                >
                  {brandName}
                </motion.span>
              </div>

              <nav className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <MotionLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.45 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-baseline gap-4 border-b border-fg/10 py-4 transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg/40 group-hover:text-accent">
                      {link.n}
                    </span>
                    <span className="font-display text-4xl uppercase leading-[0.9] tracking-tight sm:text-5xl">
                      {link.label}
                    </span>
                    <span className="ml-auto h-2 w-2 self-center rounded-full bg-fg/20 transition-colors group-hover:bg-brand" />
                  </MotionLink>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.95 }}
                className="flex flex-col gap-4"
              >
                <Link
                  href={cta.href}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-accent px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-accent/90"
                >
                  {cta.label}
                </Link>
                <span className="text-center font-mono text-[10px] uppercase tracking-[0.32em] text-fg/35">
                  {footer}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
