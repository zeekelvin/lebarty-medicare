import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Pediatrics: Child Health, Immunizations & Growth Checks",
  description:
    "Pediatric care at Lebarty Medicare Hospital in Benin City: check-ups, immunizations, childhood illness, and growth monitoring for babies, children, and teens.",
  alternates: { canonical: "/services/pediatrics" },
};

const content: ServiceContent = {
  eyebrow: "Pediatrics · Benin City, Edo State",
  title: "Little patients, full attention.",
  intro:
    "Care for babies, children, and teenagers, from the first weeks of life through the growing years. Check-ups, immunizations, treatment when illness strikes, and steady growth monitoring, delivered gently and explained in a way that leaves parents confident, not confused.",
  heroImage: assets.services["pediatrics"],
  featureImage: assets.services["pediatrics"],
  overviewTitle: "Growing up, looked after.",
  overview: [
    "Children are not small adults. Their illnesses move differently, their doses are different, and a visit works best when the pace is set by the child, not the clock. The pediatric clinic is built around that: unhurried consultations where a child is examined gently, a worried parent is heard fully, and every finding is explained in plain language.",
    "Routine care is the backbone. Well-child check-ups track weight, height, and development against expected milestones, so slow changes are caught early rather than discovered late. Immunizations are given on schedule, with the front desk confirming current vaccine availability so you never make the trip for nothing. When your child is unwell, common childhood illnesses like malaria, fevers, coughs, and stomach upsets are diagnosed and treated here, with the on-site laboratory confirming what examination suggests.",
    "Just as important is what you take home. Every visit ends with clear guidance for parents: what the diagnosis means, how to give the treatment, what is normal in recovery, and exactly which warning signs mean you should come back or go straight to the emergency unit.",
  ],
  expectTitle: "What pediatric care covers.",
  expect: [
    "Well-child check-ups for babies, children, and teens",
    "Immunizations, with availability confirmed by the front desk",
    "Diagnosis and treatment of common childhood illnesses",
    "Growth and development monitoring against milestones",
    "Gentle examinations at a pace set by the child",
    "Clear guidance for parents at the end of every visit",
  ],
  steps: [
    {
      title: "Book a visit",
      body: "Call the front desk to book a check-up, immunization, or sick visit. If your child is seriously unwell, do not book and wait: call 112 or come straight to the emergency unit.",
    },
    {
      title: "See the doctor together",
      body: "The doctor examines your child gently, listens to your observations as a parent, and orders any tests from the on-site laboratory if they are needed.",
    },
    {
      title: "Leave with a clear plan",
      body: "You go home knowing the diagnosis, the treatment, what recovery should look like, and the exact warning signs that mean you should return.",
    },
  ],
  faqs: [
    {
      q: "How do I arrange my child's immunizations?",
      a: "Call the front desk with your child's age and immunization card details. They confirm current vaccine availability, book the visit, and let you know if anything on the schedule needs to be planned for a later date. Bring the card to every visit so the record stays complete.",
    },
    {
      q: "My child has a fever. Should I book a visit or come in now?",
      a: "A mild fever in an otherwise alert child can usually wait for a booked visit. But a fever with convulsions, difficulty breathing, persistent vomiting, unusual drowsiness, or in a baby under three months is urgent: call 112 or bring your child straight to the emergency unit. When in doubt, come in.",
    },
    {
      q: "What happens at a well-child check-up?",
      a: "The doctor measures weight and height, checks development against expected milestones, examines your child from head to toe, and answers your questions about feeding, sleep, and behaviour. It is the best way to catch small concerns before they grow.",
    },
    {
      q: "Can my child's malaria test and treatment happen in one visit?",
      a: "In most cases, yes. The on-site laboratory runs the test during your visit, and treatment starts once the result is in, with doses worked out for your child's age and weight.",
    },
    {
      q: "What do pediatric visits cost, and is my HMO accepted?",
      a: "Rates and any HMO or insurance cover are confirmed by the front desk before your visit. Ask them about the care packages too; families often find bundled consultations and tests the more affordable route for growing children.",
    },
  ],
  related: [
    {
      title: "General Medicine",
      body: "Everyday consultations and check-ups for the adults in the family, under the same roof.",
      href: "/services/general-medicine",
    },
    {
      title: "Laboratory",
      body: "On-site testing for malaria, infections, and more, so a sick child is diagnosed in one visit.",
      href: "/services/laboratory",
    },
    {
      title: "Emergency Services",
      body: "Round-the-clock help when a child's illness or injury cannot wait for a booked visit.",
      href: "/services/emergency-services",
    },
  ],
};

export default function PediatricsPage() {
  return <ServicePage {...content} />;
}
