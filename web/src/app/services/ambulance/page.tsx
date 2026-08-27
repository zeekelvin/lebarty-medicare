import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Ambulance & Patient Transport in Benin City",
  description:
    "Ambulance response and planned patient transport at Lebarty Medicare Hospital in Benin City. In an emergency call 112 or the hospital line; families can arrange transfers through the front desk.",
  alternates: { canonical: "/services/ambulance" },
};

const content: ServiceContent = {
  eyebrow: "Ambulance & transport · Benin City, Edo State",
  title: "Help on the way, when it matters.",
  intro:
    "Ambulance response for emergencies and planned transport for everything else: getting to an appointment, coming home after admission, or moving safely between facilities. In an emergency, call 112 or the hospital line immediately. For planned transport, one call to the front desk arranges it.",
  heroImage: assets.services["ambulance"],
  featureImage: assets.services["ambulance"],
  overviewTitle: "Two kinds of journey, one careful team.",
  overview: [
    "Some journeys cannot wait. When there is a collapse, a serious injury, severe bleeding, or sudden difficulty breathing, call 112 or the hospital line immediately and say where you are. The team guides you on what to do while help is on the way, and the emergency room is prepared before the patient arrives, so care starts the moment the doors open.",
    "Other journeys just need to be safe and planned. A patient who cannot sit comfortably in a car, an elderly parent coming in for admission, a discharge home after treatment, or a transfer to or from another facility: these are arranged in advance through the front desk, at a time that works for the family.",
    "Either way, the patient travels with trained hands, not just a driver. The transport team watches over the patient on the road, carries the essentials for the journey, and hands over properly to the clinical team at the other end, so nothing about the patient's condition is lost between the vehicle and the ward.",
  ],
  expectTitle: "What the service covers.",
  expect: [
    "Ambulance response for emergencies, day and night",
    "Planned transport to the hospital for appointments and admissions",
    "Safe journeys home after treatment or discharge",
    "Transfers between the hospital and other facilities",
    "A trained team caring for the patient throughout the journey",
    "Direct handover to the clinical team on arrival",
  ],
  steps: [
    {
      title: "Make the call",
      body: "In an emergency, call 112 or the hospital line immediately. For a planned journey, call the front desk and tell them who is travelling, from where, and when.",
    },
    {
      title: "The team comes to you",
      body: "The ambulance comes to your location. The team assesses the patient, makes them comfortable and stable, and cares for them throughout the drive.",
    },
    {
      title: "Care continues on arrival",
      body: "The transport team hands over directly to the doctors and nurses, with everything observed on the journey passed along, so treatment continues without a gap.",
    },
  ],
  faqs: [
    {
      q: "What should I do in an emergency?",
      a: "Call 112 or the hospital line immediately. Say where you are, what happened, and the state of the patient. Stay on the line: the team will tell you what to do while help is on the way.",
    },
    {
      q: "How do I arrange planned transport for a relative?",
      a: "Call the front desk. Tell them who is travelling, the pickup address, and when the journey is needed. They confirm the arrangements and the time with you before the day.",
    },
    {
      q: "Can the ambulance bring my relative home after discharge?",
      a: "Yes. Journeys home after admission or treatment are a normal part of the service. Ask the front desk or the ward team to arrange it as part of the discharge plan.",
    },
    {
      q: "How far can the ambulance travel?",
      a: "The service covers Benin City and the surrounding areas. For longer journeys, such as a transfer to a facility in another city, call the front desk and they will confirm what can be arranged.",
    },
    {
      q: "How much does ambulance transport cost?",
      a: "The cost depends on the distance and the care needed on the journey. The front desk confirms current rates and any HMO or insurance cover before a planned journey, and will explain the cost clearly when you call.",
    },
  ],
  related: [
    {
      title: "Emergency Services",
      body: "The emergency room the ambulance delivers to: urgent care that is ready before the patient arrives.",
      href: "/services/emergency-services",
    },
    {
      title: "General Medicine",
      body: "Consultations and continuing care once the journey is over, from doctors who follow your whole story.",
      href: "/services/general-medicine",
    },
    {
      title: "Care packages",
      body: "Silver, Gold, and Elite prepaid bundles, each built around a fixed list of consultations and lab tests.",
      href: "/care-packages",
    },
  ],
};

export default function AmbulancePage() {
  return <ServicePage {...content} />;
}
