/**
 * Single source of truth for site-wide static data.
 * Edit values here and they propagate everywhere.
 */

export const site = {
  name: 'Lebarty Medicare',
  fullName: 'Lebarty Medicare Hospital & Lebarty Community Health Foundation',
  shortDescription:
    'Independent physician practice in Benin City, Edo State — primary care, addiction medicine, and telehealth — funding community clinics here and across Africa.',
  url: 'https://lebartymedicare.org',
  domain: 'lebartymedicare.org',
  ogImage: '/og-image.png',
  founder: {
    name: 'Nosa Aigbe Lebarty, MD',
    shortName: 'Dr. Lebarty',
    credentials: [
      'Board-certified, Family Medicine',
      'Civil Surgeon, U.S. Citizenship and Immigration Services',
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

export const services = [
  {
    slug: 'primary-care',
    title: 'Primary Care',
    eyebrow: 'For your whole life',
    description:
      'Annual physicals, chronic-condition management, vaccinations, preventive screenings — built around continuity, not minutes-per-visit.',
  },
  {
    slug: 'addiction-medicine',
    title: 'Addiction Medicine',
    eyebrow: 'Healing without judgment',
    description:
      'Suboxone (buprenorphine) and medication-assisted treatment for opioid use disorder. Person-first care, telehealth-friendly intake, same-week appointments.',
  },
  {
    slug: 'telehealth',
    title: 'Telehealth',
    eyebrow: 'Care that travels with you',
    description:
      'Secure video visits from your home, work, or anywhere with a signal. Same physician, same chart, same continuity.',
  },
  {
    slug: 'nursing-home-visits',
    title: 'Nursing Home Visits',
    eyebrow: 'For our oldest neighbors',
    description:
      'On-site and telehealth assessments at skilled nursing facilities across the Capital Region. Bringing the doctor to the patient.',
  },
  {
    slug: 'civil-surgeon-uscis-exams',
    title: 'USCIS Civil Surgeon Exams',
    eyebrow: 'Designated by U.S. Citizenship and Immigration Services',
    description:
      'I-693 medical examinations for adjustment-of-status applicants. Forms completed correctly the first time, in one visit.',
  },
  {
    slug: 'preventive-care',
    title: 'Preventive Care',
    eyebrow: 'The visits that prevent the visits',
    description:
      'Lab work, wellness visits, women\'s health, men\'s health, age-appropriate screenings — coordinated with your primary care plan.',
  },
] as const;

export const insurance = [
  'Medicare',
  'Medicaid Managed Care',
  'Empire BlueCross BlueShield',
  'CDPHP',
  'MVP Health Care',
  'Fidelis Care',
  'Aetna',
  'Cigna',
  'United Healthcare',
  'Humana',
] as const;

export const navPrimary = [
  { label: 'Services',   href: '/services' },
  { label: 'About us', href: '/about/dr-lebarty' },
  { label: 'Patients',   href: '/patients' },
  { label: 'Foundation', href: '/foundation' },
  { label: 'Resources',  href: '/resources' },
  { label: 'Contact',    href: '/contact' },
] as const;
