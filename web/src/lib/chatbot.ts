import {
  carePackageIncludesLabel,
  carePackages,
  carePackagesDisclaimer,
  services,
  site,
} from "@/lib/site";

export type ChatbotReply = {
  title: string;
  body: string;
  href?: string;
  ctaLabel?: string;
};

type ChatbotTopic = ChatbotReply & {
  /**
   * Curated keywords only — never derived from prose. Single words score +1
   * (deduped), multi-word phrases score +3 on substring match.
   */
  keywords: string[];
};

export const chatbotQuickPrompts = [
  "What services do you offer?",
  "Tell me about care packages",
  "How do I book a visit?",
  "Where is the hospital?",
] as const;

/**
 * Common English words are never allowed to score — prose-derived stopword
 * matches were hijacking topic routing (see code review 2026-08-25).
 */
const STOPWORDS = new Set([
  "the", "and", "for", "you", "your", "our", "are", "was", "were", "can",
  "could", "would", "should", "how", "what", "who", "why", "when", "this",
  "that", "with", "from", "have", "has", "had", "does", "did", "get", "got",
  "will", "there", "here", "they", "them", "their", "its", "into", "not",
  "but", "all", "any", "more", "much", "some", "one", "also", "just", "like",
  "than", "then", "please", "hello", "still", "about", "need", "want",
]);

function normalize(text: string): string {
  // Strip apostrophes first so "what's" -> "whats", never a stray "s" token.
  // Hyphens become spaces so "check-ups"/"x-rays" match their spaced keywords
  // (keywords pass through this same function, keeping both sides consistent).
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/-/g, " ")
    .replace(/[^a-z0-9\s]/g, " ");
}

function tokenize(text: string): Set<string> {
  return new Set(
    normalize(text)
      .split(/\s+/)
      .filter((w) => w.length >= 3 && !STOPWORDS.has(w)),
  );
}

/**
 * Manual regression matrix — re-check after editing topics or keywords:
 *   "What services do you offer?"      -> Our services
 *   "Tell me about care packages"      -> Care packages
 *   "Do you treat children?"           -> Pediatrics
 *   "Do you do x-rays?"                -> Diagnostic Imaging & X-ray
 *   "Do you have a pharmacy?"          -> Pharmacy
 *   "Do you have a laboratory?"        -> Laboratory
 *   "Do you do lab tests?"             -> Laboratory
 *   "Do you accept <a US insurer>?"    -> safe fallback (never claims acceptance)
 *   "Is the hospital open for emergencies?" -> Emergency care (weighted topic)
 *   "Where is the hospital?"           -> Location and hours
 *   "How do I book a visit?"           -> Booking a visit
 *   "I can't breathe"                  -> Emergency care
 */

/** Curated per-service aliases — patient vocabulary, no prose splatting. */
const serviceAliases: Record<string, string[]> = {
  "general-medicine": [
    "family doctor", "general medicine", "check up doctor", "consultation",
    "sick", "fever", "malaria", "typhoid", "wellness", "physical",
  ],
  "internal-medicine": [
    "internal", "blood pressure", "hypertension", "diabetes", "chronic",
    "sugar",
  ],
  pediatrics: [
    "pediatric", "pediatrics", "paediatric", "paediatrics", "child",
    "children", "kids", "baby", "babies", "infant", "immunization",
    "immunizations", "vaccination", "vaccinations", "vaccine", "vaccines",
  ],
  "emergency-services": [
    "emergency room", "casualty", "accident", "accidents", "trauma",
    "injury", "injuries",
  ],
  laboratory: [
    "laboratory", "lab", "labs", "lab test", "lab tests", "blood test",
    "blood tests", "blood work", "urinalysis", "sample", "samples",
    "diagnostics", "results", "test", "tests",
  ],
  "eye-clinic": [
    "eye", "eyes", "vision", "glasses", "optical", "optician",
    "optometrist", "cataract", "eye test", "eye exam",
  ],
  pharmacy: [
    "pharmacy", "chemist", "drug", "drugs", "medication", "medications",
    "medicine", "medicines", "prescription", "prescriptions", "refill",
    "refills",
  ],
  "diagnostic-imaging": [
    "x-ray", "x-rays", "xray", "xrays", "scan", "scans", "ultrasound",
    "imaging", "radiology",
  ],
  ambulance: [
    "ambulance", "patient transport", "transport", "transfer", "pickup",
  ],
};

