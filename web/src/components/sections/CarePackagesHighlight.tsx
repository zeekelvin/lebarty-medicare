import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/site/Reveal";
import { assets } from "@/lib/assets";
import { carePackageIncludesLabel, carePackages } from "@/lib/site";
import { cn } from "@/lib/cn";

export function CarePackagesHighlight() {
  return (
    <section
      id="care-packages"
      className="relative overflow-hidden border-t border-fg/8 bg-[#0b1f30] py-20 text-white sm:py-28"
      aria-labelledby="care-packages-heading"
    >
      <div className="absolute inset-0 opacity-24">
        <Image
          src={assets.pages.preventiveCare}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-[#0b1f30]/88" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,123,121,0.35),transparent_45%,rgba(242,24,114,0.22))]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-12">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-end">
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-brand">
                <span className="h-px w-10 bg-brand" />
                Care packages
              </span>
              <h2
                id="care-packages-heading"
                className="mt-5 font-display text-4xl leading-none tracking-normal text-white sm:text-5xl lg:text-6xl"
              >
                Preventive care, packaged clearly.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/76 sm:text-lg">
                Silver, Gold, and Elite are prepaid check-up bundles, presented
                as straightforward services rather than insurance. Choose a tier,
                know what is included, and let the hospital team guide the rest.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/care-packages" size="lg">
                  View package details
                  <ArrowRight size={17} strokeWidth={1.8} />
                </ButtonLink>
                <ButtonLink href="/book" size="lg" variant="secondary">
                  Book a package
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-lg border border-white/12 bg-white/[0.04] p-3 backdrop-blur-sm">
              <div className="grid gap-3 md:grid-cols-3">
                {carePackages.map((pkg) => {
                  const featured = pkg.featured;

                  return (
                    <Link
                      key={pkg.slug}
                      href={`/care-packages#${pkg.slug}`}
                      aria-label={`${pkg.name} package — view full details`}
                      className={cn(
                        "group relative flex min-h-[420px] min-w-0 flex-col rounded-lg border p-5 transition-all duration-300 hover:-translate-y-1",
                        featured
                          ? "border-brand bg-white text-fg shadow-[0_18px_48px_-24px_rgba(242,24,114,0.65)] hover:shadow-[0_24px_56px_-22px_rgba(242,24,114,0.8)]"
                          : "border-white/12 bg-[#0f2a3e]/88 text-white hover:border-brand/60",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            className={cn(
                              "font-mono text-[10px] font-semibold uppercase tracking-[0.24em]",
                              featured ? "text-accent" : "text-brand",
                            )}
                          >
                            {pkg.label}
                          </p>
                          <h3 className="mt-3 font-display text-3xl leading-none tracking-normal">
                            {pkg.name}
                          </h3>
                        </div>
                        {featured ? (
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                            <ShieldCheck size={18} strokeWidth={1.9} />
                          </span>
                        ) : null}
                      </div>

                      <p
                        className={cn(
                          "mt-4 text-sm leading-relaxed",
                          featured ? "text-fg/70" : "text-white/68",
                        )}
                      >
                        {pkg.summary}
                      </p>

                      <p
                        className={cn(
                          "mt-5 border-y py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em]",
                          featured
                            ? "border-fg/10 text-accent"
                            : "border-white/12 text-white/80",
                        )}
                      >
                        {carePackageIncludesLabel(pkg)}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {pkg.includes.map((item) => (
                          <li
                            key={item}
                            className={cn(
                              "flex items-start gap-2.5 text-sm leading-snug",
                              featured ? "text-fg/75" : "text-white/76",
                            )}
                          >
                            <Check
                              size={15}
                              strokeWidth={2.2}
                              className={cn(
                                "mt-0.5 shrink-0",
                                featured ? "text-accent" : "text-brand",
                              )}
                            />
                            <span className="min-w-0 break-words">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6">
                        <p
                          className={cn(
                            "text-xs leading-relaxed",
                            featured ? "text-fg/55" : "text-white/52",
                          )}
                        >
                          {pkg.price}
                        </p>
                        <span
                          className={cn(
                            "mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] transition-colors",
                            featured
                              ? "text-accent"
                              : "text-brand group-hover:text-white",
                          )}
                        >
                          View details
                          <ArrowRight
                            size={13}
                            strokeWidth={2}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
