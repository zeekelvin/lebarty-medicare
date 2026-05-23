import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Primary Care in Schenectady, NY",
  description:
    "Annual physicals, chronic-condition management, vaccinations, and preventive care with Dr. Nosa Lebarty, MD. New patients welcome — most insurance accepted.",
  alternates: { canonical: "/services/primary-care" },
};

const content: ServiceContent = {
  eyebrow: "Primary care · Schenectady, NY",
  title: "A doctor who knows you.",
  intro:
    "Annual physicals, chronic disease management, vaccinations, screenings, lab work, and referrals — all coordinated by a physician who has time for the conversation. Primary care is the home base for your health, and Dr. Lebarty builds it around continuity, not minutes-per-visit.",
  heroImage: assets.pages.primaryCare,
  overviewTitle: "Care that follows the whole story.",
  overview: [
    "Good primary care is less about any single visit and more about the relationship behind all of them. When the same physician sees you year after year, patterns become visible — a slow rise in blood pressure, a medication that stopped working, a worry you mentioned once and then again. That continuity is what catches problems early.",
    "Dr. Nosa Lebarty, MD is board-certified in Family Medicine, which means one physician can care for nearly everyone in your household, from young adults to grandparents. Visits are unhurried on purpose, so there is room to ask the question you almost did not bring up.",
    "Your chart stays in one place. Whether you are seen in the office or on a telehealth follow-up, it is the same doctor reading the same history — no repeating yourself, no gaps between providers.",
  ],
  featureImage: assets.services["primary-care"],
  expectTitle: "What your primary-care relationship includes.",
  expect: [
    "Annual physicals and wellness visits with time to talk",
    "Chronic-condition management — diabetes, hypertension, asthma, thyroid, and more",
    "Vaccinations and age-appropriate screenings",
    "In-house lab work and coordinated outside testing",
    "Same-week appointments for new patients",
    "Coordinated referrals to trusted specialists across the Capital Region",
  ],
  steps: [
    {
      title: "Reach out",
      body: "Call the office or book online. We will gather a little history and find an appointment that fits — usually within the week.",
    },
    {
      title: "Your first visit",
      body: "Dr. Lebarty reviews your health history, current medications, and goals, then handles anything pressing the same day.",
    },
    {
      title: "Stay connected",
      body: "Follow-ups, refills, and routine check-ins continue in the office or on telehealth — same physician, same chart, every time.",
    },
  ],
  faqs: [
    {
      q: "Are you accepting new patients?",
      a: "Yes. The practice welcomes new patients of all ages, and most are seen within a week of reaching out.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Bring a photo ID, your insurance card, a list of current medications and doses, and any recent test results or records you have. If you cannot gather everything, come anyway — we can request records on your behalf.",
    },
    {
      q: "Can I manage a chronic condition here?",
      a: "Absolutely. Ongoing conditions like diabetes, high blood pressure, and asthma are a core part of primary care. Dr. Lebarty will set a plan, monitor your numbers, and adjust treatment over time.",
    },
    {
      q: "Do you offer telehealth for primary care?",
      a: "Yes. Many follow-ups, medication checks, and routine questions can be handled by secure video visit, with the same physician you see in person.",
    },
    {
      q: "What insurance do you accept?",
      a: "The practice accepts Medicare, Medicaid Managed Care, and most major commercial plans. If you are unsure about your coverage, call the office and we will help you check.",
    },
  ],
  related: [
    {
      title: "Preventive Care",
      body: "Wellness visits, age-appropriate screenings, and lab work that keep small concerns from becoming big ones.",
      href: "/services/preventive-care",
    },
    {
      title: "Telehealth",
      body: "Secure video visits for follow-ups, refills, and questions — the same physician, wherever you are.",
      href: "/services/telehealth",
    },
    {
      title: "Addiction Medicine",
      body: "Judgment-free treatment for opioid use disorder, with Suboxone and medication-assisted care.",
      href: "/services/addiction-medicine",
    },
  ],
};

export default function PrimaryCarePage() {
  return <ServicePage {...content} />;
}
