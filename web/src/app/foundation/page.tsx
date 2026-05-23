import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CardGrid } from "@/components/site/CardGrid";
import { StatStrip } from "@/components/site/StatStrip";
import { CTABand } from "@/components/site/CTABand";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Lebarty Community Health Foundation — clinics across Africa",
  description:
    "The Lebarty Community Health Foundation builds, supplies, and staffs community health clinics in under-served villages across Africa. Founded by Dr. Nosa Lebarty.",
};

const programs = [
  {
    eyebrow: "Program one",
    title: "Village Clinics",
    body: "We build, supply, and staff small community clinics in rural villages where the nearest hospital is hours away. Each one carries primary care, prenatal services, and basic emergency response.",
    image: assets.foundationPrograms["village-clinics"],
  },
  {
    eyebrow: "Program two",
    title: "Mobile Outreach",
    body: "Teams of physicians, nurses, and community health workers bring medicine, vaccinations, and screenings directly to communities that haven't seen a doctor in a year — sometimes longer.",
    image: assets.foundationPrograms["mobile-outreach"],
  },
  {
    eyebrow: "Program three",
    title: "Maternal & Child Health",
    body: "Prenatal visits, safe deliveries, and pediatric care address some of the most preventable losses in global health. We fund the supplies and the trained hands that make them safe.",
    image: assets.foundationPrograms["maternal-child-health"],
  },
  {
    eyebrow: "Program four",
    title: "Medical Education",
    body: "We sponsor local nurses and community health workers through training, then equip them to lead the next clinic — the long, lasting way to make our own work unnecessary.",
    image: assets.foundationPrograms["medical-education"],
  },
];

const impact = [
  { figure: "12+", label: "Communities served" },
  { figure: "4", label: "Countries reached" },
  { figure: "6,400+", label: "Patient encounters" },
  { figure: "100%", label: "Of donations to programs" },
];

export default function FoundationPage() {
  return (
    <>
      <PageHero
        image={assets.foundationStill}
        imageAlt="A community health worker greeting patients outside a village clinic"
        eyebrow="Lebarty Community Health Foundation"
        title={
          <>
            Care here.
            <span className="block italic text-brand">Clinics there.</span>
          </>
        }
        intro="Founded by Dr. Nosa Lebarty, the Foundation is a humanitarian extension of his clinical practice — building community health clinics in under-served villages across Africa, supplying them with the medicine and equipment they need, and training the local health workers who keep them running."
      >
        <ButtonLink href="/foundation/donate" size="lg">
          Donate
        </ButtonLink>
        <ButtonLink href="#programs" variant="secondary" size="lg">
          See programs
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Our mission"
            title="A doctor's promise, extended past the clinic walls."
          />
          <div className="space-y-5 text-base leading-relaxed text-fg/75">
            <p>
              The same belief that shapes every visit in Schenectady — that
              every person deserves a competent, unhurried doctor — does not
              stop at a city limit or a national border. The Lebarty Community
              Health Foundation carries that promise to the places where care
              is hardest to reach.
            </p>
            <p>
              We focus on the most preventable causes of death in the
              communities we serve: infectious disease, maternal mortality, and
              untreated chronic conditions. And we build local capacity — the
              clinics, the supplies, and the trained health workers — that can
              outlast any single visit from us.
            </p>
            <p>
              Patient care at the practice and the generosity of donors fund
              this work. Every dollar given goes to a program.
            </p>
          </div>
        </div>
      </Section>

      <Section id="programs" tone="muted">
        <SectionHeading
          eyebrow="Programs"
          title="Four ways the Foundation works."
          intro="Each program tackles a different gap in care — but all of them are built to leave something behind that keeps working after the team has gone."
        />
        <div className="mt-12">
          <CardGrid items={programs} columns={2} />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Impact to date"
          title="By the numbers."
          intro="A snapshot of the Foundation's reach. These figures are placeholders and will be replaced with the Foundation's verified totals during the content pass."
        />
        <div className="mt-12">
          <StatStrip items={impact} tone="dark" />
        </div>
      </Section>

      <CTABand
        title="You can help build the next clinic."
        body="The Foundation runs on regular donors and volunteers — physicians, nurses, students, and community members. Whether you have $5 a month or two weeks of vacation, there is a place for you."
      >
        <ButtonLink href="/foundation/donate" size="lg">
          Donate
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary" size="lg">
          Volunteer with us
        </ButtonLink>
      </CTABand>
    </>
  );
}
