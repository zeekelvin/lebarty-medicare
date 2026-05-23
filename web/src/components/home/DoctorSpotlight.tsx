import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { site } from '@/lib/site';

export function DoctorSpotlight() {
  return (
    <section className="bg-forest-700 text-cream-50">
      <Container className="grid items-center gap-14 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="grain-overlay aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-cream-100 shadow-soft">
            <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden>
              <defs>
                <linearGradient id="dr1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F5EDE0" />
                  <stop offset="100%" stopColor="#EDE0CB" />
                </linearGradient>
              </defs>
              <rect width="400" height="500" fill="url(#dr1)" />
              <circle cx="200" cy="200" r="78" fill="#1B6B27" opacity="0.12" />
              <path
                d="M200 285 C 130 285, 100 360, 100 420 L 300 420 C 300 360, 270 285, 200 285 Z"
                fill="#1B6B27"
                opacity="0.12"
              />
              <text
                x="200"
                y="475"
                textAnchor="middle"
                className="font-serif"
                fontFamily="Fraunces, Georgia, serif"
                fontSize="14"
                fill="#9F2C20"
                letterSpacing="3"
              >
                PORTRAIT — TO BE REPLACED
              </text>
            </svg>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Eyebrow className="text-cream-200">Meet your physician</Eyebrow>
          <h2 className="mt-4 font-serif text-display-lg text-cream-50">
            {site.founder.name}
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-cream-100/85">
            Dr. Lebarty trained at Ellis Hospital in Schenectady and has spent
            his career bridging hospital medicine, primary care, addiction
            treatment, and humanitarian work. He cares for patients in clinic,
            on telehealth, and on rounds at skilled nursing facilities — and he
            built the Lebarty Community Health Foundation so the same medicine
            can reach villages thousands of miles away.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {site.founder.credentials.map((credential) => (
              <li
                key={credential}
                className="flex items-start gap-3 rounded-2xl bg-forest-800/40 p-4 text-sm leading-relaxed text-cream-100/90"
              >
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-cream-200" aria-hidden>
                  <path d="M5 10l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {credential}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/about/dr-lebarty" variant="accent" size="lg">
              Read Dr. Lebarty's full story
            </ButtonLink>
            <ButtonLink href="/book" variant="secondary" size="lg" className="bg-cream-50 text-forest-500">
              Book with Dr. Lebarty
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
