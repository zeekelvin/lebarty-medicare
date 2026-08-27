import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CardGrid } from "@/components/site/CardGrid";
import { CTABand } from "@/components/site/CTABand";
import { assets } from "@/lib/assets";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "General medicine, internal medicine, pediatrics, emergency services, laboratory, eye clinic, pharmacy, imaging, and ambulance services, all under one roof in Benin City, Edo State.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a hospital should be."
        intro="Whether you are coming in for a physical, starting Suboxone, joining a video visit, or getting lab work done, your care stays in one chart with one team. No handoffs, no starting over. Just continuous care built around your life."
        image={assets.pages.servicesHero}
        imageAlt="Dr. Lebarty meeting with a patient in a bright, calm exam room"
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
        <SectionHeading
          eyebrow="Our care"
          title="All services. One team."
          intro="Delivered by our board-certified physicians and clinical team, these services cover most of what a household needs from a hospital, coordinated under a single plan of care."
        />
        <div className="mt-12">
          <CardGrid
            columns={3}
            items={services.map((s) => ({
              title: s.title,
              body: s.description,
              href: `/services/${s.slug}`,
              image: assets.services[s.slug],
              eyebrow: s.eyebrow,
            }))}
          />
        </div>
      </Section>

      <CTABand
        title="Not sure which visit you need?"
        body="Tell us what is going on and we will point you to the right kind of appointment. New patients are usually seen within a week."
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
