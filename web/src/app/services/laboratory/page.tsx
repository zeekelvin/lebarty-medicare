import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Laboratory — Blood Work, Urinalysis & Diagnostics",
  description:
    "On-site laboratory services at Lebarty Medicare Hospital in Benin City: blood work, urinalysis, and diagnostic testing with clear results, explained plainly.",
  alternates: { canonical: "/services/laboratory" },
};

const content: ServiceContent = {
  eyebrow: "Laboratory · Benin City, Edo State",
  title: "Answers you can act on.",
  intro:
    "Blood work, urinalysis, and diagnostic testing on site, with results explained in plain language and folded straight into your care plan. No chasing paperwork between facilities: the test, the result, and the doctor who acts on it are all under one roof.",
  heroImage: assets.pages.laboratory,
  overviewTitle: "Testing that serves the treatment.",
  overview: [
    "Good decisions start with good information. The laboratory supports every service in the hospital, from a routine check-up to an urgent work-up. Testing is done on site, so results reach your doctor quickly and nothing is lost between facilities.",
    "Common tests include full blood count, blood sugar, kidney and liver panels, lipid profile, urinalysis, and screening tests for infections. Test availability changes as the laboratory grows, so call the front desk to confirm a specific test before your visit.",
    "Results are never just numbers on a slip. Your clinician walks you through what a result means, what it changes, and what happens next. Everything lands in the same chart your care team already works from.",
  ],
  featureImage: assets.pages.servicesHero,
  expectTitle: "What the laboratory covers.",
  expect: [
    "Blood work: full blood count, blood sugar, and organ panels",
    "Urinalysis and routine sample testing",
    "Screening tests supporting the care packages",
    "Pre-visit fasting guidance when a test needs it",
    "Results explained plainly by your clinician",
    "Coordination with your ongoing care plan",
  ],
  steps: [
    {
      title: "Get a test ordered",
      body: "A clinician orders your tests during a visit, or you can call the front desk to confirm availability for a specific test.",
    },
    {
      title: "Give your sample",
      body: "The laboratory team takes your sample on site: quick, careful, and with clear instructions if fasting or timing matters.",
    },
    {
      title: "Review your results",
      body: "Results go to your clinician, who explains what they mean and what happens next. Nothing is left for you to decode alone.",
    },
  ],
  faqs: [
    {
      q: "Do I need an appointment for a lab test?",
      a: "Tests ordered during a visit happen as part of that visit. For a standalone test, call the front desk first. They will confirm availability and whether you should fast beforehand.",
    },
    {
      q: "How long do results take?",
      a: "Many routine results are ready quickly; some tests take longer. The team will tell you the expected turnaround when your sample is taken.",
    },
    {
      q: "Do I need to fast before my test?",
      a: "Some tests, like fasting blood sugar and lipid profile, need a fasting window. You will be told exactly what to do when the test is booked.",
    },
    {
      q: "Can I bring results from another laboratory?",
      a: "Yes. Bring any recent results or scans to your visit. They help your clinician see trends and avoid repeating tests unnecessarily.",
    },
    {
      q: "How much do lab tests cost?",
      a: "Prices depend on the test. The front desk can quote current rates before your visit, and several common tests are bundled into the prepaid care packages.",
    },
  ],
  related: [
    {
      title: "Care packages",
      body: "Silver, Gold, and Elite prepaid bundles, each built around a fixed list of consultations and lab tests.",
      href: "/care-packages",
    },
    {
      title: "Preventive Care",
      body: "Annual wellness visits and screenings that put your lab results to work, year after year.",
      href: "/services/preventive-care",
    },
    {
      title: "Primary Care",
      body: "A continuous relationship with a physician who knows your history and tracks your results over time.",
      href: "/services/primary-care",
    },
  ],
};

export default function LaboratoryPage() {
  return <ServicePage {...content} />;
}
