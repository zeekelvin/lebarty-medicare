import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { DoctorSpotlight } from "@/components/sections/DoctorSpotlight";
import { FoundationCallout } from "@/components/sections/FoundationCallout";
import { Impact } from "@/components/sections/Impact";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { Marquee } from "@/components/ui/Marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Family medicine",
          "Addiction medicine",
          "Telehealth statewide",
          "Civil surgeon · USCIS",
          "Nursing-home visits",
          "Care here · clinics in Africa",
        ]}
      />
      <Intro />
      <ServicesShowcase />
      <Marquee
        items={[
          "Same-week appointments",
          "Medicaid & Medicare accepted",
          "Board-certified family medicine",
          "Judgment-free addiction care",
        ]}
        baseDuration={42}
      />
      <DoctorSpotlight />
      <FoundationCallout />
      <Impact />
      <HomeCTA />
    </>
  );
}
