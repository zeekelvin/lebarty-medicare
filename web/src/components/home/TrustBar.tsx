import { Container } from '@/components/ui/Container';

const affiliations = [
  'Albany Medical College',
  'Albany County Department of Health',
  'Albany County Correctional Facility',
  'U.S. Citizenship and Immigration Services',
  'American Board of Family Medicine',
];

export function TrustBar() {
  return (
    <section aria-label="Affiliations" className="border-y border-forest-500/10 bg-cream-100">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <p className="text-eyebrow uppercase text-charcoal-500">
            Affiliations &amp; appointments
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-charcoal-700">
            {affiliations.map((a) => (
              <li key={a} className="font-serif italic text-forest-600">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
