import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      {/* Decorative gradient ribbon */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-[480px] w-[480px] rounded-full bg-forest-100 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-terracotta-500/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <Eyebrow>Benin City, Edo State · Telehealth available</Eyebrow>
          <h1 className="mt-6 font-serif text-display-xl text-forest-500">
            Care that travels with you.
            <span className="block text-terracotta-500">Clinics that travel further.</span>
          </h1>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-charcoal-700">
            Lebarty Medicare is an independent physician practice founded by Dr. Nosa Lebarty —
            board-certified in family medicine, civil surgeon for U.S. Citizenship and
            Immigration Services, and medical director for Albany County. Every patient visit
            here helps fund community clinics across Africa through the
            {' '}<Link href="/foundation" className="underline decoration-terracotta-500/40 underline-offset-4 hover:decoration-terracotta-500">
              Lebarty Community Health Foundation
            </Link>.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/book" size="lg">
              Book a visit
              <span aria-hidden>→</span>
            </ButtonLink>
            <ButtonLink href="/services/telehealth" variant="secondary" size="lg">
              Start with telehealth
            </ButtonLink>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-forest-500/10 pt-8 text-charcoal-700">
            <div>
              <dt className="text-eyebrow uppercase text-charcoal-500">Board-certified</dt>
              <dd className="mt-2 font-serif text-2xl text-forest-500">Family Medicine</dd>
            </div>
            <div>
              <dt className="text-eyebrow uppercase text-charcoal-500">Civil Surgeon</dt>
              <dd className="mt-2 font-serif text-2xl text-forest-500">USCIS designated</dd>
            </div>
            <div>
              <dt className="text-eyebrow uppercase text-charcoal-500">Faculty</dt>
              <dd className="mt-2 font-serif text-2xl text-forest-500">Albany Medical College</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

/**
 * Editorial hero "card" — styled portrait placeholder until the on-site shoot
 * replaces it with real photography of Dr. Lebarty.
 */
function HeroVisual() {
  return (
    <div className="relative">
      <div className="grain-overlay relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 shadow-soft">
        <svg
          aria-hidden
          viewBox="0 0 400 500"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <radialGradient id="g1" cx="60%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#F5EDE0" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#0A2F12" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill="url(#g1)" />
          {/* Cross + heart, oversized and tilted */}
          <g transform="translate(200 230) rotate(-8) scale(2.6)">
            <path
              d="M -40,-80 H 40 V -40 H 80 V 40 H 40 V 80 H -40 V 40 H -80 V -40 H -40 Z"
              fill="#F5EDE0"
              stroke="#36B348"
              strokeWidth="6"
              strokeLinejoin="round"
              opacity="0.96"
            />
            <path
              d="M 0,-12
                 C -6,-24 -22,-26 -26,-12
                 C -30,4 -14,18 0,28
                 C 14,18 30,4 26,-12
                 C 22,-26 6,-24 0,-12 Z"
              fill="#E94B3C"
            />
            <path
              d="M 22,-14 C 38,-6 36,8 28,14 C 18,22 18,32 30,38"
              fill="none"
              stroke="#E94B3C"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-cream-50/95 p-5 backdrop-blur">
          <p className="font-serif text-lg leading-snug text-forest-700">
            "Every patient I see in Benin City helps build a clinic in a village
            that's never seen a doctor."
          </p>
          <p className="mt-3 font-sans text-xs uppercase tracking-[0.18em] text-terracotta-700">
            — Dr. Nosa Lebarty
          </p>
        </div>
      </div>

      <div className="absolute -left-6 -top-6 hidden rounded-2xl bg-cream-50 px-4 py-3 shadow-soft md:block">
        <p className="text-eyebrow uppercase text-charcoal-500">Open today</p>
        <p className="mt-1 font-serif text-lg text-forest-500">8:00 AM — 6:00 PM</p>
      </div>
    </div>
  );
}
