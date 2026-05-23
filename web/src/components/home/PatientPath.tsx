import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

const steps = [
  {
    n: '01',
    title: 'Tell us about you',
    body: 'Three minutes online. Insurance, reason for visit, and whether you\'d like in-person, telehealth, or a home visit.',
  },
  {
    n: '02',
    title: 'Meet Dr. Lebarty',
    body: 'A real visit — not a 7-minute conveyor belt. We talk through what\'s actually going on and build a plan together.',
  },
  {
    n: '03',
    title: 'Stay in care',
    body: 'Same physician, same chart, every time. Refills, follow-ups, labs, telehealth — handled without you starting over.',
  },
];

export function PatientPath() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <header className="lg:col-span-4">
            <Eyebrow>Becoming a patient</Eyebrow>
            <h2 className="mt-4 font-serif text-display-lg text-forest-500">
              Three steps. No surprise bills.
            </h2>
            <p className="mt-6 font-sans leading-relaxed text-charcoal-700">
              We take Medicare, Medicaid Managed Care, and most major commercial
              plans. If you're not sure, ask — we'll check before your visit so
              there are no surprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/book" size="md">Book a visit</ButtonLink>
              <ButtonLink href="/patients/insurance" variant="secondary" size="md">
                Check insurance
              </ButtonLink>
            </div>
          </header>

          <ol className="lg:col-span-8 grid gap-4 sm:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-3xl bg-cream-100 p-7">
                <p className="font-serif text-display text-terracotta-500">
                  {s.n}
                </p>
                <h3 className="mt-4 font-serif text-xl text-forest-500">{s.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal-700">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
