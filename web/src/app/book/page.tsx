import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CardGrid } from "@/components/site/CardGrid";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";
import { assets } from "@/lib/assets";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a visit",
  description:
    "Schedule a visit at Lebarty Medicare Hospital: primary care, addiction medicine, telehealth, and laboratory services in Benin City, Edo State. Same-week appointments for new patients.",
};

const bookingWays = [
  {
    eyebrow: "The fastest way",
    title: "Call us",
    body: `Reach the front desk at ${site.contact.phoneDisplay}, Monday through Friday, 8 AM to 6 PM WAT. A real person will find you a time, and most new patients are seen within a week.`,
  },
  {
    eyebrow: "From anywhere",
    title: "Request a telehealth visit",
    body: "Prefer a secure video visit? Tell us when you would like to be seen and we will set up a telehealth appointment, available most weekday evenings.",
  },
  {
    eyebrow: "In our office",
    title: "Come in person",
    body: `Visit us at ${site.location.street}, ${site.location.city}. In-person visits are ideal for physicals, lab tests, vaccinations, and check-up packages.`,
  },
];

const firstVisitItems = [
  "A photo ID and any HMO or insurance details",
  "A list of current medications, including doses",
  "Names and contact details for any other doctors you see",
  "Recent lab results or records, if you have them",
  "Any questions or concerns you would like to discuss",
];

export default function BookPage() {
  return (
    <>
      <PageHero
        image={assets.pages.contact}
        imageAlt="A patient checking in at the welcoming Lebarty Medicare front desk"
        eyebrow="Book a visit"
        title="Pick a time that fits."
        intro="Same-week appointments for new patients. Existing patients usually find a slot within two to three days. Telehealth is available most weekday evenings."
      >
        <ButtonLink href={`tel:${site.contact.phoneTel}`} size="lg">
          Call {site.contact.phoneDisplay}
        </ButtonLink>
        <ButtonLink href="/contact" size="lg" variant="secondary">
          Send a request
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Three ways to book"
          title="Whatever is easiest for you."
          intro="There is no wrong way to reach us. Choose the option that suits you and we will take care of the rest."
        />
        <div className="mt-12">
          <CardGrid columns={3} items={bookingWays} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Your first appointment"
            title="What to bring with you."
            intro="A little preparation helps us make the most of your visit. If you cannot find something on this list, come anyway and we will sort it out together."
          />
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {firstVisitItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-semibold text-accent"
                  >
                    &#10003;
                  </span>
                  <span className="text-base leading-relaxed text-fg/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Online scheduling"
          title="Self-service booking is on the way."
          intro="We are setting up online scheduling so you can pick a time yourself, day or night. Until it is live, calling or sending a request is the quickest path to an appointment."
        />
        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-2xl border border-dashed border-fg/20 bg-muted/50 p-10 text-center sm:p-14">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              Scheduling widget
            </p>
            <p className="mx-auto mt-4 max-w-lg font-display text-xl leading-snug text-fg sm:text-2xl">
              An online booking calendar will appear here once the practice
              scheduling account is connected.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-fg/65">
              In the meantime, call us or send a request and we will book you
              within one business day.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ButtonLink href={`tel:${site.contact.phoneTel}`} size="md">
                Call to book
              </ButtonLink>
              <ButtonLink href="/contact" size="md" variant="secondary">
                Send a request
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Ready when you are."
        body="Whether it is your first visit or your fiftieth, you will see the same physician and stay on the same plan of care."
      >
        <ButtonLink href={`tel:${site.contact.phoneTel}`} size="lg">
          Call {site.contact.phoneDisplay}
        </ButtonLink>
        <ButtonLink href="/services" size="lg" variant="secondary">
          Explore our services
        </ButtonLink>
      </CTABand>
    </>
  );
}
