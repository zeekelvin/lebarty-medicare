import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export default function NotFound() {
  return (
    <Section className="border-t-0">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
          Error 404
        </p>
        <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] tracking-tight text-fg">
          We couldn&rsquo;t find that page.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-fg/70 sm:text-lg">
          The link may be old, or we may have moved something. Let&rsquo;s get
          you back to somewhere useful.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
