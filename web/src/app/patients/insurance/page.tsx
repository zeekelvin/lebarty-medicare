import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";
import { assets } from "@/lib/assets";
import { site, insurance } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance & billing",
  description:
    "Lebarty Medical accepts Medicare, Medicaid Managed Care, and most major commercial plans. Insurance, self-pay rates, and billing for our Schenectady, NY practice.",
};

const billingNotes = [
  {
    title: "We verify before your visit",
    body: "Once we have your plan details, we confirm your coverage and any copay ahead of time — so you know what to expect before you walk in.",
  },
  {
    title: "Transparent self-pay rates",
    body: "No insurance? We offer clear, upfront self-pay pricing for visits, telehealth, and Suboxone treatment. Ask the office for a current rate sheet.",
  },
  {
    title: "Statements and payment plans",
    body: "We can provide an itemized statement on request, and we'll work with you on a payment plan if a balance is hard to manage all at once.",
  },
];

export default function InsurancePage() {
  return (
    <>
      <PageHero
        image={assets.pages.patients}
        imageAlt="A patient reviewing coverage details with staff at the Lebarty Medical front desk"
        eyebrow="Patients"
        title="Insurance & billing"
        intro="We accept Medicare, Medicaid Managed Care, and most major commercial plans — and we verify your benefits before your visit so there are no surprises. If your plan isn't listed, call us. We'll check."
      >
        <ButtonLink href="/contact" size="lg">
          Verify my plan
        </ButtonLink>
        <ButtonLink href="/book" size="lg" variant="secondary">
          Book a visit
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Plans accepted"
          title="Insurance we work with."
          intro="This list covers the plans we accept most often. Networks change, so we always confirm your specific coverage before your appointment."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {insurance.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-fg/10 bg-muted/60 p-5">
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 shrink-0 rounded-full bg-accent"
                />
                <span className="font-display text-lg leading-snug text-fg">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-fg/60">
            Don't see your plan? That doesn't mean we can't help. Many plans
            include out-of-network benefits, and new contracts are added
            regularly. Send us your plan name and we'll verify it before you
            book.
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Billing"
          title="Clear costs, no surprises."
          intro="Healthcare billing should be understandable. Here's how we keep it straightforward — and what to do if you're not sure where your plan fits."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {billingNotes.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-fg/10 bg-bg p-7">
                <h3 className="font-display text-xl leading-snug text-fg">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg/70">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 rounded-2xl bg-[#0b1f30] p-8 text-white sm:p-10">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
              Plan not listed?
            </p>
            <h3 className="mt-3 font-display text-2xl leading-snug text-white">
              Call the office before you book.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
              The simplest way to know exactly what your visit will cost is to
              ask. Call us with your plan name and member ID, and we'll confirm
              whether you're covered, what your copay will be, and what your
              options are if you're out of network. No commitment, no pressure.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={`tel:${site.contact.phoneTel}`} size="md">
                Call {site.contact.phoneDisplay}
              </ButtonLink>
              <ButtonLink href="/contact" size="md" variant="secondary">
                Send a message
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Questions about coverage?"
        body="We'll verify your benefits and explain your costs before you ever sit down in an exam room. Reach out and we'll take care of it."
      >
        <ButtonLink href="/contact" size="lg">
          Verify my plan
        </ButtonLink>
        <ButtonLink
          href={`tel:${site.contact.phoneTel}`}
          size="lg"
          variant="secondary"
        >
          Call {site.contact.phoneDisplay}
        </ButtonLink>
      </CTABand>
    </>
  );
}
