import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureRow } from "@/components/site/FeatureRow";
import { FAQ } from "@/components/site/FAQ";
import { CardGrid } from "@/components/site/CardGrid";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

export type ServiceContent = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage?: string;
  overviewTitle: string;
  overview: string[];
  featureImage?: string;
  expectTitle?: string;
  expect: string[];
  steps?: { title: string; body: string }[];
  faqs?: { q: string; a: string }[];
  related?: { title: string; body: string; href: string }[];
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
      aria-hidden
    >
      <path
        d="M5 10l3 3 7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Shared template for every service detail page. */
export function ServicePage(c: ServiceContent) {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro}
        image={c.heroImage}
        imageAlt={c.title}
      >
        <ButtonLink href="/book" size="lg">
          Book a visit
        </ButtonLink>
        <ButtonLink
          href={`tel:${site.contact.phoneTel}`}
          size="lg"
          variant="secondary"
        >
          Call {site.contact.phoneDisplay}
        </ButtonLink>
      </PageHero>

      <Section>
        <FeatureRow
          image={c.featureImage || ""}
          imageAlt={c.title}
          eyebrow="Overview"
          title={c.overviewTitle}
        >
          {c.overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </FeatureRow>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="What to expect"
          title={c.expectTitle || "What a visit looks like."}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {c.expect.map((b, i) => (
            <Reveal key={b} delay={i * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-fg/10 bg-bg p-4">
                <CheckIcon />
                <span className="text-sm leading-relaxed text-fg/80">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {c.steps && c.steps.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="How it works"
            title="Simple, from first call to follow-up."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {c.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-fg/10 bg-bg p-6">
                  <span className="font-display text-3xl leading-none text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-fg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/70">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {c.faqs && c.faqs.length > 0 ? (
        <Section tone="muted">
          <SectionHeading eyebrow="Common questions" title="Good to know." />
          <div className="mt-10">
            <FAQ items={c.faqs} />
          </div>
        </Section>
      ) : null}

      {c.related && c.related.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="More care" title="Related services." />
          <div className="mt-10">
            <CardGrid items={c.related} columns={3} />
          </div>
        </Section>
      ) : null}

      <CTABand
        title="Ready to be seen?"
        body="Same-week appointments for new patients, and the front desk one call away."
      >
        <ButtonLink href="/book" size="lg">
          Book a visit
        </ButtonLink>
        <ButtonLink href="/contact" size="lg" variant="secondary">
          Ask a question
        </ButtonLink>
      </CTABand>
    </>
  );
}
