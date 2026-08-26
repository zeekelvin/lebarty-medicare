import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Addiction Medicine & Suboxone in Benin City, Edo State",
  description:
    "Compassionate, judgment-free treatment for opioid use disorder with Dr. Nosa Lebarty, MD. Suboxone (buprenorphine) and medication-assisted treatment, with same-week appointments and telehealth induction available.",
  alternates: { canonical: "/services/addiction-medicine" },
};

const content: ServiceContent = {
  eyebrow: "Addiction medicine · Benin City, Edo State",
  title: "Recovery is medicine, not a moral test.",
  intro:
    "Dr. Nosa Lebarty, MD provides Suboxone (buprenorphine) and medication-assisted treatment for opioid use disorder. Same-week appointments, telehealth induction available, and zero judgment. Coming in does not require being clean. Wherever you are today, you can start here.",
  heroImage: assets.pages.addictionMedicine,
  overviewTitle: "Treatment that meets you where you are.",
  overview: [
    "Substance use disorder is a medical condition, and it responds to medication, time, and someone in your corner, the same way diabetes or high blood pressure do. There is no lecture here and no gatekeeping. Your first visit is a conversation: what you have tried, what you want, what your day looks like, and what you are worried about.",
    "Suboxone (buprenorphine with naloxone) is the gold-standard medication for opioid use disorder. It eases withdrawal, quiets cravings, and blocks the high from other opioids, without the heavy sedation of older treatments. Treatment with buprenorphine is recommended by the American Medical Association, the CDC, and SAMHSA. It does not trade one drug for another. It steadies brain chemistry so people can work, parent, drive, and live.",
    "Together you will decide whether to start medication that day or take another step first. Either way, the plan is yours, and Dr. Lebarty stays with you through every adjustment along the way.",
  ],
  featureImage: assets.services["addiction-medicine"],
  expectTitle: "What treatment here looks like.",
  expect: [
    "A first visit that is a conversation, not an interrogation",
    "Suboxone (buprenorphine) and medication-assisted treatment for opioid use disorder",
    "Telehealth induction and ongoing visits available",
    "Same-week appointments: most people are seen within a week",
    "Clear, affordable rates, confirmed by the front desk before you start",
    "Strict confidentiality under HIPAA and 42 CFR Part 2: records are never shared without your written consent",
  ],
  steps: [
    {
      title: "Reach out",
      body: "Call or book online. A real person answers, and the first conversation is simply about where you are and what you need.",
    },
    {
      title: "Start treatment",
      body: "Often within a week, and in person or on telehealth. Dr. Lebarty reviews your history and, when you are ready, starts medication.",
    },
    {
      title: "Stay supported",
      body: "Regular check-ins keep your dose right and your recovery steady, adjusting the plan with you as life changes.",
    },
  ],
  faqs: [
    {
      q: "Will I be judged?",
      a: "No. Substance use disorder is treated here like any other medical condition that responds to medication and time. There is no lecture, no gatekeeping, and no shame attached to walking in the door.",
    },
    {
      q: "What if I am still using?",
      a: "That is exactly what the visit is for. Coming in does not require being clean. Dr. Lebarty meets you where you are and works from there.",
    },
    {
      q: "How fast can I be seen?",
      a: "Most people who reach out are seen within a week. If you are ready today, call the office, and we will do what we can to see you sooner.",
    },
    {
      q: "Can I do this on telehealth?",
      a: "Yes. Telehealth induction and ongoing buprenorphine visits are available. After an initial conversation, you and Dr. Lebarty will decide together whether your first visit makes more sense in person or on video.",
    },
    {
      q: "How much does treatment cost?",
      a: "The front desk can confirm current rates and payment options before you start. If cost is a worry, ask anyway. We will help you find a path.",
    },
    {
      q: "Is my treatment confidential?",
      a: "Your care is protected by HIPAA and by additional federal rules specific to substance use treatment (42 CFR Part 2). Your records are not shared without your written consent.",
    },
  ],
  related: [
    {
      title: "Telehealth",
      body: "Secure video visits for induction, check-ins, and ongoing buprenorphine care, wherever you are.",
      href: "/services/telehealth",
    },
    {
      title: "Primary Care",
      body: "A board-certified family physician for the rest of your health, coordinated alongside your recovery.",
      href: "/services/primary-care",
    },
    {
      title: "Preventive Care",
      body: "Wellness visits, screenings, and lab work to rebuild whole-body health over time.",
      href: "/services/preventive-care",
    },
  ],
};

export default function AddictionMedicinePage() {
  return <ServicePage {...content} />;
}
