import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";
import { assets } from "@/lib/assets";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Lebarty Medicare in Benin City, Edo State. Call, email, or send a message.",
};

const inputClass =
  "mt-2 block w-full rounded-xl border border-fg/15 bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg/40 transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30";

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={assets.pages.contact}
        imageAlt="The welcoming front desk and waiting area at Lebarty Medicare"
        eyebrow="Contact"
        title="Talk to a real person."
        intro="Monday through Friday, 8 AM to 6 PM WAT. Most messages are returned the same business day. For urgent medical issues call 911 — for crisis support, dial or text 988."
      >
        <ButtonLink href={`tel:${site.contact.phoneTel}`} size="lg">
          Call {site.contact.phoneDisplay}
        </ButtonLink>
        <ButtonLink href="/book" size="lg" variant="secondary">
          Book a visit
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Get in touch"
          title="Send a message or reach us directly."
          intro="Use the form for general questions and appointment requests. Please keep personal health details out of the form — it is not a secure channel. We will follow up by phone or through your secure patient portal."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Contact form — static markup, no client handler */}
          <Reveal className="lg:col-span-7">
            <form
              action="#"
              className="rounded-2xl border border-fg/10 bg-muted/60 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-fg/60">
                    Your name
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-fg/60">
                    Email
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-fg/60">
                    Phone
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+234 700 000 0000"
                    className={inputClass}
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-fg/60">
                    What is this about?
                  </span>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="New patient, billing, general"
                    className={inputClass}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-fg/60">
                    Message
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="How can we help? Please do not include personal health information here."
                    className={inputClass}
                  />
                </label>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-fg/55">
                By submitting this form you agree to our{" "}
                <a
                  href="/privacy"
                  className="text-accent underline underline-offset-2"
                >
                  privacy policy
                </a>
                . This form is not a secure channel for protected health
                information.
              </p>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium tracking-tight text-white transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                Send message
              </button>
            </form>
          </Reveal>

          {/* Contact details panel */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-5">
              <div className="rounded-2xl bg-[#0b1f30] p-7 text-white">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                  By phone
                </p>
                <a
                  href={`tel:${site.contact.phoneTel}`}
                  className="mt-3 block font-display text-2xl tracking-tight text-white"
                >
                  {site.contact.phoneDisplay}
                </a>
                <dl className="mt-6 space-y-4 text-sm text-white/80">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
                      US line
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${site.contact.usPhoneTel}`}
                        className="underline underline-offset-2"
                      >
                        {site.contact.usPhoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="underline underline-offset-2"
                      >
                        {site.contact.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-fg/10 bg-muted/60 p-7">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Visit us
                </p>
                <address className="mt-3 not-italic font-display text-lg leading-snug text-fg">
                  {site.location.street}
                  <br />
                  {site.location.city}, {site.location.region}{" "}
                  {site.location.postalCode}
                </address>
                <ul className="mt-5 space-y-2 border-t border-fg/10 pt-5 text-sm text-fg/75">
                  {site.location.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4">
                      <span className="font-medium text-fg">{h.days}</span>
                      <span>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Need to be seen soon?"
        body="New patients are usually seen within a week. Book online or call and we will find a time that works."
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
