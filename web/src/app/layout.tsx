import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageBackground } from "@/components/ui/PageBackground";
import { MobileNav } from "@/components/ui/MobileNav";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Primary care, addiction medicine & telehealth in Schenectady, NY`,
    template: `%s · ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  authors: [{ name: site.founder.name }],
  keywords: [
    "family medicine Schenectady",
    "addiction medicine Schenectady",
    "Suboxone doctor Schenectady",
    "telehealth primary care New York",
    "civil surgeon Albany NY",
    "Lebarty Medical",
    "community health foundation Africa",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — care here, clinics in Africa`,
    description: site.shortDescription,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.shortDescription,
    images: [site.ogImage],
  },
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#12324A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": `${site.url}#organization`,
      name: site.location.name,
      url: site.url,
      logo: `${site.url}/logo.svg`,
      telephone: site.contact.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.location.street,
        addressLocality: site.location.city,
        addressRegion: site.location.region,
        postalCode: site.location.postalCode,
        addressCountry: site.location.country,
      },
      areaServed: ["Schenectady", "Albany", "Capital Region", "New York"],
      medicalSpecialty: [
        "Family Medicine",
        "Addiction Medicine",
        "Hospitalist Medicine",
        "Internal Medicine",
      ],
    },
    {
      "@type": "Physician",
      "@id": `${site.url}#physician-lebarty`,
      name: site.founder.name,
      jobTitle: "Founder & Physician",
      worksFor: { "@id": `${site.url}#organization` },
      medicalSpecialty: ["Family Medicine", "Addiction Medicine"],
    },
  ],
};

const mobileLinks = [
  { href: "/services", label: "Services", n: "01" },
  { href: "/about/dr-lebarty", label: "Dr. Lebarty", n: "02" },
  { href: "/patients", label: "Patients", n: "03" },
  { href: "/foundation", label: "Foundation", n: "04" },
  { href: "/resources", label: "Resources", n: "05" },
  { href: "/contact", label: "Contact", n: "06" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="has-cursor min-h-screen bg-bg text-fg antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <PageBackground tone="care" intensity={0.5} />
        <SmoothScroll />
        <MagneticCursor />
        <ScrollProgress />
        <Header />
        <MobileNav
          links={mobileLinks}
          cta={{ href: "/book", label: "Book a Visit →" }}
        />

        <main id="main" className="relative z-[1]">
          {children}
        </main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