const serviceTopics: ChatbotTopic[] = services.map((service) => ({
  title: service.title,
  body: `${service.description} You can read more on the ${service.title} page, or book a visit if you are ready.`,
  href: `/services/${service.slug}`,
  ctaLabel: `View ${service.title}`,
  // Title as a phrase + distinctive words + curated aliases — never prose.
  keywords: [
    service.title.toLowerCase(),
    ...tokenize(service.title),
    ...(serviceAliases[service.slug] ?? []),
  ],
}));

const carePackageList = carePackages
  .map(
    (pkg) =>
      `${pkg.name}: ${pkg.tagline}. ${carePackageIncludesLabel(pkg)}: ${pkg.includes.join(", ")}.`,
  )
  .join("\n\n");

/**
 * Topic order matters: on tied scores the earlier topic wins, so emergencies
 * come first and the broad brand topic comes last.
 */
const topics: ChatbotTopic[] = [
  {
    title: "Emergency care",
    body: `This chat cannot help with emergencies or medical diagnosis. If this may be urgent, call 112 (emergency services) right now, or the hospital at ${site.contact.phoneDisplay}.`,
    href: "tel:112",
    ctaLabel: "Call 112 now",
    keywords: [
      "emergency", "emergencies", "urgent", "urgently", "chest pain",
      "heart attack", "cant breathe", "cannot breathe", "not breathing",
      "breathing", "breathe", "bleeding", "unconscious", "collapsed",
      "passed out", "fainting", "fainted", "stroke", "seizure", "seizures",
      "suicide", "kill myself", "hurt myself", "overdose", "overdosed",
      "severe", "dying",
    ],
  },
  {
    title: "Care packages",
    body: `Lebarty care packages are prepaid check-up bundles, not insurance plans. The current tiers are:\n\n${carePackageList}\n\n${carePackagesDisclaimer}`,
    href: "/care-packages",
    ctaLabel: "View care packages",
    keywords: [
      "care package", "care packages", "package", "packages", "checkup",
      "check-up", "checkups", "screening", "bundle", "bundles", "tier",
      ...carePackages.map((pkg) => pkg.slug),
    ],
  },
  // Specific services come before the generic topics so equal scores resolve
  // to the service the visitor actually named.
  ...serviceTopics,
  {
    title: "Our services",
    body: `We offer ${services.map((s) => s.title).join(", ")}. Each has its own page with details, or ask me about a specific one.`,
    href: "/services",
    ctaLabel: "View all services",
    // Deliberately narrow — specific service aliases must outrank this topic.
    keywords: ["service", "services", "specialties", "specialists", "departments"],
  },
  {
    title: "Booking a visit",
    body: `You can book a visit online, call ${site.contact.phoneDisplay}, or contact the team with questions before scheduling. For urgent symptoms, call the hospital directly instead of waiting for this chat.`,
    href: "/book",
    ctaLabel: "Book a visit",
    keywords: [
      "book", "booking", "book a visit", "book an appointment",
      "make an appointment", "appointment", "appointments", "schedule",
      "scheduling", "see doctor", "see a doctor", "see the doctor",
      "doctor", "reserve", "availability",
    ],
  },
  {
    title: "Location and hours",
    body: `${site.location.name} is in ${site.location.city}, ${site.location.region}: ${site.location.street}. Hours are ${site.location.hours
      .map((item) => `${item.days}: ${item.hours}`)
      .join("; ")}.`,
    href: "/locations/benin-city",
    ctaLabel: "View location",
    keywords: [
      "where", "location", "address", "directions", "map", "hours", "open",
      "opening", "close", "closing", "benin", "edo", "airport road",
      "aruogba", "arogba", "hospital", "park", "parking",
    ],
  },
  {
    title: "Contact",
    body: `Call ${site.contact.phoneDisplay} in Nigeria or ${site.contact.usPhoneDisplay} in the U.S. You can also email ${site.contact.email}.`,
    href: "/contact",
    ctaLabel: "Contact us",
    keywords: [
      "contact", "phone", "call", "email", "number", "front desk", "reach",
      "speak", "talk",
    ],
  },
  {
    title: "Insurance and payment",
    body: `Insurance and payment options are confirmed directly by the front desk. Call ${site.contact.phoneDisplay} before your visit to check your cover. The Payment & billing page has more detail.`,
    href: "/patients/insurance",
    ctaLabel: "Payment options",
    keywords: [
      "insurance", "insured", "coverage", "cover", "nhis", "hmo", "pay",
      "payment", "bill", "billing", "cost", "price", "prices", "fees",
    ],
  },
  {
    title: "Patients and forms",
    body: "The Patients page covers what to bring, new-patient information, intake forms, and the patient portal. If anything is unclear the front desk can walk you through it.",
    href: "/patients",
    ctaLabel: "Patient information",
    keywords: [
      "patient", "patients", "portal", "patient portal", "forms", "intake",
      "new patient", "records", "prepare",
    ],
  },
  {
    title: "The Foundation",
    body: "The Lebarty Community Health Foundation supports community health work across Africa: village clinics, mobile outreach, maternal and child health, and health-worker training. Every hospital visit helps fund it.",
    href: "/foundation",
    ctaLabel: "View the Foundation",
    keywords: [
      "foundation", "donate", "donation", "giving", "charity", "africa",
      "community", "clinic", "clinics", "outreach", "programs",
    ],
  },
  {
    title: "About Lebarty Medicare Hospital",
    body: `${site.location.name} is a hospital in ${site.location.city}, ${site.location.region}, offering general medicine, pediatrics, emergency services, laboratory care and more, with the Lebarty Community Health Foundation funding community clinics across Africa.`,
    href: "/about/dr-lebarty",
    ctaLabel: "About",
    // "medicare" alone is deliberately NOT a keyword — it would hijack
    // US-insurance questions; the full brand phrase carries the intent.
    keywords: [
      "lebarty medicare", "lebarty", "medi-care", "founder", "team",
      "doctors", "nosa", "about us",
    ],
  },
];

