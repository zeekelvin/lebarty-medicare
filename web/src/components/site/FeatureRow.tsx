import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  /** Place the image on the right instead of the left. */
  reverse?: boolean;
  /** Render a tall photo in a portrait frame, anchored to the top so faces stay in view. */
  portrait?: boolean;
};

/** A two-column image + text feature block. */
export function FeatureRow({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  reverse,
  portrait,
}: Props) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cn(reverse && "lg:order-2")}>
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-fg/10 bg-muted",
            portrait ? "aspect-[3/4] max-w-md" : "aspect-[4/3]",
          )}
        >
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn(
                "object-cover",
                portrait ? "object-top" : "object-center",
              )}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c7b79]/20 to-[#f21872]/15" />
          )}
        </div>
      </Reveal>
      <Reveal delay={0.1} className={cn(reverse && "lg:order-1")}>
        <div>
          {eyebrow ? (
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="mt-3 font-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.12] tracking-tight text-fg">
            {title}
          </h3>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-fg/75">
            {children}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
