"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  // eslint-disable-next-line no-var
  var __lenis: Lenis | undefined;
}

/**
 * Lenis smooth scroll + in-page anchor click interceptor.
 * Intercepts clicks on a[href^="#"] / [data-scroll-target] and routes them
 * through lenis.scrollTo() so easing is preserved. Real route links
 * (a[href="/..."]) pass straight through to the Next.js router.
 * Fires a `nav:scrolled` window event so MobileNav can auto-close.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    globalThis.__lenis = lenis;

    let raf = 0;
    function tick(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const target = e.target as HTMLElement | null;
      const a = target?.closest(
        'a[href^="#"], [data-scroll-target]',
      ) as HTMLElement | null;
      if (!a) return;
      const href =
        a.getAttribute("data-scroll-target") || a.getAttribute("href") || "";
      if (!href || href === "#") return;
      const selector = href.startsWith("#") ? href : `#${href}`;
      const el = document.querySelector(selector);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
      window.dispatchEvent(new CustomEvent("nav:scrolled"));
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      globalThis.__lenis = undefined;
    };
  }, []);

  return null;
}
