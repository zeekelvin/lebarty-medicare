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
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dr. Nosa Lebarty — physician, civil surgeon, founder",
  description:
    "Dr. Nosa Lebarty is the founding physician of Lebarty Medicare Hospital and the Lebarty Community Health Foundation — board-certified in family medicine, a USCIS-designated civil surgeon, and faculty at Albany Medical College.",
};

const specialties = [
  {
    eyebrow: "Whole-person care",
    title: "Family Medicine",
    body: "Care for every age and stage — physicals, chronic-condition management, and the long relationship that makes both possible.",
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
    body: "On-site and telehealth rounds at skilled nursing facilities across the Capital Region — bringing the doctor to the patient.",
  },
  {
    eyebrow: "Designated by USCIS",
    title: "Civil Surgeon Exams",
    body: "I-693 immigration medical examinations for adjustment-of-status applicants, completed correctly the first time.",
  },
];

const training = [
  {
    title: "Residency, Family Medicine",
    detail: "Ellis Hospital, Schenectady, NY — where Dr. Lebarty trained and chose to stay and serve.",
  },
  {
    title: "Board Certification",
    detail: "Certified by the American Board of Family Medicine.",
  },
  {
    title: "Civil Surgeon Designation",
    detail: "Designated by U.S. Citizenship and Immigration Services to perform immigration medical exams.",
  },
];

export default function DrLebartyPage() {
  return (
    <>
      <PageHero
        image={assets.pages.aboutTeaching}
        imageAlt="Dr. Nosa Lebarty teaching medical students at Albany Medical College"
        eyebrow="Meet your physician"
        title={
          <>
            {site.founder.name}
            <span className="mt-2 block font-display text-[0.6em] italic text-brand">
              Physician, civil surgeon, founder.
            </span>
          </>
        }
        intro="Board-certified in family medicine, a USCIS-designated civil surgeon, medical director for two arms of Albany County government, and faculty at Albany Medical College — Dr. Lebarty built Lebarty Medicare Hospital in Benin City and the Lebarty Community Health Foundation to bring unhurried, competent care to everyone he can reach."
      >
        <ButtonLink href="/book" size="lg">
          Book a visit
        </ButtonLink>
        <ButtonLink href="/services/telehealth" variant="secondary" size="lg">
          Telehealth visit
        </ButtonLink>
      </PageHero>

      <Section>
        <FeatureRow
          image={assets.drLebarty}
          imageAlt="Portrait of Dr. Nosa Lebarty"
          eyebrow="The doctor behind the practice"
          title="A doctor who keeps showing up."
        >
          <p>
            Dr. Lebarty trained at Ellis Hospital in Schenectady and went on to
            build a practice that refuses to specialize past the patient. He
            sees primary-care patients in clinic, treats opioid use disorder
            with Suboxone, rounds at skilled nursing facilities across the
            Capital Region, performs USCIS civil surgeon exams, teaches medical
            students at Albany Med, and serves as a medical director for two
            arms of Albany County government.
          </p>
          <p>
            That breadth isn&rsquo;t a r&eacute;sum&eacute; — it&rsquo;s a
            perspective. The same hands sign a child&rsquo;s vaccination record,
            examine a green-card applicant, counsel someone on day one of
            recovery, and help pull together a clinic in a rural village. The
            unifying belief is plain: every person, wherever they are, deserves
            a competent, unhurried doctor.
          </p>
          <p>
            For his patients, that means a physician who knows their history,
            answers the phone, and treats every visit as part of one continuous
            relationship — not a transaction measured in minutes.
          </p>
        </FeatureRow>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Specialties"
          title="One physician, many kinds of care."
          intro="The work spans the clinic, the nursing home, the immigration exam room, and the recovery visit — held together by continuity and respect for the person in front of him."
        />
        <div className="mt-12">
          <CardGrid items={specialties} columns={3} />
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
                  medication-assisted treatment work — and they work even better
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
          title="Recognized across the Capital Region."
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
