/**
 * Single source of truth for site-wide static data.
 * Edit values here and they propagate everywhere.
 */

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lebartymedicare.org';
const siteUrl = new URL(configuredSiteUrl).origin;

export const site = {
  name: 'Lebarty Medicare',
  fullName: 'Lebarty Medicare Hospital & Lebarty Community Health Foundation',
  shortDescription:
    'A hospital in Benin City, Edo State, offering general medicine, pediatrics, emergency care, laboratory services and more, while funding community clinics here and across Africa.',
  url: siteUrl,
  domain: new URL(siteUrl).host,
  ogImage: '/og-image.png',
  founder: {
    name: 'Nosa Aigbe Lebarty, MD',
    shortName: 'Dr. Lebarty',
    credentials: [
      'Board-certified, Family Medicine',
      'Medical Director, Albany County Correctional Facility',
      'Assistant Clinical Professor, Albany Medical College',
      'Physician Specialist / Medical Director, Albany County Department of Health',
      'President, Project Health Africa',
    ],
  },
  contact: {
    phoneDisplay: '+234 701 034 8626',
    phoneTel: '+2347010348626',
    usPhoneDisplay: '(518) 930-8780',
    usPhoneTel: '+15189308780',
    email: 'info@lebartymedicare.org',
  },
  location: {
    name: 'Lebarty Medicare Hospital',
    street: 'Along Ugo Ben Road, by Festus Ajayi Junction, Irhirhi Road, Aruogba Community, off Airport Road',
    city: 'Benin City',
    region: 'Edo State',
    postalCode: '',
    country: 'NG',
    hours: [
      { days: 'Mon – Fri', hours: '8:00 AM – 6:00 PM' },
      { days: 'Saturday',  hours: '9:00 AM – 1:00 PM' },
      { days: 'Sunday',    hours: 'Telehealth on request' },
    ],
  },
  ecosystem: {
    centralmed: 'https://www.centralmedurgentcare.com',
    meditrans:  'https://www.lebartymeditrans.com',
    foundation: 'https://www.lebartycommunityhealth.org',
    projectHealthAfrica: 'https://www.projecthealthafrica.org',
  },
  social: {
    facebook: 'https://www.facebook.com/lebartymedical',
    instagram: 'https://www.instagram.com/lebartymedical',
    linkedin: 'https://www.linkedin.com/company/lebarty-medical',
  },
} as const;

/** Services mirror the hospital signage (LMW-24, Dr. Nosa). */
export const services = [
  {
    slug: 'general-medicine',
    title: 'General Medicine',
    eyebrow: 'Everyday health, handled',
    description:
      'Consultations, check-ups, and treatment for everyday illness, from malaria and infections to minor injuries, with referrals into every other service in the hospital.',
  },
  {
    slug: 'internal-medicine',
    title: 'Internal Medicine',
    eyebrow: 'Adult medicine, in depth',
    description:
      'In-depth care for adults: hypertension, diabetes, and other chronic or complex conditions, diagnosed carefully and managed over the long term.',
  },
  {
    slug: 'pediatrics',
    title: 'Pediatrics',
    eyebrow: 'For our youngest patients',
    description:
      'Gentle, thorough care for babies, children, and teens: check-ups, immunizations, childhood illness, and growth monitoring, with parents part of every step.',
  },
  {
    slug: 'emergency-services',
    title: 'Emergency Services',
    eyebrow: 'Always here when you need us',
    description:
      'Urgent care for accidents and sudden illness. Come straight in or call the hospital line; the team stabilizes first and explains everything as soon as it is safe to.',
  },
  {
    slug: 'laboratory',
    title: 'Laboratory Services',
    eyebrow: 'Answers you can act on',
    description:
      'Blood work, urinalysis, and diagnostic testing on site: clear results, explained plainly, coordinated with your care plan. Call the front desk for current test availability.',
  },
  {
    slug: 'eye-clinic',
    title: 'Eye Clinic',
    eyebrow: 'See clearly, live fully',
    description:
      'Eye examinations, vision testing, and glasses prescriptions, with treatment for common eye conditions and referrals for specialist surgery where needed.',
  },
  {
    slug: 'pharmacy',
    title: 'Pharmacy',
    eyebrow: 'Medication, made simple',
    description:
      'The on-site hospital pharmacy fills prescriptions right after your visit, with counseling on how to take every medication safely and refills made easy.',
  },
  {
    slug: 'diagnostic-imaging',
    title: 'Diagnostic Imaging & X-ray',
    eyebrow: 'A clear look inside',
    description:
      'X-ray and ultrasound imaging that supports diagnosis across the hospital, with results reviewed together with your clinician, not handed over as a puzzle.',
  },
  {
    slug: 'ambulance',
    title: 'Ambulance & Patient Transport',
    eyebrow: 'We come to you',
    description:
      'Ambulance response and planned patient transport to and from the hospital. For emergencies call 112 or the hospital line; transfers are arranged through the front desk.',
  },
] as const;