/** Precomputed per-topic match sets — built once at module load. */
const compiledTopics = topics.map((topic) => {
  const single = new Set<string>();
  const phrases: string[] = [];
  for (const keyword of topic.keywords) {
    const key = normalize(keyword).replace(/\s+/g, " ").trim();
    if (!key) continue;
    if (key.includes(" ")) phrases.push(key);
    else single.add(key);
  }
  // Emergency matches always outrank incidental overlaps with other topics.
  const weight = topic.title === "Emergency care" ? 3 : 1;
  return { topic, single, phrases, weight };
});

export function getChatbotReply(question: string): ChatbotReply {
  const trimmed = question.trim();

  if (!trimmed) {
    return {
      title: "Ask me anything",
      body: "I can help with services, care packages, booking, location, insurance, and the Foundation.",
      href: "/contact",
      ctaLabel: "Contact the team",
    };
  }

  const normalized = normalize(trimmed).replace(/\s+/g, " ");
  const words = tokenize(trimmed);

  let bestTopic: ChatbotTopic | null = null;
  let bestScore = 0;

  for (const { topic, single, phrases, weight } of compiledTopics) {
    let score = 0;
    for (const phrase of phrases) {
      if (normalized.includes(phrase)) score += 3;
    }
    for (const word of words) {
      if (single.has(word)) score += 1;
    }
    score *= weight;
    // Strict > keeps the earlier (higher-priority) topic on ties.
    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }

  if (bestTopic) {
    const { keywords: _keywords, ...reply } = bestTopic;
    return reply;
  }

  return {
    title: "I can point you in the right direction",
    body: `I am a simple website-trained helper, so I answer from Lebarty's published site information. For anything specific to your health, bill, lab result, or appointment, please call ${site.contact.phoneDisplay} or send the team a message.`,
    href: "/contact",
    ctaLabel: "Contact the team",
  };
}
