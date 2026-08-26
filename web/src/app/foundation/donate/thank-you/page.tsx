import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Thank you",
  description:
    "Your donation to the Lebarty Community Health Foundation was received. Thank you for helping fund community clinics across Africa.",
  robots: { index: false },
  alternates: { canonical: "/foundation/donate/thank-you" },
};

export default function DonateThankYouPage() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto max-w-2xl py-20 text-center sm:py-28">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-warm">
            Donation received
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] tracking-tight text-fg">
            Thank you.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fg/70 sm:text-lg">
            Your gift to the Lebarty Community Health Foundation is on its way
            to the work: village clinics, mobile outreach, and trained health
            workers across Africa. A receipt from our payment processor will
            arrive in your email shortly.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/foundation" size="lg">
              See the Foundation&rsquo;s work
            </ButtonLink>
            <ButtonLink href="/" size="lg" variant="secondary">
              Back to home
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
