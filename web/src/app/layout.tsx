import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageBackground } from "@/components/ui/PageBackground";
import { MobileNav } from "@/components/ui/MobileNav";
import { ChatbotLazy } from "@/components/ui/ChatbotLazy";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { navMore, navPrimary, services, site } from "@/lib/site";
import type { MobileNavLink } from "@/components/ui/MobileNav";

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
    default: `${site.name} — Hospital in Benin City, Edo State`,
    template: `%s · ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  authors: [{ name: site.founder.name }],
  keywords: [
    "hospital in Benin City",
    "family medicine Benin City",
    "pediatrics Benin City",
    "emergency hospital Benin City",
    "laboratory services Benin City",
    "Lebarty Medicare Hospital",
    "Lebarty Medicare",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
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
      areaServed: ["Benin City", "Edo State", "Nigeria"],
      medicalSpecialty: [
        "General Medicine",
        "Internal Medicine",
        "Pediatrics",
        "Emergency Medicine",
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

// Derived from the nav data so desktop and mobile menus can never drift.
// The fullscreen mobile menu shows everything flat, dropdown included;
// Services carries the per-service list as an expandable sub-menu.
// (Home on mobile is the beating-heart logo MobileNav pins top-left.)
const mobileLinks: MobileNavLink[] = [...navPrimary, ...navMore].map(
  (item, i) => ({
    label: item.label,
    href: item.href,
    n: String(i + 1).padStart(2, "0"),
    children:
      item.href === "/services"
        ? services.map((s) => ({
            label: s.title,
            href: `/services/${s.slug}`,
          }))
        : undefined,
  }),
);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-fg antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <PageBackground tone="care" intensity={0.5} />
        <SmoothScroll />
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
        <ChatbotLazy />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
