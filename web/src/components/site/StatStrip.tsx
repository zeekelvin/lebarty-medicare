import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  items: { figure: string; label: string }[];
  tone?: "light" | "dark";
};

/** A row of headline figures. */
export function StatStrip({ items, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border lg:grid-cols-4",
        dark ? "border-white/12 bg-white/10" : "border-fg/10 bg-fg/10",
      )}
    >
      {items.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.07}>
          <div className={cn("h-full p-6 sm:p-8", dark ? "bg-[#0b1f30]" : "bg-bg")}>
            <p
              className={cn(
                "font-display text-[clamp(2rem,4vw,3rem)] leading-none",
                dark ? "text-brand" : "text-accent",
              )}
            >
              {s.figure}
            </p>
            <p
              className={cn(
                "mt-2 font-mono text-[10px] uppercase tracking-[0.18em]",
                dark ? "text-white/60" : "text-fg/55",
              )}
            >
              {s.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
