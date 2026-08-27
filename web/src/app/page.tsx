import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { FoundationCallout } from "@/components/sections/FoundationCallout";
import { Impact } from "@/components/sections/Impact";
import { CarePackagesHighlight } from "@/components/sections/CarePackagesHighlight";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { Marquee } from "@/components/ui/Marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "General medicine",
          "Pediatrics & child health",
          "Emergency services",
          "Laboratory & diagnostics",
          "Eye clinic · Pharmacy · X-ray",
          "Care here · clinics in Africa",
        ]}
      />
      <Intro />
      <ServicesShowcase />
      <Marquee
        items={[
          "Same-week appointments",
          "Prepaid care packages",
          "Board-certified physicians",
          "Ambulance & patient transport",
        ]}
        baseDuration={42}
      />
      <CarePackagesHighlight />
      <FoundationCallout />
      <Impact />
      <HomeCTA />
    </>
  );
}
