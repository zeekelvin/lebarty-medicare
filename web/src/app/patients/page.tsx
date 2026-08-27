import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CardGrid } from "@/components/site/CardGrid";
import { CTABand } from "@/components/site/CTABand";
import { assets } from "@/lib/assets";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patients — what to know before your visit",
  description:
    "New-patient information, what to bring, intake forms, and the patient portal for Lebarty Medicare Hospital in Benin City, Edo State.",
};

const whatToBring = [
  {
    title: "A photo ID",
    body: "A driver's license, state ID, or passport: anything that confirms your name and date of birth.",
  },
  {
    title: "Your HMO or insurance details",
    body: "If you have an HMO or insurance plan, bring the details along. The front desk confirms your cover before the visit so there are no surprises.",
  },
  {
    title: "A current medication list",
    body: "Include prescriptions, over-the-counter medicines, vitamins, and supplements, with names and doses if you have them.",
  },
  {
    title: "Records from past care",
    body: "Recent lab results, imaging, or notes from another physician help us pick up exactly where your last care left off.",
  },
  {
    title: "Your questions",
    body: "Write down anything on your mind before you arrive. The visit is yours, and nothing is too small to ask about.",
  },
  {
    title: "An emergency contact",
    body: "The name and phone number of someone we can reach if we ever need to. It takes a minute and matters when it matters.",
  },
];

const steps = [
  {
    eyebrow: "Step one",
    title: "Reach out",
    body: "Book online or call the office. Tell us a little about what you need and whether you'd prefer an in-person or telehealth visit.",
  },
  {
    eyebrow: "Step two",
    title: "Complete your intake",
    body: "We'll send you intake forms to fill out securely before the visit. Prefer paper? Print them at home or arrive a few minutes early.",
  },
  {
    eyebrow: "Step three",
    title: "Meet your physician",
    body: "Most new patients are seen within seven days. Your first visit is unhurried: time to talk through your history and build a plan.",
  },
];

export default function PatientsPage() {
  return (
    <>
      <PageHero
        image={assets.pages.patients}
        imageAlt="A patient checking in at the welcoming front desk of Lebarty Medicare"
        eyebrow="Patients"
        title="Everything you need before your first visit."
        intro="Whether you're new to the hospital, returning after time away, or booking a telehealth visit from home, we've gathered the practical details in one calm place, so the only thing you have to focus on is your health."
      >
        <ButtonLink href="/book" size="lg">
          Book a visit
        </ButtonLink>
        <ButtonLink href="/patients/insurance" size="lg" variant="secondary">
          Payment &amp; billing
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Before you arrive"
          title="What to bring to a first visit."
          intro="A little preparation makes your first appointment smoother. None of it is required to be seen. Bring what you can, and we'll help with the rest."
        />
        <div className="mt-12">
          <CardGrid
            columns={3}
            items={whatToBring.map((c) => ({ title: c.title, body: c.body }))}
          />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="New patients"
          title="Three simple steps to your first appointment."
          intro="We hold dedicated new-patient slots every week. From the first call to the exam room, here's exactly what to expect."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-fg/10 bg-bg p-7">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                  {s.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug text-fg">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg/70">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="rounded-2xl border border-fg/10 bg-muted/60 p-8 sm:p-10">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                Patient portal
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-fg">
                Your care, online and secure.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-fg/75">
                The patient portal is the fastest way to stay connected between
                visits. From any device you can:
              </p>
              <ul className="mt-5 space-y-2 text-sm text-fg/75">
                <li className="flex gap-3">
                  <span aria-hidden className="text-accent">&bull;</span>
                  Message your care team securely
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-accent">&bull;</span>
                  Request prescription refills
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-accent">&bull;</span>
                  Review lab results and visit summaries
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-accent">&bull;</span>
                  Update your contact and insurance details
                </li>
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-fg/60">
                Portal access is set up at your first visit. Need help signing
                in? Call the office and we'll walk you through it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-fg/10 bg-bg p-8 sm:p-10">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                Intake &amp; forms
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-fg">
                Paperwork, done before you arrive.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-fg/75">
                We'll send your intake forms ahead of time so your first visit
                can be spent talking, not filling out clipboards. You can
                complete them digitally through the portal, or print and bring
                them with you.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg/75">
                Intake covers your medical history, current medications,
                allergies, and the reason for your visit. If anything is
                unclear, leave it blank and we'll finish it together.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-fg/60">
                Questions about forms or what to expect? Reach the office and a
                real person will help.
              </p>
              <ButtonLink href="/contact" variant="secondary" className="mt-6">
                Contact the office
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                Payment &amp; billing
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.1] tracking-tight text-fg">
                Coverage you can count on, costs you can see clearly.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg/70">
                Pay by cash, card, or bank transfer, or with a prepaid care
                package. Using an HMO or insurance plan? The front desk
                confirms your cover before the visit. See all payment options
                and our billing details.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <Link
              href="/patients/insurance"
              className="group block rounded-2xl border border-fg/10 bg-bg p-7 transition-colors hover:border-accent/40"
            >
              <p className="font-display text-xl text-fg">
                Payment &amp; billing
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fg/70">
                Accepted plans, self-pay rates, and what to do if your plan
                isn't listed.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-accent">
                View payment &amp; billing &rarr;
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Ready to become a patient?"
        body="New patients are usually seen within a week. Book online or call the office and we'll find a time that works for you."
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
      </CTABand>
    </>
  );
}
