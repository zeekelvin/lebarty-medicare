import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

/** Eyebrow + display heading + optional intro, with a light reveal. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "font-mono text-[11px] font-semibold uppercase tracking-[0.28em]",
            dark ? "text-brand" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08] tracking-tight",
          dark ? "text-white" : "text-fg",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            dark ? "text-white/75" : "text-fg/70",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
