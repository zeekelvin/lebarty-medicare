import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureRow } from "@/components/site/FeatureRow";
import { CardGrid } from "@/components/site/CardGrid";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";
import { assets } from "@/lib/assets";
import { site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Lebarty Medicare Hospital",
  description:
    "Lebarty Medicare Hospital in Benin City, Edo State: modern medicine, one team, one chart. Founded by Dr. Nosa Lebarty, board-certified in family medicine, alongside the Lebarty Community Health Foundation.",
};

const specialties = [
  {
    eyebrow: "Whole-person care",
    title: "Family Medicine",
    body: "Care for every age and stage: physicals, chronic-condition management, and the long relationship that makes both possible.",
  },
  {
    eyebrow: "Healing without judgment",
    title: "Addiction Medicine",
    body: "Suboxone (buprenorphine) and medication-assisted treatment for opioid use disorder, delivered with respect and never a lecture.",
  },
  {
    eyebrow: "In the hospital",
    title: "Hospitalist Medicine",
    body: "Inpatient experience that informs how Dr. Lebarty manages complex and acute conditions in the clinic.",
  },
  {
    eyebrow: "Adult medicine",
    title: "Internal Medicine",
    body: "A deep grounding in the diagnosis and management of adult disease, from blood pressure to diabetes to heart health.",
  },
  {
    eyebrow: "For our oldest neighbors",
    title: "Geriatric & Nursing-Home Care",
    body: "On-site and telehealth rounds at skilled nursing facilities across Benin City and surrounding communities, bringing the doctor to the patient.",
  },
];

const training = [
  {
    title: "Residency, Family Medicine",
    detail: "Ellis Hospital, Schenectady, NY, where Dr. Lebarty trained and chose to stay and serve.",
  },
  {
    title: "Board Certification",
    detail: "Certified by the American Board of Family Medicine.",
  },
];

export default function DrLebartyPage() {
  return (
    <>
      <PageHero
        image="/hero/slide-3.jpg"
        imageAlt="The Lebarty Medicare Hospital building in Benin City"
        eyebrow="About Lebarty Medicare Hospital"
        title={
          <>
            {site.location.name}
            <span className="mt-2 block font-display text-[0.6em] italic text-brand">
              Your Health, Our Mission.
            </span>
          </>
        }
        intro="A hospital in Benin City, Edo State, built on a simple conviction: excellent care should never feel out of reach. Modern medicine and an attentive team, working from one chart toward one plan, with every visit helping fund the Lebarty Community Health Foundation's clinics across Africa."
      >
        <ButtonLink href="/book" size="lg">
          Book a visit
        </ButtonLink>
        <ButtonLink href="/services" variant="secondary" size="lg">
          Our services
        </ButtonLink>
      </PageHero>

      <Section>
        <FeatureRow
          image={assets.drLebarty}
          imageAlt="Portrait of Dr. Nosa Lebarty"
          eyebrow="Founder & physician"
          title="A doctor who keeps showing up."
        >
          <p>
            Dr. Lebarty trained at Ellis Hospital in Schenectady and went on to
            build a career that refuses to specialize past the patient: seeing
            primary-care patients in clinic, treating opioid use disorder with
            Suboxone, rounding at skilled nursing facilities, teaching medical
            students, and serving as a medical director in county government
            before founding Lebarty Medicare Hospital in Benin City.
          </p>
          <p>
            That breadth isn&rsquo;t a r&eacute;sum&eacute;. It&rsquo;s a
            perspective. The same hands sign a child&rsquo;s vaccination record,
            counsel someone on day one of
            recovery, and help pull together a clinic in a rural village. The
            unifying belief is plain: every person, wherever they are, deserves
            a competent, unhurried doctor.
          </p>
          <p>
            For his patients, that means a physician who knows their history,
            answers the phone, and treats every visit as part of one continuous
            relationship, not a transaction measured in minutes.
          </p>
        </FeatureRow>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Specialties"
          title="One physician, many kinds of care."
          intro="The work spans the clinic, the nursing home, and the recovery visit, held together by continuity and respect for the person in front of him."
        />
        <div className="mt-12">
          <CardGrid items={specialties} columns={3} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The team"
          title="One team around every patient."
          intro="Care at Lebarty Medicare Hospital is a team effort: doctors, nurses, laboratory scientists, and support staff working from one chart toward one plan."
        />
        <div className="mt-12">
          <CardGrid items={[...team]} columns={2} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Education & training"
              title="Trained here. Rooted here."
              intro="Dr. Lebarty&rsquo;s credentials trace a path from residency in Schenectady to a practice that serves the same community decades on."
            />
            <ul className="mt-10 space-y-6">
              {training.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.06}>
                  <li className="border-l-2 border-accent/30 pl-5">
                    <p className="font-display text-lg text-fg">{t.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg/70">
                      {t.detail}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-brand/20 bg-brand/[0.06] p-8 sm:p-10">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-warm">
                A note on addiction medicine
              </p>
              <h3 className="mt-4 font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-tight text-fg">
                There is no judgment here.
              </h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-fg/75">
                <p>
                  Treating substance use disorder is some of the most meaningful
                  work Dr. Lebarty does. Suboxone (buprenorphine) and
                  medication-assisted treatment work, and they work even better
                  when the person prescribing them treats you like a person.
                </p>
                <p>
                  There are no lectures here, and no gatekeeping. If you&rsquo;re
                  considering recovery, walk in or send a message. You&rsquo;ll
                  be met with respect, and care can often begin the same week.
                </p>
              </div>
              <ButtonLink
                href="/services/addiction-medicine"
                variant="accent"
                size="md"
                className="mt-7"
              >
                Explore addiction medicine
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Credentials & appointments"
          title="Recognized, credentialed, committed."
          intro="Beyond the clinic, Dr. Lebarty holds appointments that extend his care into county health, correctional medicine, medical education, and global outreach."
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {site.founder.credentials.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <li className="flex items-start gap-3 rounded-xl border border-white/12 bg-white/[0.04] p-5">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand"
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
                <span className="text-sm leading-relaxed text-white/85">{c}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CTABand
        title="Care that knows your name."
        body="New patients are welcome at Lebarty Medicare. Book an in-person visit in Benin City, or start with a secure telehealth appointment from wherever you are."
      >
        <ButtonLink href="/book" size="lg">
          Book with Dr. Lebarty
        </ButtonLink>
        <ButtonLink href="/services/telehealth" variant="secondary" size="lg">
          Telehealth visit
        </ButtonLink>
      </CTABand>
    </>
  );
}
