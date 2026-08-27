import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "General Medicine: Consultations, Check-ups & Everyday Care",
  description:
    "General medicine at Lebarty Medicare Hospital in Benin City: everyday consultations, check-ups, and treatment for malaria, typhoid, infections, and minor injuries.",
  alternates: { canonical: "/services/general-medicine" },
};

const content: ServiceContent = {
  eyebrow: "General medicine · Benin City, Edo State",
  title: "The first door to knock on.",
  intro:
    "Everyday consultations, check-ups, and treatment for the illnesses that interrupt ordinary life: malaria, typhoid, infections, and minor injuries. When something feels off, this is where you start. A doctor listens, examines, treats, and if you need more specialised care, walks you to it under the same roof.",
  heroImage: assets.services["general-medicine"],
  featureImage: assets.services["general-medicine"],
  overviewTitle: "Everyday care, done properly.",
  overview: [
    "Most health worries do not need a specialist. They need a doctor who takes the time to listen, ask the right questions, and examine you carefully. General medicine covers the visits that make up most of hospital life: a fever that will not break, a persistent cough, a stomach that has been unsettled for days, a cut that needs attention, or simply a check-up because it has been a while.",
    "Common illnesses like malaria, typhoid, and everyday infections are diagnosed and treated here, with the hospital's own laboratory confirming what the examination suggests. Minor injuries are cleaned, dressed, and followed up. You also get plain-language advice on staying well: what to watch for, when to come back, and what you can safely manage at home.",
    "When a visit uncovers something that needs deeper attention, you are not sent away with a letter and a wish of good luck. The doctor refers you directly into the hospital's other services, whether that is internal medicine for an ongoing condition, the eye clinic, or imaging, and your notes travel with you.",
  ],
  expectTitle: "What general medicine covers.",
  expect: [
    "Consultations for fevers, aches, coughs, and everyday complaints",
    "Diagnosis and treatment of malaria, typhoid, and common infections",
    "Care for minor injuries: cuts, sprains, and wounds",
    "Routine check-ups and general health reviews",
    "Plain-language health advice you can act on at home",
    "Direct referrals into the hospital's other services when needed",
  ],
  steps: [
    {
      title: "Come in or book ahead",
      body: "Walk in during clinic hours or call the front desk to book. If you feel seriously unwell, do not wait for a booking: call 112 or come straight to the emergency unit.",
    },
    {
      title: "See the doctor",
      body: "The doctor listens to your story, examines you, and orders any tests from the on-site laboratory. Nothing is rushed, and nothing is left unexplained.",
    },
    {
      title: "Treat and follow up",
      body: "You leave with a clear plan: your treatment, what to expect, and when to return. If specialised care is needed, the referral happens inside the hospital.",
    },
  ],
  faqs: [
    {
      q: "Do I need an appointment to see a doctor?",
      a: "Walk-ins are welcome during clinic hours, though booking ahead through the front desk usually means a shorter wait. For anything urgent, do not book and wait: call 112 or come straight to the hospital's emergency unit.",
    },
    {
      q: "Can malaria and typhoid be tested and treated in one visit?",
      a: "In most cases, yes. The doctor examines you, the on-site laboratory runs the tests, and treatment starts once the result is in. You do not have to carry samples or results between facilities.",
    },
    {
      q: "What counts as a minor injury?",
      a: "Cuts, small wounds, sprains, and similar injuries that need cleaning, dressing, or a careful look. If an injury involves heavy bleeding, a suspected broken bone, or a blow to the head, treat it as urgent: call 112 or come straight to the emergency unit.",
    },
    {
      q: "What happens if my problem needs a specialist?",
      a: "The doctor refers you directly into the hospital's other services, such as internal medicine, the eye clinic, or diagnostic imaging. Your notes and test results move with you, so you never start from zero.",
    },
    {
      q: "How much does a consultation cost, and is insurance accepted?",
      a: "Rates and any HMO or insurance cover are confirmed by the front desk before your visit. Call ahead and they will tell you exactly what to expect, including whether a care package could cover your visits.",
    },
  ],
  related: [
    {
      title: "Internal Medicine",
      body: "In-depth adult medicine for hypertension, diabetes, and conditions that need long-term attention.",
      href: "/services/internal-medicine",
    },
    {
      title: "Laboratory",
      body: "On-site blood work and testing, so diagnosis and treatment happen in the same visit.",
      href: "/services/laboratory",
    },
    {
      title: "Care packages",
      body: "Silver, Gold, and Elite prepaid bundles, each built around a fixed list of consultations and lab tests.",
      href: "/care-packages",
    },
  ],
};

export default function GeneralMedicinePage() {
  return <ServicePage {...content} />;
}
