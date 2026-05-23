import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/cn";

export type Card = {
  title: string;
  body: string;
  href?: string;
  image?: string;
  eyebrow?: string;
};

type Props = {
  items: Card[];
  columns?: 2 | 3;
};

/** Responsive grid of content cards — optional image, optional link. */
export function CardGrid({ items, columns = 3 }: Props) {
  return (
    <div
      className={cn(
        "grid gap-5",
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {items.map((c, i) => {
        const inner = (
          <>
            {c.image ? (
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            ) : null}
            {c.eyebrow ? (
              <p
                className={cn(
                  "font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent",
                  c.image ? "mt-5" : "",
                )}
              >
                {c.eyebrow}
              </p>
            ) : null}
            <h3 className="mt-2 font-display text-xl leading-snug text-fg">
              {c.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg/70">{c.body}</p>
            {c.href ? (
              <span className="mt-4 inline-block text-sm font-medium text-accent">
                Learn more &rarr;
              </span>
            ) : null}
          </>
        );
        return (
          <Reveal key={c.title} delay={i * 0.06}>
            {c.href ? (
              <Link
                href={c.href}
                className="group block h-full rounded-2xl border border-fg/10 bg-bg p-5 transition-colors hover:border-accent/40"
              >
                {inner}
              </Link>
            ) : (
              <div className="h-full rounded-2xl border border-fg/10 bg-bg p-5">
                {inner}
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
