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
    <section className="relative isolate overflow-hidden bg-[#3A0718]">
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

      {/* Brand overlays — keep text legible without washing out the photo color. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#3A0718]/60 via-[#3A0718]/8 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#3A0718]/10 via-transparent to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
        {eyebrow ? (
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FBC9DF] [text-shadow:0_2px_14px_rgba(58,7,24,0.68)]">
              {eyebrow}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.04] tracking-tight text-white [text-shadow:0_3px_22px_rgba(58,7,24,0.72)]">
            {title}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 [text-shadow:0_2px_16px_rgba(58,7,24,0.68)] sm:text-lg">
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
