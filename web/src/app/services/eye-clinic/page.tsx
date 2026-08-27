import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Eye Clinic: Eye Exams, Vision Testing & Glasses",
  description:
    "Eye clinic at Lebarty Medicare Hospital in Benin City: eye examinations, vision testing, glasses prescriptions, and care for common eye conditions, explained plainly.",
  alternates: { canonical: "/services/eye-clinic" },
};

const content: ServiceContent = {
  eyebrow: "Eye clinic · Benin City, Edo State",
  title: "Clear sight, close to home.",
  intro:
    "Eye examinations, vision testing, and glasses prescriptions at the hospital you already know. The clinic manages common eye conditions on site, and when a problem needs specialist surgery, your doctor arranges the referral and stays involved in your care.",
  heroImage: assets.services["eye-clinic"],
  featureImage: assets.services["eye-clinic"],
  overviewTitle: "Everyday eye care, done properly.",
  overview: [
    "Most eye problems do not need a big hospital in another city. They need someone who looks carefully, tests properly, and explains what they find. The eye clinic covers exactly that: routine eye examinations, vision testing, and treatment for the conditions that bring most people in, like itching, redness, blurred vision, and headaches from eye strain.",
    "If you need glasses, the clinic tests your vision and writes a clear prescription. The team also keeps a close watch on eyes affected by conditions like diabetes and high blood pressure, working alongside the doctors who manage the rest of your health under the same roof.",
    "Some conditions, such as advanced cataract or glaucoma that needs surgery, call for a specialist surgeon. When that happens, the clinic refers you to a trusted centre, sends your records ahead, and follows up with you afterwards. You are never simply handed a letter and left to figure out the rest.",
  ],
  expectTitle: "What the eye clinic covers.",
  expect: [
    "Full eye examinations for adults and children",
    "Vision testing and glasses prescriptions",
    "Care for common conditions: infections, allergies, dry and red eyes",
    "Eye checks for people living with diabetes or high blood pressure",
    "Referrals for specialist surgery, with your records sent ahead",
    "Findings explained plainly, with a clear plan before you leave",
  ],
  steps: [
    {
      title: "Book your visit",
      body: "Call the front desk or book online. If you already wear glasses or use eye drops, bring them along so the team can see what you are working with.",
    },
    {
      title: "Have your examination",
      body: "The clinician examines your eyes, tests your vision, and asks about your health history, since many eye problems start elsewhere in the body.",
    },
    {
      title: "Leave with a plan",
      body: "You go home with a diagnosis you understand: a prescription, a treatment, a review date, or a referral arranged for you if surgery is needed.",
    },
  ],
  faqs: [
    {
      q: "How often should I have my eyes checked?",
      a: "For most adults, an eye examination every one to two years is sensible, and yearly if you live with diabetes, high blood pressure, or a family history of glaucoma. Children should be checked early, especially if they squint, sit very close to screens, or struggle at school.",
    },
    {
      q: "Can I get glasses through the clinic?",
      a: "The clinic tests your vision and gives you an accurate glasses prescription. Call the front desk to confirm what is currently available on site for frames and lenses, and where nearby your prescription can be filled if needed.",
    },
    {
      q: "Do you see children?",
      a: "Yes. Children's eye checks are gentle and unhurried, and the clinic works closely with the pediatric team when a child's vision problem is part of a wider health picture.",
    },
    {
      q: "What if I need eye surgery?",
      a: "Conditions that need surgery, such as advanced cataract, are referred to a trusted specialist centre. Your doctor explains why, sends your records ahead, and reviews you after the procedure so your follow-up care stays close to home.",
    },
    {
      q: "How much does an eye clinic visit cost?",
      a: "Rates depend on the examination and any treatment you need. The front desk confirms current rates and any HMO or insurance cover before your visit, so there are no surprises.",
    },
  ],
  related: [
    {
      title: "Internal Medicine",
      body: "Diabetes and high blood pressure often show up in the eyes first. The teams share one chart and one plan.",
      href: "/services/internal-medicine",
    },
    {
      title: "Pharmacy",
      body: "Eye drops and other prescribed medicines, filled on site after your visit with clear guidance on how to use them.",
      href: "/services/pharmacy",
    },
    {
      title: "General Medicine",
      body: "For everything beyond your eyes: consultations, check-ups, and continuous care from doctors who know you.",
      href: "/services/general-medicine",
    },
  ],
};

export default function EyeClinicPage() {
  return <ServicePage {...content} />;
}
