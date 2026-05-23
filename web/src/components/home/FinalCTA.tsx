import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { site } from '@/lib/site';

export function FinalCTA() {
  return (
    <section className="pb-24 pt-12">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] bg-forest-700 text-cream-50 shadow-soft">
          <div className="grid gap-10 px-8 py-14 md:grid-cols-12 md:items-center md:px-14 md:py-20">
            <div className="md:col-span-7">
              <Eyebrow className="text-cream-200">Ready when you are</Eyebrow>
              <h2 className="mt-4 font-serif text-display-lg text-cream-50">
                Book a visit. Or just call us — we still answer the phone.
              </h2>
              <p className="mt-6 max-w-lg font-sans leading-relaxed text-cream-100/80">
                We hold same-week appointments for new patients and see existing
                patients on telehealth most weekday evenings. Whatever you need,
                someone here will help you figure it out.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-3">
              <ButtonLink href="/book" size="lg" variant="accent" className="justify-between">
                Book a visit <span aria-hidden>→</span>
              </ButtonLink>
              <ButtonLink href={`tel:${site.contact.phoneTel}`} size="lg" variant="secondary" className="justify-between bg-cream-50 text-forest-500">
                Call {site.contact.phoneDisplay} <span aria-hidden>→</span>
              </ButtonLink>
              <ButtonLink href="/services/telehealth" size="lg" variant="ghost" className="justify-between bg-forest-800/40 text-cream-50 hover:bg-forest-800/60">
                Start with telehealth <span aria-hidden>→</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
