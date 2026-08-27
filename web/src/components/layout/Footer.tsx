import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-[1] mt-px border-t border-fg/10 bg-[#0b1f30] text-white/85">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo surface="dark" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              {site.shortDescription}
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
              Founded by {site.founder.name}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
              Care
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/services/general-medicine" className="transition-colors hover:text-brand">General medicine</Link></li>
              <li><Link href="/services/pediatrics" className="transition-colors hover:text-brand">Pediatrics</Link></li>
              <li><Link href="/services/emergency-services" className="transition-colors hover:text-brand">Emergency services</Link></li>
              <li><Link href="/services/laboratory" className="transition-colors hover:text-brand">Laboratory</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-brand">All services</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
              Foundation
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/foundation" className="transition-colors hover:text-brand">Our mission</Link></li>
              <li><Link href="/foundation/donate" className="transition-colors hover:text-brand">Donate</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
              Patients
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/book" className="transition-colors hover:text-brand">Book a visit</Link></li>
              <li><Link href="/care-packages" className="transition-colors hover:text-brand">Care packages</Link></li>
              <li><Link href="/patients/insurance" className="transition-colors hover:text-brand">Payment &amp; billing</Link></li>
              <li><Link href="/patients" className="transition-colors hover:text-brand">Patient portal</Link></li>
              <li><Link href="/locations/benin-city" className="transition-colors hover:text-brand">Location &amp; hours</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${site.contact.phoneTel}`} className="transition-colors hover:text-brand">
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-brand">
                  {site.contact.email}
                </a>
              </li>
              <li className="text-white/55">
                {site.location.street}<br />
                {site.location.city}, {site.location.region} {site.location.postalCode}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
            The Lebarty Network
          </h4>
          <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2 md:grid-cols-4">
            <li><a href={site.ecosystem.centralmed} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">CentralMed Urgent &amp; Primary Care →</a></li>
            <li><a href={site.ecosystem.meditrans} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">Lebarty Medi-Trans →</a></li>
            <li><a href={site.ecosystem.foundation} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">Lebarty Community Health Foundation →</a></li>
            <li><a href={site.ecosystem.projectHealthAfrica} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">Project Health Africa →</a></li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Lebarty Medicare Hospital. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy" className="transition-colors hover:text-brand">Privacy</Link></li>
            <li><Link href="/hipaa-notice" className="transition-colors hover:text-brand">HIPAA notice</Link></li>
            <li><Link href="/accessibility" className="transition-colors hover:text-brand">Accessibility</Link></li>
            <li><span>Designed &amp; built by Zagaprime</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
