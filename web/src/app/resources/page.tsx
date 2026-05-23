import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CardGrid } from "@/components/site/CardGrid";
import { CTABand } from "@/components/site/CTABand";
import { assets } from "@/lib/assets";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources & health education",
  description:
    "Plain-language guides from Dr. Lebarty on preparing for a visit, Suboxone treatment, telehealth, USCIS immigration exams, insurance, and more.",
};

const resources = [
  {
    eyebrow: "Before your visit",
    title: "What to expect at your first visit",
    body: "A walk-through of your first appointment — what to bring, how long it takes, and how we build your care plan together.",
    href: "/patients",
  },
  {
    eyebrow: "Addiction medicine",
    title: "Understanding Suboxone treatment",
    body: "How buprenorphine works for opioid use disorder, what the first weeks look like, and why person-first care matters.",
    href: "/services/addiction-medicine",
  },
  {
    eyebrow: "Telehealth",
    title: "Tips for a smooth telehealth visit",
    body: "Simple ways to prepare — checking your connection, finding a quiet space, and having your medication list nearby.",
    href: "/services/telehealth",
  },
  {
    eyebrow: "Immigration exams",
    title: "USCIS civil surgeon exam checklist",
    body: "Exactly what to bring to your I-693 medical exam — vaccination records, ID, and forms — so it's done in one visit.",
    href: "/services/civil-surgeon-uscis-exams",
  },
  {
    eyebrow: "Coverage",
    title: "Insurance plans we accept",
    body: "Medicare, Medicaid Managed Care, and major commercial plans — plus what to do if your plan isn't on the list.",
    href: "/patients/insurance",
  },
  {
    eyebrow: "Preventive care",
    title: "Why annual physicals matter",
    body: "What a yearly check-up covers, the screenings tied to your age, and how prevention keeps small issues small.",
    href: "/services/preventive-care",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        image={assets.pages.resources}
        imageAlt="A patient reading health information in a calm, sunlit waiting area"
        eyebrow="Resources"
        title="Plain-language medicine."
        intro="Guides written or reviewed by Dr. Lebarty to help you make sense of your care, your options, and your insurance — without the medical jargon. Start with the topics below."
      >
        <ButtonLink href="/book" size="lg">
          Book a visit
        </ButtonLink>
        <ButtonLink href="/contact" size="lg" variant="secondary">
          Ask a question
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Start here"
          title="Helpful reading for every patient."
          intro="Whether you're preparing for a first appointment or weighing your treatment options, these guides explain the essentials clearly. More articles are added as the practice grows."
        />
        <div className="mt-12">
          <CardGrid columns={3} items={resources} />
        </div>
      </Section>

      <CTABand
        title="Still have questions?"
        body="Reading only goes so far. When you're ready to talk it through, book a visit or call the office — a real person is here to help."
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
