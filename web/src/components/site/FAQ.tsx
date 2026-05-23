import { Reveal } from "@/components/site/Reveal";

type Props = {
  items: { q: string; a: string }[];
};

/** Accessible accordion built on native <details> — no client JS needed. */
export function FAQ({ items }: Props) {
  return (
    <div className="divide-y divide-fg/10 overflow-hidden rounded-2xl border border-fg/10">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 0.04}>
          <details className="group bg-bg">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-lg text-fg [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden
                className="shrink-0 text-xl text-accent transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-fg/70">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
