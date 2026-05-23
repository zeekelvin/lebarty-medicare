import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ButtonLink } from '@/components/ui/Button';
import { site } from '@/lib/site';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  bullets: string[];
};

/**
 * Reusable layout for service detail stubs that aren't fully written yet.
 * Each one will get a bespoke long-form page during the content phase.
 */
export function ServiceStubPage({ eyebrow, title, intro, bullets }: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />

      <Container className="grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow>What to expect</Eyebrow>
          <ul className="mt-6 space-y-3 font-sans text-charcoal-700">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-forest-500/10 bg-cream-50 p-4"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-4 w-4 shrink-0 text-forest-500"
                  aria-hidden
                >
                  <path
                    d="M5 10l3 3 7-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-prose font-sans text-sm text-charcoal-500">
            (This page will get a long-form, SEO-optimized treatment during the
            content pass — full clinical context, FAQs, insurance specifics, and
            patient testimonials.)
          </p>
        </div>

        <aside className="lg:col-span-5 lg:pl-6">
          <div className="rounded-3xl bg-cream-100 p-7">
            <Eyebrow>Ready when you are</Eyebrow>
            <p className="mt-3 font-serif text-2xl text-forest-500">
              <a href={`tel:${site.contact.phoneTel}`}>{site.contact.phoneDisplay}</a>
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <ButtonLink href="/book" size="md">Book a visit</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="md">
                Send a question
              </ButtonLink>
            </div>
          </div>
        </aside>
      </Container>
    </>
  );
}
