import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Diagnostic Imaging & X-ray: Scans in Benin City",
  description:
    "X-ray and ultrasound imaging at Lebarty Medicare Hospital in Benin City, supporting diagnosis across the hospital, with results reviewed together with your clinician.",
  alternates: { canonical: "/services/diagnostic-imaging" },
};

const content: ServiceContent = {
  eyebrow: "Imaging & X-ray · Benin City, Edo State",
  title: "A clearer look inside.",
  intro:
    "X-ray and ultrasound imaging on site, supporting diagnosis across the whole hospital. Your scan happens where your doctor works, so results move quickly, and someone who knows your case sits down with you to explain what the images show.",
  heroImage: assets.services["diagnostic-imaging"],
  featureImage: assets.services["diagnostic-imaging"],
  overviewTitle: "Imaging that answers a question.",
  overview: [
    "A scan is only useful if it answers the question your doctor is asking. That is how imaging works here: your clinician orders the study, the imaging team performs it on site, and the result goes straight back into your chart. Whether it is a chest X-ray for a stubborn cough, an X-ray after a fall, or an ultrasound of the abdomen or a pregnancy, the scan serves the treatment.",
    "Because imaging sits inside the hospital, it supports every other service: general medicine, internal medicine, pediatrics, and the emergency room. There is no carrying films across town and no waiting days for a report to travel back. Available studies grow over time, so for a specific scan, call the front desk and they will confirm current availability.",
    "You never leave decoding a report alone. Your clinician reviews the images with you, explains what was found and what was ruled out, and connects the result to the next step in your care, whether that is treatment, a repeat scan later, or simple reassurance.",
  ],
  expectTitle: "What imaging covers.",
  expect: [
    "X-ray imaging for the chest, bones, and joints",
    "Ultrasound scans, including abdominal and pregnancy scans",
    "Imaging ordered as part of visits across the hospital",
    "Clear preparation instructions when a scan needs them",
    "Results reviewed with you by your clinician, in plain language",
    "Findings folded into one chart alongside your lab results",
  ],
  steps: [
    {
      title: "Get a scan ordered",
      body: "Your clinician orders the study during a visit, or you can call the front desk to confirm availability for a specific scan before coming in.",
    },
    {
      title: "Have your scan",
      body: "The imaging team takes you through the study on site, with clear instructions before and during. Most scans are quick and painless.",
    },
    {
      title: "Review the results",
      body: "The images and report go to your clinician, who sits with you, explains what they show, and agrees the next step with you.",
    },
  ],
  faqs: [
    {
      q: "Is an X-ray safe?",
      a: "Modern X-ray equipment uses low doses of radiation, and a single study is considered very safe for most people. Tell the team if you are pregnant or think you might be, so they can choose the safest approach, which is often an ultrasound instead.",
    },
    {
      q: "Do I need an appointment for a scan?",
      a: "Scans ordered during a visit usually happen as part of that visit. For a standalone scan or one requested elsewhere, call the front desk first: they confirm availability and book you a time.",
    },
    {
      q: "Do I need to prepare before an ultrasound?",
      a: "Some scans need preparation, such as a full bladder for certain pelvic scans or a fasting window for some abdominal scans. You will be told exactly what to do when the scan is booked.",
    },
    {
      q: "Can I bring scans done elsewhere?",
      a: "Yes, please do. Previous images and reports help your clinician compare, see what has changed, and avoid repeating a study unnecessarily.",
    },
    {
      q: "How much does a scan cost?",
      a: "Prices depend on the study. The front desk confirms current rates and any HMO or insurance cover before your visit, so you know the cost before the scan happens.",
    },
  ],
  related: [
    {
      title: "Laboratory",
      body: "Blood work and diagnostic testing on site. Imaging and lab results land in the same chart, read by the same team.",
      href: "/services/laboratory",
    },
    {
      title: "Emergency Services",
      body: "Urgent imaging when minutes matter, with the emergency team and imaging under one roof.",
      href: "/services/emergency-services",
    },
    {
      title: "Internal Medicine",
      body: "Ongoing care for chronic conditions, guided by imaging and lab results tracked over time.",
      href: "/services/internal-medicine",
    },
  ],
};

export default function DiagnosticImagingPage() {
  return <ServicePage {...content} />;
}