/** Foundation impact figures, shown on the homepage and /foundation. (Hospital Confirmation) */
export const impactStats = [
  { value: 100, suffix: '+', label: 'Patient encounters', sub: "Across the Foundation's outreach programs" },
  { value: 12, suffix: '+', label: 'Communities served', sub: 'Village clinics built and supplied' },
  { value: 5, suffix: '+', label: 'Countries reached', sub: 'And growing each year' },
  { value: 100, suffix: '%', label: 'Of donations to programs', sub: 'Every dollar funds the work' },
] as const;

/** Ways to pay. (Hospital Confirmation) */
export const paymentOptions = [
  'Cash',
  'Card payments',
  'Bank transfer',
  'HMO / insurance (confirm with the front desk)',
  'Prepaid care packages',
] as const;

/** About-page team groups. (Hospital Confirmation) */
export const team = [
  {
    title: 'Physicians',
    body: 'Board-certified doctors across family medicine, internal medicine, and more. They lead every plan of care.',
  },
  {
    title: 'Nurses',
    body: 'The team at the bedside: attentive, skilled, and with you through every stage of a visit or stay.',
  },
  {
    title: 'Laboratory team',
    body: 'Scientists and technicians behind accurate, timely results that your care decisions depend on.',
  },
  {
    title: 'Front desk & patient support',
    body: 'Your first call and first welcome: bookings, payments, and guidance through every step.',
  },
] as const;

/** Prepaid care packages — sold as products, NOT insurance. (Hospital Confirmation) */
export const carePackages = [
  {
    slug: 'silver',
    name: 'Silver',
    label: 'Essential',
    summary: 'A clear starting point for routine checks and baseline labs.',
    tagline: 'The essential yearly check-up',
    price: 'Call for current pricing',
    featured: false,
    basedOn: null,
    includes: [
      'General consultation & physical examination',
      'Full blood count',
      'Urinalysis',
      'Blood group & genotype',
      'Fasting blood sugar',
      'ESR',
      'Stool routine',
    ],
  },
  {
    slug: 'gold',
    name: 'Gold',
    label: 'Most chosen',
    summary: 'A broader check-up with added heart, kidney, and chest review.',
    tagline: 'A deeper look at heart, kidneys & lungs',
    price: 'Call for current pricing',
    featured: true,
    basedOn: 'Silver',
    includes: [
      'Kidney function tests (E/U/Cr)',
      'Chest X-ray',
      'ECG',
    ],
  },
  {
    slug: 'elite',
    name: 'Elite',
    label: 'Complete screen',
    summary: 'The fullest package for a deeper preventive-health picture.',
    tagline: 'The complete head-to-toe screen',
    price: 'Call for current pricing',
    featured: false,
    basedOn: 'Gold',
    includes: [
      'Lipid profile',
      'HIV screening',
      'Hepatitis B & C screening',
      '2-hour postprandial blood sugar (2HPP)',
      'Abdominopelvic ultrasound scan',
      'Stool occult blood',
    ],
  },
] as const;

export type CarePackage = (typeof carePackages)[number];

/** One canonical disclaimer — used by the packages page, and the chatbot. */
export const carePackagesDisclaimer =
  'Care packages are prepaid service bundles, not health insurance. Package contents and current prices are confirmed by the front desk before payment.';

/** Shared "Everything in X, plus" label so all surfaces phrase it identically. */
export function carePackageIncludesLabel(pkg: { basedOn: string | null }): string {
  return pkg.basedOn ? `Everything in ${pkg.basedOn}, plus` : 'Includes';
}

export const navPrimary = [
  { label: 'Services',   href: '/services' },
  { label: 'Care packages', href: '/care-packages' },
  { label: 'About', href: '/about/dr-lebarty' },
  { label: 'Contact',    href: '/contact' },
] as const;

/** Secondary destinations grouped under the "More" dropdown in the header. */
export const navMore = [
  { label: 'Patients',   href: '/patients' },
  { label: 'Foundation', href: '/foundation' },
  { label: 'Resources',  href: '/resources' },
] as const;
