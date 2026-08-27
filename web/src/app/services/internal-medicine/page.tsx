import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Internal Medicine: Hypertension, Diabetes & Chronic Care",
  description:
    "Internal medicine at Lebarty Medicare Hospital in Benin City: in-depth adult care for hypertension, diabetes, chronic conditions, and complex diagnosis.",
  alternates: { canonical: "/services/internal-medicine" },
};

const content: ServiceContent = {
  eyebrow: "Internal medicine · Benin City, Edo State",
  title: "Medicine that goes deeper.",
  intro:
    "In-depth care for adults living with hypertension, diabetes, and other chronic conditions, and careful detective work when symptoms refuse to explain themselves. This is unhurried medicine: one doctor, your full story, and a plan built for the long term, not just for today's visit.",
  heroImage: assets.services["internal-medicine"],
  featureImage: assets.services["internal-medicine"],
  overviewTitle: "For the conditions that stay.",
  overview: [
    "Some conditions are not cured in a single visit. High blood pressure, diabetes, and other chronic illnesses live with you for years, and managing them well is the difference between a full life and a series of crises. Internal medicine is built for exactly this: adult care that looks at the whole person, not just the complaint of the day.",
    "The work starts with a thorough review. Your history, your medications, your test results from the on-site laboratory, and how you actually feel day to day. From there, the doctor builds a management plan you can genuinely follow: medication that fits your life, targets you understand, and regular reviews to adjust course before small problems become big ones.",
    "Internal medicine is also where complex diagnosis happens. When symptoms overlap, when treatments elsewhere have not worked, or when several conditions interact, this is the clinic that takes the time to untangle them. Tests are ordered thoughtfully, results are explained plainly, and nothing is dismissed because it is difficult.",
  ],
  expectTitle: "What internal medicine covers.",
  expect: [
    "Diagnosis and long-term management of hypertension",
    "Diabetes care: monitoring, medication, and lifestyle guidance",
    "Ongoing management of other chronic adult conditions",
    "Careful work-up of complex or unexplained symptoms",
    "Medication reviews that consider everything you take",
    "Scheduled follow-ups that track progress over time",
  ],
  steps: [
    {
      title: "Book a consultation",
      body: "Call the front desk to book, or come by referral from a general medicine visit. Bring any medications and previous results you have; they all help.",
    },
    {
      title: "Get the full work-up",
      body: "The doctor reviews your history, examines you, and orders targeted tests from the on-site laboratory. The goal is a clear picture, not a quick label.",
    },
    {
      title: "Follow the plan together",
      body: "You leave with a written plan and a review schedule. Each follow-up checks what is working, adjusts what is not, and keeps you in control of your condition.",
    },
  ],
  faqs: [
    {
      q: "How is internal medicine different from a general consultation?",
      a: "General medicine handles everyday illness and check-ups. Internal medicine goes deeper: chronic conditions like hypertension and diabetes, symptoms that have resisted diagnosis, and adults whose care involves several conditions at once. Many patients arrive by referral from a general medicine visit.",
    },
    {
      q: "I was told my blood pressure is high. What should I do?",
      a: "Book a consultation so it can be properly assessed rather than guessed at. High blood pressure often has no symptoms, which is exactly why it needs monitoring. If you are currently having symptoms like severe headache, chest pain, or trouble breathing, do not wait for a booking: call 112 or come straight to the emergency unit.",
    },
    {
      q: "Can my diabetes be monitored entirely at the hospital?",
      a: "Yes. Blood sugar testing runs through the on-site laboratory, reviews happen with the same doctor who knows your history, and the pharmacy can dispense your prescriptions. The front desk confirms availability of specific tests before your visit.",
    },
    {
      q: "How often will I need follow-up visits?",
      a: "It depends on your condition and how stable it is. A newly diagnosed condition is usually reviewed more often, then visits spread out as things settle. Your doctor sets the schedule with you and explains why, so nothing feels arbitrary.",
    },
    {
      q: "What will treatment cost, and is my HMO accepted?",
      a: "Rates and any HMO or insurance cover are confirmed by the front desk before your visit. For long-term conditions, ask them about the care packages as well; ongoing consultations and routine tests are often more affordable when bundled.",
    },
  ],
  related: [
    {
      title: "General Medicine",
      body: "Everyday consultations and check-ups, and the most common starting point for a referral here.",
      href: "/services/general-medicine",
    },
    {
      title: "Laboratory",
      body: "On-site blood work and monitoring tests, with results explained and folded into your care plan.",
      href: "/services/laboratory",
    },
    {
      title: "Pharmacy",
      body: "Prescriptions dispensed on site, with guidance on taking long-term medication safely.",
      href: "/services/pharmacy",
    },
  ],
};

export default function InternalMedicinePage() {
  return <ServicePage {...content} />;
}
