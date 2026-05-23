import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";
import { DonationForm } from "@/components/donate/DonationForm";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Donate to the Lebarty Community Health Foundation",
  description:
    "Your gift funds village clinics, mobile outreach, maternal and child health, and local medical training across Africa. 100% of donations go to programs.",
};

const impactExamples = [
  { amount: "$25", does: "A month of antibiotics for a village clinic." },
  { amount: "$50", does: "Prenatal visits for one expectant mother." },
  { amount: "$100", does: "Vaccinations for ten children." },
  { amount: "$250", does: "Two days of mobile outreach in the field." },
  { amount: "$1,000", does: "A month of operations for a village clinic." },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        image={assets.foundationPrograms["village-clinics"]}
        imageAlt="Inside a Foundation-supported village clinic"
        eyebrow="Support the Foundation"
        title={
          <>
            Make medicine reach
            <span className="block italic text-brand">further.</span>
          </>
        }
        intro="Your donation funds the Lebarty Community Health Foundation's clinics, outreach teams, and training programs across Africa. One-time or recurring, designated or general — every dollar goes to the work."
      >
        <ButtonLink href="/foundation" variant="secondary" size="lg">
          See our programs
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <DonationForm />
          </div>

          <aside className="space-y-8 lg:col-span-5">
            <Reveal>
              <div className="rounded-2xl border border-fg/10 bg-muted p-7 sm:p-8">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Where your gift goes
                </p>
                <h2 className="mt-4 font-display text-2xl leading-tight text-fg">
                  Every gift is a specific thing.
                </h2>
                <ul className="mt-6 space-y-4">
                  {impactExamples.map((i) => (
                    <li
                      key={i.amount}
                      className="flex items-start gap-4 border-b border-fg/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-display text-xl text-warm">
                        {i.amount}
                      </span>
                      <span className="text-sm leading-relaxed text-fg/75">
                        {i.does}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-fg/10 bg-bg p-7 sm:p-8">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Tax-deductible giving
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fg/75">
                  The Lebarty Community Health Foundation is a registered
                  501(c)(3) nonprofit. Donations are tax-deductible to the
                  fullest extent allowed by law. You&rsquo;ll receive an emailed
                  receipt immediately after your gift, plus an annual summary
                  every January.
                </p>
                <p className="mt-3 text-xs text-fg/55">
                  EIN and NY Charities Bureau registration are listed in the
                  Foundation&rsquo;s annual report.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-2xl bg-[#0b1f30] p-7 text-white sm:p-8">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
                  Other ways to give
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/80">
                  <li>Donor-advised fund recommendations</li>
                  <li>Stock and securities transfers</li>
                  <li>Employer matching gifts</li>
                  <li>Estate &amp; planned giving</li>
                  <li>In-kind medical supplies</li>
                </ul>
                <p className="mt-5 text-sm text-white/65">
                  Email{" "}
                  <a
                    href="mailto:foundation@lebartymedical.com"
                    className="text-brand underline underline-offset-2"
                  >
                    foundation@lebartymedical.com
                  </a>{" "}
                  to coordinate.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <CTABand
        title="Care, wherever it's needed most."
        body="Prefer to give your time? The Foundation welcomes physicians, nurses, students, and community members on its outreach teams."
      >
        <ButtonLink href="/contact" size="lg">
          Volunteer with us
        </ButtonLink>
        <ButtonLink href="/foundation" variant="secondary" size="lg">
          About the Foundation
        </ButtonLink>
      </CTABand>
    </>
  );
}
