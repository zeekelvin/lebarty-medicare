import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Preventive Care — Annual Physicals & Screenings",
  description:
    "Wellness visits, age-appropriate screenings, lab work, and women's and men's health with Dr. Nosa Lebarty, MD — coordinated as one continuous primary-care plan.",
  alternates: { canonical: "/services/preventive-care" },
};

const content: ServiceContent = {
  eyebrow: "Preventive care · Benin City, Edo State",
  title: "The visits that prevent the visits.",
  intro:
    "Annual wellness, screenings calibrated to your age and history, lab work, and women's and men's health — coordinated as part of one continuous primary-care plan. Preventive care is the quiet work that keeps small concerns from becoming serious ones.",
  heroImage: assets.pages.preventiveCare,
  overviewTitle: "Health you can stay ahead of.",
  overview: [
    "Most of the conditions that affect adults the most — heart disease, diabetes, several cancers — give early signals long before they cause symptoms. Preventive care is how those signals get noticed in time. A yearly wellness visit, the right screenings, and routine lab work together build a picture of your health that updates year after year.",
    "Dr. Nosa Lebarty, MD tailors preventive care to you rather than to a generic checklist. Your age, family history, and personal risk factors decide which screenings make sense and when — so you are not over-tested, and nothing important is missed.",
    "Because preventive care lives inside your primary-care relationship, every result lands in the same chart with the same physician. A borderline number this year becomes a trend to watch next year, and small changes get caught while they are still easy to address.",
  ],
  featureImage: assets.services["preventive-care"],
  expectTitle: "What preventive care covers.",
  expect: [
    "Annual wellness visits and physicals with time to talk",
    "Lab work in-house and through partner labs",
    "Cancer screenings — colorectal, breast, cervical, and prostate",
    "Cardiometabolic risk assessment for heart disease and diabetes",
    "Dedicated women's health and men's health visits",
    "Smoking-cessation support and practical lifestyle counseling",
  ],
  steps: [
    {
      title: "Schedule a wellness visit",
      body: "Book your annual visit by phone or online. We will note your age and history so the right screenings are ready.",
    },
    {
      title: "Review and screen",
      body: "Dr. Lebarty reviews your history and risk factors, orders the screenings and lab work that fit, and discusses results with you.",
    },
    {
      title: "Build the plan",
      body: "Findings feed into your ongoing primary-care plan, so trends are tracked and follow-up happens at the right time.",
    },
  ],
  faqs: [
    {
      q: "How often should I have a wellness visit?",
      a: "For most adults, once a year is the right rhythm. Dr. Lebarty may recommend a different schedule based on your health and risk factors.",
    },
    {
      q: "Which screenings will I need?",
      a: "That depends on your age, family history, and personal risk. Rather than running every test, Dr. Lebarty recommends the screenings that are appropriate for you and skips the ones that are not.",
    },
    {
      q: "Is preventive care covered by insurance?",
      a: "Most insurance plans cover annual wellness visits and recommended preventive screenings, often at no cost to you. The office can help you confirm what your plan includes.",
    },
    {
      q: "Do you offer women's and men's health visits?",
      a: "Yes. Preventive care includes dedicated women's health and men's health visits, with screenings and counseling tailored to each.",
    },
    {
      q: "How is this different from primary care?",
      a: "Preventive care is one part of primary care — the proactive, stay-ahead-of-problems part. It lives inside the same continuous relationship and the same chart with Dr. Lebarty.",
    },
  ],
  related: [
    {
      title: "Primary Care",
      body: "A continuous relationship with a board-certified family physician for your whole household.",
      href: "/services/primary-care",
    },
    {
      title: "Telehealth",
      body: "Secure video visits for follow-ups, lab-result reviews, and routine questions.",
      href: "/services/telehealth",
    },
    {
      title: "USCIS Civil Surgeon Exams",
      body: "Form I-693 immigration medical exams by a USCIS-designated civil surgeon, completed in one visit.",
      href: "/services/civil-surgeon-uscis-exams",
    },
  ],
};

export default function PreventiveCarePage() {
  return <ServicePage {...content} />;
}
