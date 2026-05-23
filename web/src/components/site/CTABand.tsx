import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

type Props = {
  title: ReactNode;
  body?: ReactNode;
  children?: ReactNode;
};

/** Closing call-to-action band — dark navy with a soft brand wash. */
export function CTABand({ title, body, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0b1f30] py-20 text-white sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-[#a30f54]/35 via-transparent to-[#0c7b79]/30"
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.06] tracking-tight">
            {title}
          </h2>
        </Reveal>
        {body ? (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80">
              {body}
            </p>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
