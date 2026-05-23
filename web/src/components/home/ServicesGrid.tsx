import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { services } from '@/lib/site';

export function ServicesGrid() {
  return (
    <section className="py-24" id="services">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <header className="lg:col-span-5">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-serif text-display-lg text-forest-500">
              Care that matches the rhythm of your life.
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-charcoal-700">
              Six services. One physician who knows your story. Whether you walk
              in, log on, or we come to you, you get the same continuity of care
              and the same chart.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-forest-500 hover:text-forest-600"
            >
              See all services
              <span aria-hidden>→</span>
            </Link>
          </header>

          <ul className="lg:col-span-7 grid gap-px overflow-hidden rounded-3xl bg-forest-500/10 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} className="group relative bg-cream-50 transition-colors hover:bg-cream-100">
                <Link
                  href={`/services/${s.slug}`}
                  className="flex h-full flex-col gap-4 p-7"
                >
                  <span className="text-eyebrow uppercase text-terracotta-700">
                    {s.eyebrow}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-forest-500">
                    {s.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-charcoal-700">
                    {s.description}
                  </p>
                  <span
                    aria-hidden
                    className="mt-auto text-sm font-medium text-forest-500 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Learn more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
