import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Hero background image URL. Falls back to a brand gradient when absent. */
  image?: string;
  imageAlt?: string;
  /** Optional CTAs / content rendered below the intro. */
  children?: ReactNode;
};

/**
 * Interior-page hero — an image-backed band with a deep brand overlay and
 * white text. Light fade-in via Reveal. Used on every non-home page.
 */
export function PageHero({ eyebrow, title, intro, image, imageAlt = "", children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1f30]">
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      ) : null}

      {/* Brand overlays — keep text legible, let the photo breathe on the right */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#0b1f30]/85 via-[#0b1f30]/55 to-[#0b1f30]/15"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#0b1f30]/80 via-transparent to-[#0b1f30]/30"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
        {eyebrow ? (
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
              {eyebrow}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.04] tracking-tight text-white">
            {title}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {intro}
            </p>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
