import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";
import { cn } from "@/lib/cn";
import { assets } from "@/lib/assets";
import {
  carePackageIncludesLabel,
  carePackages,
  carePackagesDisclaimer,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Care packages",
  description:
    "Prepaid check-up bundles at Lebarty Medicare Hospital in Benin City: Silver, Gold, and Elite tiers with a fixed list of consultations, tests, and scans.",
  alternates: { canonical: "/care-packages" },
};

export default function CarePackagesPage() {
  return (
    <>
      <PageHero
        image={assets.pages.preventiveCare}
        imageAlt="A clinician reviewing check-up results with a patient at Lebarty Medicare Hospital"
        eyebrow="Care packages"
        title="Your whole check-up, in one bundle."
        intro="Prepaid service bundles, straightforward products with a fixed list of consultations, tests, and scans. Not an insurance plan: you pay once, and you know exactly what's included before you walk in."
      >
        <ButtonLink href="/book" size="lg">
          Book a package
        </ButtonLink>
        <ButtonLink href="/contact" size="lg" variant="secondary">
          Ask a question
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {carePackages.map((pkg, i) => {
            const featured = pkg.featured;
            return (
              <Reveal key={pkg.slug} delay={i * 0.08}>
                <div
                  id={pkg.slug}
                  className={cn(
                    "flex h-full flex-col rounded-2xl border bg-bg p-8 scroll-mt-28",
                    featured
                      ? "border-accent shadow-[0_18px_50px_-24px_rgba(12,123,121,0.45)]"
                      : "border-fg/10",
                  )}
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                    {pkg.name}
                  </p>
                  <h2 className="mt-3 font-display text-2xl leading-snug tracking-tight text-fg">
                    {pkg.tagline}
                  </h2>
                  <p className="mt-4 text-sm font-medium text-fg/60">
                    {pkg.price}
                  </p>

                  <div className="mt-6 border-t border-fg/10 pt-6">
                    <p className="mb-4 text-sm font-medium text-fg">
                      {carePackageIncludesLabel(pkg)}:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-fg/75"
                        >
                          <Check
                            size={16}
                            strokeWidth={2.2}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8">
                    <ButtonLink
                      href="/book"
                      size="md"
                      variant={featured ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Book the {pkg.name} package
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-fg/55">
            {carePackagesDisclaimer} Call{" "}
            <a
              href={`tel:${site.contact.phoneTel}`}
              className="text-accent underline underline-offset-2"
            >
              {site.contact.phoneDisplay}
            </a>{" "}
            with any questions.
          </p>
        </Reveal>
      </Section>

      <CTABand
        title="Not sure which package fits?"
        body="Tell us a little about your health goals and the team will point you to the right tier. No pressure, no jargon."
      >
        <ButtonLink href="/contact" size="lg">
          Talk to the team
        </ButtonLink>
        <ButtonLink
          href="/book"
          size="lg"
          variant="secondary"
        >
          Book a visit
        </ButtonLink>
      </CTABand>
    </>
  );
}
