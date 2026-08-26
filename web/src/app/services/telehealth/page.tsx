import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Telehealth — virtual visits with Dr. Lebarty",
  description:
    "Secure video visits with the Lebarty Medicare team. Same physician, same chart, scheduled around your life.",
  alternates: { canonical: "/services/telehealth" },
};

const content: ServiceContent = {
  eyebrow: "Telehealth · Benin City, Edo State",
  title: "Care that travels with you.",
  intro:
    "Real visits, on video, with the same physician you would see in person. Telehealth works well for follow-ups, refills, addiction-medicine check-ins, urgent questions, and anything that does not require a hands-on exam, all without the drive, the parking, or the waiting room.",
  heroImage: assets.pages.telehealth,
  overviewTitle: "The same doctor, on the other end of a screen.",
  overview: [
    "Telehealth is not a different practice or a stranger reading from a script. It is Dr. Nosa Lebarty, MD, looking at the same chart and continuing the same plan of care, just from wherever you happen to be. For many visits, that convenience makes the difference between getting care now and putting it off.",
    "Visits run on a HIPAA-secure video connection, and you do not need to install a special app: a phone, tablet, or computer with a camera is enough. The front desk can confirm the cost of a video visit before you book.",
    "Telehealth is a good fit for chronic-condition follow-ups, medication refills, lab-result reviews, minor concerns, and ongoing addiction-medicine care. When a visit truly needs a physical exam, Dr. Lebarty will tell you plainly and bring you into the office instead.",
  ],
  featureImage: assets.services["telehealth"],
  expectTitle: "What telehealth covers well.",
  expect: [
    "HIPAA-secure video, with no special app required",
    "Available wherever you have a stable connection",
    "Clear pricing for video visits, confirmed by the front desk before you book",
    "Suboxone induction and ongoing buprenorphine care available by video",
    "Evening slots most weekdays for visits that fit around work",
    "Same physician, same chart, no starting over with someone new",
  ],
  steps: [
    {
      title: "Book your visit",
      body: "Schedule online or by phone and choose telehealth. We confirm your appointment and send a secure video link.",
    },
    {
      title: "Join from anywhere",
      body: "Open the link at your appointment time on any device with a camera. No app download, no waiting room.",
    },
    {
      title: "Leave with a plan",
      body: "Dr. Lebarty handles refills, orders, and referrals during the visit, and follows up by video or in person as needed.",
    },
  ],
  faqs: [
    {
      q: "Do I need to download an app?",
      a: "No. Telehealth visits open in a secure browser link. Any phone, tablet, or computer with a camera and microphone will work.",
    },
    {
      q: "Which visits are a good fit for telehealth?",
      a: "Follow-ups, medication refills, lab-result reviews, addiction-medicine check-ins, and many minor concerns work well by video. Visits that need a hands-on exam are better in person, and Dr. Lebarty will tell you if that is the case.",
    },
    {
      q: "Is telehealth covered by insurance?",
      a: "Video visits are priced like regular consultations in most cases. Call the front desk to confirm the current rate and your payment options before you book.",
    },
    {
      q: "Can I start or continue Suboxone on telehealth?",
      a: "Yes. Telehealth induction and ongoing buprenorphine visits are available, so addiction-medicine care can begin and continue by video.",
    },
    {
      q: "Where do I need to be for a telehealth visit?",
      a: "Anywhere private with a stable connection: home, work, or wherever you can talk freely.",
    },
  ],
  related: [
    {
      title: "Primary Care",
      body: "A continuous relationship with a board-certified family physician, in the office or on video.",
      href: "/services/primary-care",
    },
    {
      title: "Addiction Medicine",
      body: "Judgment-free treatment for opioid use disorder, with telehealth induction available.",
      href: "/services/addiction-medicine",
    },
    {
      title: "Preventive Care",
      body: "Wellness visits, screenings, and lab work coordinated with your primary-care plan.",
      href: "/services/preventive-care",
    },
  ],
};

export default function TelehealthPage() {
  return <ServicePage {...content} />;
}
