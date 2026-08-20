import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "USCIS Civil Surgeon — I-693 Medical Exams",
  description:
    "Form I-693 immigration medical examinations by Dr. Nosa Lebarty, MD, a USCIS-designated civil surgeon. Required vaccinations on site, sealed envelope, completed correctly in one visit.",
  alternates: { canonical: "/services/civil-surgeon-uscis-exams" },
};

const content: ServiceContent = {
  eyebrow: "USCIS civil surgeon",
  title: "I-693 exams — done right the first time.",
  intro:
    "Dr. Nosa Lebarty, MD is designated by U.S. Citizenship and Immigration Services as a civil surgeon, qualified to perform the Form I-693 medical examination for adjustment-of-status applicants. Most exams are completed in a single visit, with the required vaccinations available on site.",
  heroImage: assets.pages.civilSurgeon,
  overviewTitle: "The immigration medical exam, made simple.",
  overview: [
    "If you are applying to adjust your immigration status, USCIS requires a medical examination — Form I-693 — completed by a physician it has specifically designated as a civil surgeon. Dr. Lebarty holds that designation, so your exam is performed and certified by a physician USCIS already recognizes.",
    "The exam reviews your medical history, checks for conditions of public-health concern, includes tuberculosis screening, and confirms your vaccination record. When vaccinations are missing, they are given on site during the same appointment — there is no need to track down a second clinic or a separate visit.",
    "When the exam is complete, Dr. Lebarty fills out Form I-693 correctly and seals it in the official envelope required by USCIS. You leave with that sealed envelope to submit with your application — the most common reason these forms are rejected is a paperwork error, and that is exactly what careful, experienced completion prevents.",
  ],
  featureImage: assets.services["civil-surgeon-uscis-exams"],
  expectTitle: "What the I-693 exam includes.",
  expect: [
    "A complete Form I-693 medical examination by a USCIS-designated civil surgeon",
    "Review of medical history and a physical examination",
    "Tuberculosis screening",
    "Required vaccinations administered on site during the same visit",
    "Form I-693 completed accurately and sealed in the official USCIS envelope",
    "Most exams finished in one visit, with same-week appointments most weeks",
  ],
  steps: [
    {
      title: "Book your exam",
      body: "Call or book online. We will tell you what to bring — photo ID, your vaccination records, and any relevant medical history.",
    },
    {
      title: "Complete the visit",
      body: "Dr. Lebarty reviews your history, performs the exam and TB screening, and provides any vaccinations you still need.",
    },
    {
      title: "Take the sealed form",
      body: "Form I-693 is completed and sealed in the official USCIS envelope. You leave ready to submit it with your application.",
    },
  ],
  faqs: [
    {
      q: "What is a civil surgeon?",
      a: "A civil surgeon is a physician specifically designated by U.S. Citizenship and Immigration Services to perform the I-693 immigration medical examination. Dr. Lebarty holds that designation.",
    },
    {
      q: "What should I bring to my exam?",
      a: "Bring a government-issued photo ID and your vaccination records. If you have a history of tuberculosis or other relevant conditions, bring those records too. The office will confirm the full list when you book.",
    },
    {
      q: "Can I get my vaccinations during the same visit?",
      a: "Yes. Any required vaccinations you are missing can be given on site during the exam, so you do not need a separate appointment elsewhere.",
    },
    {
      q: "Will the form be ready the same day?",
      a: "In most cases, yes. Form I-693 is completed and sealed in the official USCIS envelope during your visit. If a test result needs to come back first, the office will let you know.",
    },
    {
      q: "Should I open the sealed envelope?",
      a: "No. The completed Form I-693 must reach USCIS in the sealed envelope. Opening it can invalidate the form — submit it to USCIS unopened.",
    },
  ],
  related: [
    {
      title: "Primary Care",
      body: "Once your exam is done, a board-certified family physician for the rest of your health.",
      href: "/services/primary-care",
    },
    {
      title: "Preventive Care",
      body: "Wellness visits, screenings, and lab work to stay healthy after you settle in.",
      href: "/services/preventive-care",
    },
    {
      title: "Telehealth",
      body: "Secure video visits for follow-ups and questions, available across New York.",
      href: "/services/telehealth",
    },
  ],
};

export default function CivilSurgeonUscisExamsPage() {
  return <ServicePage {...content} />;
}
