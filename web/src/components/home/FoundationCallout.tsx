import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

const stats = [
  { figure: '12+', label: 'Communities served' },
  { figure: '4', label: 'Countries reached' },
  { figure: '100%', label: 'Of donations go to programs' },
];

export function FoundationCallout() {
  return (
    <section className="relative overflow-hidden py-24" id="foundation">
      <div aria-hidden className="absolute inset-0 -z-10 bg-cream-100" />
      <div
        aria-hidden
        className="absolute -right-32 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-terracotta-500/10 blur-3xl"
      />
      <Container className="grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Eyebrow>The Lebarty Community Health Foundation</Eyebrow>
          <h2 className="mt-4 font-serif text-display-lg text-forest-500">
            Care here.
            <span className="block text-terracotta-500 italic">Clinics there.</span>
          </h2>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-charcoal-700">
            The Foundation builds and supplies community health clinics in
            under-served villages across Africa — most of them in regions where
            a single visit by a physician changes a life. Funding starts with
            patient visits in Benin City. Every appointment in our clinic is a
            quiet act of solidarity with a community on the other side of the
            world.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-cream-50 p-5">
                <dt className="text-eyebrow uppercase text-terracotta-700">
                  {s.label}
                </dt>
                <dd className="mt-2 font-serif text-3xl font-medium text-forest-500">
                  {s.figure}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/foundation/donate" variant="accent" size="lg">
              Donate to the Foundation
            </ButtonLink>
            <ButtonLink href="/foundation" variant="secondary" size="lg">
              See our programs
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="grain-overlay aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-terracotta-500 to-terracotta-600 shadow-soft">
            <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden>
              {/* Stylized landscape — sun + acacia silhouettes */}
              <rect width="400" height="500" fill="#E94B3C" />
              <circle cx="280" cy="160" r="78" fill="#F5EDE0" opacity="0.95" />
              <path
                d="M0 380 Q 100 330, 200 360 T 400 350 L 400 500 L 0 500 Z"
                fill="#134E1B"
                opacity="0.85"
              />
              <path
                d="M0 420 Q 120 390, 220 410 T 400 405 L 400 500 L 0 500 Z"
                fill="#134E1B"
              />
              {/* Acacia tree */}
              <g transform="translate(80 380)">
                <line x1="0" y1="0" x2="0" y2="-90" stroke="#134E1B" strokeWidth="3" />
                <ellipse cx="0" cy="-90" rx="38" ry="14" fill="#134E1B" />
                <ellipse cx="-12" cy="-100" rx="28" ry="10" fill="#0A2F12" />
              </g>
              <g transform="translate(330 380)">
                <line x1="0" y1="0" x2="0" y2="-110" stroke="#134E1B" strokeWidth="3" />
                <ellipse cx="0" cy="-110" rx="46" ry="16" fill="#134E1B" />
              </g>
            </svg>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[260px] rounded-2xl bg-forest-700 px-5 py-4 text-cream-50 shadow-soft md:block">
            <p className="font-serif text-base leading-snug">
              "$50 funds a month of prenatal visits for one expectant mother."
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
