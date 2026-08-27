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
    "Plain-language guides on preparing for a visit, understanding your prescriptions, check-ups, lab tests, payment options, and more.",
};

const resources = [
  {
    eyebrow: "Before your visit",
    title: "What to expect at your first visit",
    body: "A walk-through of your first appointment: what to bring, how long it takes, and how we build your care plan together.",
    href: "/patients",
  },
  {
    eyebrow: "Pharmacy",
    title: "Understanding your prescriptions",
    body: "How to read your prescription, take your medicines safely, and what to ask the pharmacist before you head home.",
    href: "/services/pharmacy",
  },
  {
    eyebrow: "Booking",
    title: "Tips for a smooth telehealth visit",
    body: "Requested a telehealth visit? Simple ways to prepare: checking your connection, finding a quiet space, and having your medication list nearby.",
    href: "/book",
  },
  {
    eyebrow: "Laboratory",
    title: "Preparing for a lab test",
    body: "What to bring, when to fast, and how results reach you, so your visit to the laboratory is quick and useful.",
    href: "/services/laboratory",
  },
  {
    eyebrow: "Payment",
    title: "Ways to pay",
    body: "Cash, card, bank transfer, and prepaid care packages, plus how to confirm HMO or insurance cover with the front desk.",
    href: "/patients/insurance",
  },
  {
    eyebrow: "Check-ups",
    title: "Why regular check-ups matter",
    body: "What a check-up covers, the screenings that fit your age, and how catching small issues early keeps them small.",
    href: "/services/general-medicine",
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
        intro="Guides written or reviewed by Dr. Lebarty to help you make sense of your care, your options, and your insurance, without the medical jargon. Start with the topics below."
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
        body="Reading only goes so far. When you're ready to talk it through, book a visit or call the office. A real person is here to help."
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
