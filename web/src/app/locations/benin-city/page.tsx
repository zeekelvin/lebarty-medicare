import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureRow } from "@/components/site/FeatureRow";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";
import { assets } from "@/lib/assets";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Benin City location & hours",
  description:
    "Lebarty Medicare Hospital is located along Ugo Ben Road, by Festus Ajayi Junction, Irhirhi Road, Aruogba Community, off Airport Road, Benin City, Edo State. Hours, directions, parking, and accessibility.",
};

const accessibility = [
  "Step-free entrance and exam rooms",
  "Accessible parking adjacent to the entrance",
  "ASL interpreters available with advance notice",
  "Spanish, French, and Edo speakers on staff",
];

export default function BeninCityLocationPage() {
  const { location } = site;

  return (
    <>
      <PageHero
        image={assets.pages.locationExterior}
        imageAlt="The exterior of Lebarty Medicare Hospital in Benin City, Edo State"
        eyebrow="Visit us"
        title="Our Benin City hospital."
        intro="Find us along Ugo Ben Road, by Festus Ajayi Junction, Irhirhi Road — in Aruogba Community, off Airport Road. Free on-site parking and a calm, welcoming entrance built for a low-key visit. Can't make it in today? Telehealth is available."
      >
        <ButtonLink href="/book" size="lg">
          Book a visit
        </ButtonLink>
        <ButtonLink href="/contact" size="lg" variant="secondary">
          Contact the office
        </ButtonLink>
      </PageHero>

      <Section>
        <FeatureRow
          image={assets.pages.locationInterior}
          imageAlt="The bright, calm waiting area inside the Lebarty Medicare Hospital"
          eyebrow="Inside the clinic"
          title="A quiet, unhurried place to be cared for."
        >
          <p>
            The Benin City office was designed to feel less like a busy clinic
            and more like a place to breathe. Natural light, comfortable
            seating, and private exam rooms set the tone for the kind of care
            we believe in — continuity over minutes-per-visit.
          </p>
          <p>
            Whether you're here for an annual physical, ongoing primary care, a
            USCIS civil surgeon exam, or addiction medicine, you'll see the same
            physician each time, working from the same chart. Telehealth visits
            connect to that same continuity from wherever you are.
          </p>
        </FeatureRow>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Plan your visit"
          title="Address, hours, and how to find us."
          intro="Everything you need to get here with confidence. If anything is unclear, the office is happy to talk you through directions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-fg/10 bg-bg p-7 sm:p-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                Address
              </p>
              <address className="mt-3 not-italic font-display text-xl leading-snug text-fg">
                {location.name}
                <br />
                {location.street}
                <br />
                {location.city}, {location.region} {location.postalCode}
              </address>
              <dl className="mt-6 space-y-3 border-t border-fg/10 pt-6 text-sm text-fg/75">
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-fg">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${site.contact.phoneTel}`}
                      className="text-accent underline underline-offset-2"
                    >
                      {site.contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-fg">US line</dt>
                  <dd>
                    <a
                      href={`tel:${site.contact.usPhoneTel}`}
                      className="text-accent underline underline-offset-2"
                    >
                      {site.contact.usPhoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <ButtonLink href="/book" className="mt-7 w-full">
                Book a visit
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="flex h-full flex-col rounded-2xl border border-fg/10 bg-bg p-7 sm:p-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                Office hours
              </p>
              <ul className="mt-4 divide-y divide-fg/10">
                {location.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="font-display text-lg text-fg">
                      {h.days}
                    </span>
                    <span className="text-sm text-fg/70">{h.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-fg/60">
                Holiday hours may vary. For urgent medical issues call 911 — for
                crisis support, dial or text 988.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Map placeholder — styled div, no external embed */}
        <Reveal delay={0.12}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-fg/10">
            <div className="relative flex aspect-[21/9] items-center justify-center bg-gradient-to-br from-[#0c7b79]/15 via-muted to-[#f21872]/10">
              <div className="text-center">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Find us
                </p>
                <p className="mt-2 font-display text-xl text-fg">
                  {location.street}, {location.city}, {location.region}
                </p>
                <p className="mt-1 text-sm text-fg/60">
                  Off Airport Road &middot; Free on-site parking
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                Parking &amp; directions
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.1] tracking-tight text-fg">
                Easy to reach, easy to park.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-fg/75">
                <p>
                  The clinic sits in Aruogba Community, off Airport Road — along
                  Ugo Ben Road by Festus Ajayi Junction — with free parking right
                  outside the entrance — no garages, no meters, no circling the
                  block. Accessible spaces are located closest to the door.
                </p>
                <p>
                  Coming by bus or arranging a ride? Call ahead and the office
                  can help you plan the simplest route. If getting in is
                  difficult on the day of your appointment, ask about switching
                  to a telehealth visit instead.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-[#0b1f30] p-8 text-white sm:p-10">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                Accessibility
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-white">
                Care that meets you where you are.
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {accessibility.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-brand">
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-white/70">
                Need an accommodation we haven't mentioned? Let the office know
                when you book and we'll make it happen.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Come see us in Benin City."
        body="Book an in-person visit at our clinic in Aruogba Community, off Airport Road, or choose a telehealth appointment. We'll find a time that works."
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
