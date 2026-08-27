import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Pharmacy: Prescriptions, Refills & Medication Advice",
  description:
    "On-site pharmacy at Lebarty Medicare Hospital in Benin City: prescriptions filled after your visit, medication counseling, refills, and plain-language guidance on safe use.",
  alternates: { canonical: "/services/pharmacy" },
};

const content: ServiceContent = {
  eyebrow: "Pharmacy · Benin City, Edo State",
  title: "The right medicine, explained.",
  intro:
    "An on-site pharmacy means your visit does not end with a prescription slip and a search across town. Medicines are filled right after you see the doctor, with someone taking the time to explain what each one does, how to take it, and what to watch for.",
  heroImage: assets.services["pharmacy"],
  featureImage: assets.services["pharmacy"],
  overviewTitle: "From prescription to first dose, under one roof.",
  overview: [
    "When your doctor prescribes a medicine, the pharmacy fills it before you leave the building. No second trip, no guessing whether the chemist down the road stocks the right thing, and no gap between the decision and the treatment. The pharmacy team works from the same chart as your doctor, so what you collect matches exactly what was intended.",
    "Collecting medicine here is a conversation, not a handover. The team explains what each medicine is for, when to take it, whether food matters, and what side effects are worth a phone call. If you take several medicines, they check how the new one fits with the rest.",
    "For ongoing prescriptions, refills are straightforward: the pharmacy sees your history, so you do not start from zero each time. Stock changes as the pharmacy grows, so for a specific medicine, call the front desk and they will confirm current availability before you come in.",
  ],
  expectTitle: "What the pharmacy covers.",
  expect: [
    "Prescriptions filled on site, straight after your visit",
    "Medication counseling: what each medicine does and how to take it",
    "Refills for ongoing prescriptions, without starting over",
    "Guidance on doses, timing, and taking medicines with food",
    "Checks against your chart when you take several medicines",
    "Clear advice on side effects and missed doses",
  ],
  steps: [
    {
      title: "See your clinician",
      body: "Your doctor prescribes what you need during your visit, and the prescription goes straight to the pharmacy in the same building.",
    },
    {
      title: "Collect and understand",
      body: "The pharmacy team hands over your medicines and walks you through each one: what it is for, how to take it, and what to watch for.",
    },
    {
      title: "Refill without fuss",
      body: "When an ongoing prescription runs low, call the front desk. The pharmacy checks your chart and has the refill ready for you.",
    },
  ],
  faqs: [
    {
      q: "Can I fill a prescription from another hospital or clinic?",
      a: "Bring the prescription along. The pharmacist reviews it, checks that it is safe alongside anything else you take, and fills it if the medicine is in stock. Call the front desk first to confirm availability.",
    },
    {
      q: "Do you stock the medicine I take?",
      a: "Stock covers the medicines most commonly prescribed in the hospital and grows over time. For a specific medicine, call the front desk and they will confirm current availability before you make the trip.",
    },
    {
      q: "What if I miss a dose or notice side effects?",
      a: "Ask the pharmacy team when you collect your medicine, and they will tell you exactly what to do for that specific drug. If something worries you after you get home, call the hospital line rather than guessing.",
    },
    {
      q: "Can someone collect medicines on my behalf?",
      a: "Yes, a family member can collect a refill for you. Have them bring the details of the prescription, and call the front desk ahead so everything is ready when they arrive.",
    },
    {
      q: "How much do medicines cost?",
      a: "Prices depend on the medicine and the quantity prescribed. The front desk confirms current rates and any HMO or insurance cover before your visit, and the team will tell you the cost before anything is dispensed.",
    },
  ],
  related: [
    {
      title: "General Medicine",
      body: "Consultations and check-ups with doctors who prescribe carefully and follow up on how the medicine is working.",
      href: "/services/general-medicine",
    },
    {
      title: "Laboratory",
      body: "Tests that guide prescribing, done on site, so treatment decisions rest on results, not guesswork.",
      href: "/services/laboratory",
    },
    {
      title: "Care packages",
      body: "Silver, Gold, and Elite prepaid bundles, each built around a fixed list of consultations and lab tests.",
      href: "/care-packages",
    },
  ],
};

export default function PharmacyPage() {
  return <ServicePage {...content} />;
}
