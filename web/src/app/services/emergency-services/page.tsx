import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Emergency Services: Urgent Care in Benin City",
  description:
    "Emergency care at Lebarty Medicare Hospital in Benin City. For emergencies call 112 or the hospital line, or come straight to the emergency unit.",
  alternates: { canonical: "/services/emergency-services" },
};

const content: ServiceContent = {
  eyebrow: "Emergency services · Benin City, Edo State",
  title: "Always here when you need us.",
  intro:
    "Accidents and sudden illness do not wait for an appointment, and neither do we. For an emergency, call 112 or the hospital line, or come straight to the emergency unit. The team stabilizes first, and explains everything as soon as it is safe to.",
  heroImage: assets.services["emergency-services"],
  featureImage: assets.services["emergency-services"],
  overviewTitle: "Built for the moments that cannot wait.",
  overview: [
    "The emergency unit handles accidents, injuries, sudden severe illness, and any situation where waiting would be dangerous. You do not need an appointment, a referral, or paperwork to be seen: come in, and the team takes it from there.",
    "Emergency care works hand in hand with the rest of the hospital. The laboratory runs urgent tests, imaging is steps away, the pharmacy dispenses immediately, and admission to a ward is seamless when it is needed. Nothing is lost moving between departments.",
    "Families are kept informed at every stage. Once a patient is stable, the team explains what happened, what was done, and what comes next, in plain language and with time for questions.",
  ],
  expectTitle: "What the emergency unit handles.",
  expect: [
    "Accidents and injuries, from minor wounds to serious trauma",
    "Sudden severe illness: chest pain, breathing difficulty, collapse",
    "High fevers and severe infections in adults and children",
    "Urgent stabilization before ward admission or referral",
    "Ambulance arrival coordination and rapid triage",
    "Clear updates for family members throughout",
  ],
  steps: [
    {
      title: "Call or come in",
      body: "Call 112 or the hospital line on the way if you can, or come straight in. No appointment is ever needed for an emergency.",
    },
    {
      title: "Rapid triage",
      body: "The team assesses severity immediately and treats the most urgent needs first. Registration paperwork follows care, never the other way around.",
    },
    {
      title: "Stabilize and plan",
      body: "Once the patient is stable, the team explains findings and next steps: home with instructions, admission, or planned follow-up.",
    },
  ],
  faqs: [
    {
      q: "What should I do in an emergency?",
      a: "Call 112 (emergency services) or the hospital line, or come straight to the emergency unit. Do not book online or wait for a callback in an emergency.",
    },
    {
      q: "Do I need an appointment or referral?",
      a: "No. Emergencies are seen immediately, day or night arrangements are confirmed by the front desk. Care always comes before paperwork.",
    },
    {
      q: "Can the ambulance come to me?",
      a: "Yes. Call the hospital line and the ambulance team will be dispatched. Share your location clearly and stay reachable on the number you called from.",
    },
    {
      q: "What happens after stabilization?",
      a: "Depending on the situation: discharge home with clear instructions, admission to a ward, or a planned follow-up visit. The team explains every option before deciding with you.",
    },
    {
      q: "How is emergency care paid for?",
      a: "Treatment comes first. Costs and payment options, including any HMO or insurance cover, are sorted out with the front desk once the patient is safe.",
    },
  ],
  related: [
    {
      title: "Ambulance & Patient Transport",
      body: "Emergency response and planned transfers, arranged through the hospital line and front desk.",
      href: "/services/ambulance",
    },
    {
      title: "Diagnostic Imaging & X-ray",
      body: "Urgent X-ray and ultrasound, steps away from the emergency unit when minutes matter.",
      href: "/services/diagnostic-imaging",
    },
    {
      title: "Laboratory Services",
      body: "Urgent blood work and testing on site, feeding results straight to the treating team.",
      href: "/services/laboratory",
    },
  ],
};

export default function EmergencyServicesPage() {
  return <ServicePage {...content} />;
}
