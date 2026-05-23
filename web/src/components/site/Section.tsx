import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  id?: string;
  tone?: "default" | "muted" | "dark";
  className?: string;
  /** Inner max-width. */
  width?: "default" | "wide" | "narrow";
};

const tones = {
  default: "bg-bg text-fg",
  muted: "bg-muted text-fg",
  dark: "bg-[#0b1f30] text-white",
};

const widths = {
  default: "max-w-6xl",
  wide: "max-w-[1400px]",
  narrow: "max-w-3xl",
};

/** Consistent vertical-rhythm section wrapper. */
export function Section({
  children,
  id,
  tone = "default",
  className,
  width = "default",
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-fg/8 py-20 sm:py-28",
        tones[tone],
        tone === "dark" && "border-white/10",
        className,
      )}
    >
      <div className={cn("mx-auto w-full px-6", widths[width])}>{children}</div>
    </section>
  );
}
