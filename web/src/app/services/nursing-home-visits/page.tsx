import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Nursing-Home Physician Visits",
  description:
    "On-site and telehealth physician visits at skilled nursing facilities across Benin City and surrounding communities, with Dr. Nosa Lebarty, MD.",
  alternates: { canonical: "/services/nursing-home-visits" },
};

const content: ServiceContent = {
  eyebrow: "Nursing-home visits · Benin City",
  title: "Bringing the doctor to the patient.",
  intro:
    "Our physicians round at skilled nursing facilities across Benin City and surrounding communities, combining on-site visits with telehealth assessments so older adults receive consistent, attentive care wherever they live. For families, it means a trusted physician at the bedside without the strain of transport.",
  heroImage: assets.pages.nursingHome,
  overviewTitle: "Attentive care for our oldest neighbors.",
  overview: [
    "Moving an older adult to and from a clinic can be exhausting, for the patient and for the family. Nursing-home visits remove that burden by bringing the physician to the facility instead. Dr. Nosa Lebarty, MD rounds at participating skilled nursing facilities across Benin City and surrounding communities, seeing patients where they already feel settled.",
    "Older patients often live with several conditions at once, and their care needs steady, coordinated attention. Dr. Lebarty works closely with facility nursing staff and with families to keep medications, treatment plans, and goals of care aligned, so nothing falls through the cracks between visits.",
    "When a concern is routine, a telehealth assessment can answer it quickly without waiting for the next on-site round. When a patient needs to be seen in person, Dr. Lebarty is there. The aim is simple: consistent, unhurried care for the people who need it most.",
  ],
  featureImage: assets.services["nursing-home-visits"],
  expectTitle: "What facility care includes.",
  expect: [
    "On-site physician rounds at participating skilled nursing facilities",
    "Telehealth assessments for routine visits and timely follow-up",
    "Close care coordination with facility nursing staff and family",
    "Management of complex, multi-condition patients",
    "Medication review and goals-of-care conversations",
    "Costs confirmed with families up front",
  ],
  steps: [
    {
      title: "Connect with us",
      body: "A facility care team or a family member reaches out to arrange physician coverage or a specific assessment.",
    },
    {
      title: "On-site or by video",
      body: "Dr. Lebarty rounds in person and uses telehealth for routine checks, keeping care timely between visits.",
    },
    {
      title: "Coordinated follow-up",
      body: "Findings, medication changes, and care plans are shared with facility nursing and family so everyone stays aligned.",
    },
  ],
  faqs: [
    {
      q: "Which facilities does Dr. Lebarty visit?",
      a: "Dr. Lebarty rounds at participating skilled nursing facilities across Benin City and surrounding communities. Call the office to ask whether a specific facility is covered.",
    },
    {
      q: "Can a family member request a visit?",
      a: "Yes. Families are welcome to reach out directly, and the office will coordinate with the facility care team to arrange an appropriate visit.",
    },
    {
      q: "Are routine visits done by telehealth?",
      a: "Many routine assessments and follow-ups are handled by telehealth, which keeps care timely. Patients who need a hands-on exam are seen in person.",
    },
    {
      q: "How do families stay informed?",
      a: "Dr. Lebarty coordinates closely with facility nursing staff and shares findings, medication changes, and care plans with families so everyone stays on the same page.",
    },
    {
      q: "How are visits paid for?",
      a: "The front desk confirms costs and payment options with the family or facility before visits begin, so there are no surprises.",
    },
  ],
  related: [
    {
      title: "Primary Care",
      body: "A continuous relationship with a board-certified family physician for patients of every age.",
      href: "/services/primary-care",
    },
    {
      title: "Telehealth",
      body: "Secure video visits that keep follow-up care timely between on-site rounds.",
      href: "/services/telehealth",
    },
    {
      title: "Preventive Care",
      body: "Wellness visits and screenings tailored to age and history, coordinated with the full care plan.",
      href: "/services/preventive-care",
    },
  ],
};

export default function NursingHomeVisitsPage() {
  return <ServicePage {...content} />;
}
