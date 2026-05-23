# Lebarty Medical PLLC + Lebarty Community Health Foundation
## Research, Strategy & Build Plan — prepared by Zagaprime
*Last updated: 2026-05-06*

---

## 0. Executive Summary

We're rebuilding the Lebarty Medical PLLC web presence — currently in dev with Proweaver at `proweaver.design/lebartymedich4` — into a flagship site that fuses a **community-impact-led foundation narrative** with a fully-functional **medical practice** (booking, telehealth, patient portal, providers, content). Stack: **Next.js + Supabase + Stripe**, the Zagaprime standard.

The strategic angle that unlocks this: every other Lebarty venture is operational (CentralMed = revenue, Medi-Trans = transport, Project Health Africa = field ops), but none of them tell the unifying story. Lebarty Medical PLLC + Lebarty Community Health Foundation should be the **brand home** — the place that says "every patient visit funds a clinic in Africa" — and converts on patient acquisition at the same time.

**What we're competing against:** A Proweaver-built template-quality medical site. Proweaver's playbook is "free layouts, unlimited revisions, custom HTML/CSS over WordPress-style chassis" — it ships, but it's generic, not opinionated, and doesn't carry brand narrative. We win on **narrative, design quality, conversion architecture, technical performance, SEO, accessibility compliance, and storytelling** — none of which are Proweaver's strengths.

**Critical timing flag:** HHS Section 504 + ADA Title II accessibility deadlines hit **April 24 and May 11, 2026** for healthcare web. We are *5 days past those deadlines today* (May 6, 2026). For a practice that bills Medicare/Medicaid (Medi-Trans definitely does NEMT through Medicaid), WCAG 2.1 AA conformance is no longer a nice-to-have — it's a litigation-risk floor we must clear at launch, not phase 2.

---

## 1. Client Profile & Ecosystem Map

### 1.1 Dr. Nosa Aigbe Lebarty — credential snapshot

A multi-hat physician-entrepreneur with rare combined assets:

- **Clinical:** Family Medicine, Addiction Medicine, Hospitalist Medicine; American Board of Family Medicine certified; trained at Ellis Hospital (Schenectady) residency.
- **Government / Institutional authority:**
  - Civil Surgeon (USCIS — does immigration medical exams)
  - Medical Director, Albany County Correctional Facility
  - Physician Specialist / Medical Director, Albany County Department of Health
- **Academic:** Assistant Clinical Professor, Albany Medical College
- **Entrepreneurial:** Founder/CEO of CentralMed, Lebarty Medical PLLC, Lebarty Medi-Trans, Lebarty Community Health Foundation, Project Health Africa
- **Roots:** Connected to Benin City, Nigeria (per Project Health Africa member profile of related Lebarty)

**Why this matters for the site:** Few primary care practices anywhere have a physician with *this* depth of institutional and humanitarian credibility. We must lead with it. The credential stack alone outranks every other Schenectady/Albany competitor on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) — which is now a major Google ranking signal for medical content and is what AI search systems use to decide who to cite (~70% of patients now use AI tools to research physicians).

### 1.2 The Lebarty venture ecosystem

| Entity | Location | Function | Brand role on new site |
|---|---|---|---|
| **Lebarty Medical PLLC** | 317 Danielle Dr, Schenectady, NY | Internal Medicine clinic; addiction medicine (Suboxone/MAT); telehealth assessments incl. nursing homes | **Primary subject of the new site** |
| **Lebarty Community Health Foundation** | Colonie, NY | 501(c)(3)-style humanitarian: clinics + healthcare supplies/facilities across Africa | **Co-headline + dedicated section** |
| CentralMed Urgent Care & Primary Care | 1662 Central Ave, Albany, NY | Urgent Care + Primary + Aesthetic Medical Spa; Botox; in-house labs/X-ray; Dr. Lebarty + Dr. Nocera; phone (518) 267-7214 | Cross-link "for urgent care, visit CentralMed" |
| Lebarty Medi-Trans LLC | NY (DOT# 4066752) | Non-emergency medical transport; door-to-door for elderly; online booking | Cross-link "need a ride to your appointment?" |
| Project Health Africa | International | Medical outreach in Africa | Cross-link from Foundation section |

The ecosystem is real and operational, but each site is currently a silo. **Our site becomes the hub** — the place a patient discovers Dr. Lebarty's story and self-selects into the right venture.

### 1.3 Specialty positioning — the addiction medicine angle

This is the single most under-leveraged asset I found in research. Dr. Lebarty is:
- Family medicine + **addiction medicine** + hospitalist
- Passionate about treating substance use disorders
- Prescribes Suboxone/buprenorphine for opioid use disorder
- Practicing in **Schenectady County** — which has higher poverty rate (11.4%, above NYS-ex-NYC), 31.8% Medicaid coverage in the city (vs 19.6% county-wide), and well-documented health disparities. The opioid crisis is acute here.

There are existing Suboxone competitors in Schenectady (Sarah Paston NP, Dr. Mohammad Kabir at Conifer Park, Dr. George Hughes, Matthew Levine PA, Ashleigh Holmes NP), but **none of them have Dr. Lebarty's combination of physician status + government roles + academic affiliation + foundation work**. A dedicated, destigmatized addiction medicine landing page — written with empathy, signaling judgment-free care, listing exact insurance/Medicaid acceptance — would absolutely outrank them and convert.

---

## 2. Proweaver "Floor" Analysis

### 2.1 What I could and couldn't access
The staging URL `https://www.proweaver.design/lebartymedich4/` is **not on the workspace's egress allowlist** and the Chrome extension was offline during research. I could not load the page directly. I'll do a visual pass the moment one of those is unblocked. Until then, this audit is built from:
- Proweaver's public methodology (their own marketing pages)
- Their portfolio patterns
- The staging URL slug (`lebartymedich4` = client-shorthand naming consistent with template-shop staging)

### 2.2 What Proweaver almost certainly delivered (high confidence)
Based on Proweaver's published healthcare playbook, the staging site likely includes:

- A homepage with a stock-photo hero ("compassionate care for your family") and 3-up service cards
- Services pages — generic primary care + telehealth + maybe addiction medicine
- "About Us" / "Meet the Doctor" — single bio block with stock-style photo
- Contact form + map
- Basic appointment request form (form, not a real booking widget)
- Patient resources / FAQ
- Privacy policy + HIPAA notice template
- Mobile-responsive but template-feeling
- WordPress chassis or hand-rolled HTML/CSS over a Bootstrap-like grid
- Google Fonts + a generic medical-blue palette
- Page speed: probably 60–75 mobile Lighthouse, not great

### 2.3 What Proweaver almost certainly does NOT deliver
Pattern-matching on their portfolio + price point:

- **No real online booking widget** (just a contact form labeled "request appointment")
- **No HIPAA-eligible patient portal** (would require Tebra/NexHealth/etc. integration — out of scope at their price)
- **No story-led foundation narrative** — they don't do brand strategy
- **No conversion architecture** — no specific landing pages per service, weak CTA hierarchy
- **No structured data / schema.org** medical organization markup
- **No accessibility compliance to WCAG 2.1 AA** (this is the biggest legal exposure)
- **No core web vitals optimization** (template stack, no image pipeline, no edge caching)
- **No content depth** — services pages will be 200–400 words of generic copy, not 1,200–2,000 word E-E-A-T condition pages that rank
- **No Stripe-powered donations** for the Foundation
- **No localized SEO for Schenectady + Albany + Capital Region**
- **No physician-specific schema** (Person + MedicalOrganization markup)
- **No multi-entity cross-linking architecture**
- **No analytics + conversion tracking beyond GA basic**
- **No design system** — every page rebuilt by hand, no consistency
- **Likely owned by Proweaver or hosted on their infra**, not portable

### 2.4 The bar we have to clear (and exceed)
If Proweaver is at "decent template medical site that loads on a phone," **our floor is "Awwwards-tier brand site that also actually converts patients and runs a HIPAA-eligible portal."** The asymmetry favors us — every category they're weak in, we should overcorrect on.

---

## 3. Market & Competitive Landscape

### 3.1 Local primary care competition (Albany / Schenectady / Capital Region)
The dominant players patients compare against:

- **Albany Medical Center** (`albanymed.org`) — health system, 30+ primary care locations
- **St. Peter's Health Partners Medical Associates** (`sphp.com`) — health system
- **Community Care Physicians** (`communitycare.com`) — multi-location independent group, including CapitalCare Family Practice and Albany Family Medicine
- **CPI Physicians** (`cpiphysicians.com`) — Albany internal medicine + family practice
- **Center for Family Practice** (`centerforfamilypracticeandaestheticsny.com`) — described as "best practice in capital region"

**Our competitive lane:** Lebarty is *not* trying to beat Albany Med on scale. We position as **"the independent, physician-owned, community-rooted alternative — with credentials that rival the big systems."** That story plus the foundation work is differentiated and authentic.

### 3.2 Addiction medicine competition (Schenectady-specific)
- Sarah Paston NP — 728 State Street
- Dr. Mohammad Kabir MD — Conifer Park Outpatient (600 Franklin Street)
- Dr. George Hughes MD — 817 Union Street
- Matthew Levine PA — 820 River Street
- Ashleigh Holmes NP — 200 Harborside Drive
- Conifer Park (methadone clinic)
- Fusion Recovery (outpatient + MAT)

None of them are physicians with Dr. Lebarty's institutional standing. A purpose-built addiction medicine page (with the right empathetic copy, insurance details, telehealth-friendly intake, "same-week appointments") is a defensible Top-3 ranking opportunity locally.

### 3.3 Best-in-class healthcare site references
For design + UX direction, the references that came up consistently in 2026 best-of lists:

| Reference | What we steal | Why it works |
|---|---|---|
| **Possible Health** (`possiblehealth.org`) — Awwwards Honorable Mention | Mission-led storytelling fused with operational service info; emotional photography; clear donation path | Their tagline "making healthcare possible in the world's most impossible places" is structurally identical to what Lebarty Foundation does |
| **Mayo Clinic** — patient-centered design | Calm typographic hierarchy, generous whitespace, clear next-step CTAs at every section | Authority + clarity = credibility |
| **Hims & Hers** | Bold color, modern type, lifestyle photography that doesn't feel medical-cold; fast intake flows | Reduces friction; treats patients like consumers |
| **Parsley Health** | Editorial content + service pages woven together, not separate | Content sells the practice |
| **California Wellness Foundation** | WCAG AA from the start; donor-centric storytelling | The accessibility floor we must hit |
| **Awwwards "Comprehensive Healthcare Medical"** (ORAIKO) | Opinionated visual system, not template | Proves bespoke healthcare design wins |

---

## 4. Compliance & Risk Map

### 4.1 Accessibility (WCAG 2.1 AA — non-negotiable)

**Why this is now legally urgent:**
- HHS Section 504 final rule: healthcare orgs receiving HHS funding must hit WCAG 2.1 AA on websites, mobile apps, kiosks, patient portals by **May 11, 2026** (org with 15+ employees) or May 10, 2027 (smaller).
- ADA Title II also has a parallel April 24, 2026 deadline for public entities.
- 2025 saw 3,117 federal web accessibility lawsuits — 27% YoY growth. Healthcare is "an increasingly prominent share" because patient portals are public-facing and easy to test.
- Penalties: up to $150,000 per violation.
- Lebarty Medi-Trans almost certainly bills Medicaid for NEMT — that's HHS funding. Cross-entity exposure is real.

**What this means for build:**
- Design system tokens enforce minimum 4.5:1 contrast on body text, 3:1 on large
- All interactive elements keyboard-navigable; visible focus rings
- Alt text on every image (real semantic alt, not "image1")
- Form fields: label association, error states, fieldset/legend on grouped inputs
- ARIA live regions on form submission feedback
- Skip-to-content link, semantic landmarks (`<main>`, `<nav>`, `<aside>`)
- Captions on any video; transcripts available
- Run **axe DevTools + Lighthouse + Pa11y** in CI; manual screen reader test (NVDA + VoiceOver) before launch
- Statement of accessibility page + a feedback channel (required by best practice)

### 4.2 HIPAA — what touches our build

The pure marketing site (services, providers, blog, contact form) is **not** HIPAA-regulated as long as we don't collect PHI through it. The moment we introduce:
- A patient portal login storing health info
- An intake form capturing diagnoses, medications, allergies
- A telehealth scheduling form capturing visit reason
- Chat functionality
- Stored email correspondence about care

… we're holding PHI and need:

- **BAA with hosting (Vercel)** — Vercel has a HIPAA Enterprise plan with BAA
- **BAA with database (Supabase)** — Supabase signs a BAA on the **Team plan + HIPAA add-on**
- **BAA with email** — typically Postmark or SendGrid HIPAA tier, or AWS SES
- **BAA with form handling** — most of the dropdown vendors (Typeform consumer tier, Tally, etc.) won't sign one
- Strict RLS on every PHI table, default-deny, no service-role key client-side
- Audit logs, encryption at rest + in transit
- Documented Risk Analysis + Risk Management Plan
- Workforce training records

**Our recommendation:** Don't build the patient portal as DIY in Phase 1. **Use a HIPAA-eligible third party** — Tebra, NexHealth, or similar — for booking + patient portal + intake. Embed their widgets. Our Supabase use is for non-PHI: blog content, donation records, contact-form submissions (that don't ask medical questions), Foundation programs, providers metadata. This is materially cheaper, faster to launch, and lower risk.

In Phase 2, if Dr. Lebarty wants to pull the portal in-house, we upgrade Supabase to Team + HIPAA add-on and migrate. The architecture supports both.

### 4.3 NY medical advertising rules
- NY Education Law § 6530 prohibits false/misleading professional advertising
- Testimonials are allowed but must be genuine and non-paid; if paid, disclose
- Outcome statistics must be truthful and substantiated
- No claims of being "the best," "#1," etc. without verifiable basis
- Required: physician's name and license number on professional advertising
- Civil surgeon designation must be presented carefully (USCIS-specific role; can't imply broader certification)

### 4.4 Foundation / 501(c)(3) considerations (for the donation flow)
- Confirm Foundation's 501(c)(3) status before launching donations
- Stripe nonprofit verification + reduced fee program (2.2% + 30¢ vs 2.9% + 30¢) — apply for it
- NY Charities Bureau registration (CHAR410 form) is required for soliciting in NY
- Donor receipt language must comply with IRS § 170 (auto-email after every donation)
- "No goods or services were provided" boilerplate
- Donor designation handling (general fund vs program-specific) is allowed but must be honored

---

## 5. Strategic Positioning & Brand Direction

### 5.1 Positioning statement
> **Lebarty Medical is a Schenectady-based independent physician practice where every visit funds a community clinic — at home and in Africa. Founded by Dr. Nosa Lebarty, MD — civil surgeon, medical director for Albany County, and Albany Med faculty — we provide primary care, addiction medicine, and telehealth with the credentials of a major hospital and the warmth of a family practice.**

### 5.2 Three messaging pillars

1. **Care that travels with you** — primary care, telehealth, and home/nursing-home visits. Built around the patient's life, not the building.
2. **Healing without judgment** — addiction medicine, Suboxone/MAT, and chronic care delivered with dignity. The exact opposite of stigma.
3. **Local roots, global reach** — our patients fund clinics in Africa through the Lebarty Community Health Foundation. Care here is mission there.

### 5.3 Voice & tone
- **Warm, but credentialed.** Not corporate-medical. Not too casual. Think Mayo Clinic ÷ 2 + Hims & Hers ÷ 4.
- **Direct, specific, never vague.** "We accept Medicaid Managed Care, Medicare, Empire BCBS, MVP, CDPHP" — not "most major insurances."
- **Lead with the patient's question.** Service pages open with what the patient is actually wondering: "Will I be judged?" "Is telehealth as good as in-person?" "Can I bring my kids?"
- **Respectful around addiction.** Person-first language ("person with opioid use disorder," not "addict"). No fear-based imagery.

### 5.4 Visual direction (to be validated with mockups)
- **Color:** anchor on a deep teal/forest pairing with warm cream + accent terracotta — speaks medical credibility without the cold blue cliché, and warm enough for foundation storytelling. (Final palette in design phase.)
- **Type:** editorial serif for headlines (e.g., Fraunces / Source Serif), clean humanist sans for body (e.g., Inter / Manrope). Establishes authority + reads as human.
- **Photography:** real photography of Dr. Lebarty, the practice, patients (with releases), and Foundation work in Africa. Zero stock. This is the single biggest brand differentiator vs Proweaver.
- **Motion:** restrained, purposeful — content reveals on scroll, no decorative parallax, subtle CTA hover states. Respects `prefers-reduced-motion`.

---

## 6. Information Architecture (proposed v1)

```
/
├── / (Home — hybrid hero: practice + foundation)
├── /about
│   ├── /about/dr-lebarty
│   ├── /about/our-story (Practice + Foundation origin)
│   └── /about/team (other providers as added)
├── /services (overview)
│   ├── /services/primary-care
│   ├── /services/addiction-medicine          ← high-priority SEO landing
│   ├── /services/telehealth                  ← differentiator
│   ├── /services/nursing-home-visits         ← unique service
│   ├── /services/hospitalist-medicine
│   ├── /services/civil-surgeon-uscis-exams   ← unique SEO opportunity
│   └── /services/preventive-care
├── /book
│   ├── /book (booking widget — Tebra/NexHealth embed)
│   └── /book/telehealth
├── /patients
│   ├── /patients/new (welcome + insurance + intake)
│   ├── /patients/insurance
│   ├── /patients/forms (PDF + digital intake)
│   ├── /patients/portal (link to Tebra portal)
│   └── /patients/billing
├── /foundation                               ← the Foundation home
│   ├── /foundation/our-mission
│   ├── /foundation/programs (Africa programs)
│   ├── /foundation/impact (numbers + stories)
│   ├── /foundation/donate                    ← Stripe donation flow
│   └── /foundation/get-involved (volunteer, partners)
├── /resources (blog + health education)
│   ├── /resources/[slug] (blog post)
│   └── /resources/category/[cat]
├── /locations
│   └── /locations/schenectady
├── /contact
├── /accessibility (statement + feedback)
├── /privacy
├── /hipaa-notice
└── /sitemap.xml
```

**Cross-linking footers** to CentralMed, Medi-Trans, Project Health Africa with a clear "Related Lebarty services" block — keeps brand ecosystem coherent without mixing audiences.

---

## 7. Feature Specification (v1 must-haves)

### 7.1 Booking + Telehealth (per your selection)
- **Decision:** Tebra (formerly Kareo + PatientPop) is the strongest fit — built for primary care and family medicine, has an embeddable scheduling widget with multi-location/multi-provider support, HIPAA compliant, telehealth built in.
- Embed Tebra widget on `/book`, `/book/telehealth`, and as CTA in services pages.
- Tracking: fire a custom event on widget interaction (without capturing PHI) so we measure conversion.

### 7.2 Patient portal + intake (per your selection)
- **Phase 1:** Use Tebra's patient portal (or NexHealth's) — instant HIPAA coverage, BAA, no maintenance burden.
- Digital intake forms via Tebra; PDFs available as backup download.
- Insurance carrier list with up-to-date data, displayed visually with logos (with permission) — converts ~15% better than text-only.
- "What to bring on your first visit" checklist as a printable + on-page list.

### 7.3 Donations + Foundation pages (per your selection)
- **Stripe-powered donation flow** with one-time + recurring (monthly/annual) options.
- Suggested amounts: $25 / $50 / $100 / $250 / custom — tuned to actual program costs ("$50 funds prenatal care for one mother").
- Designation: "Where most needed" (default) + program-specific options (clinics in Nigeria, supplies, training, etc.).
- Recurring giving auto-receipts; Foundation gets monthly Stripe payout reconciliation.
- Apply for **Stripe nonprofit reduced rate** (2.2% + 30¢).
- Impact stories carousel — real photography from Africa programs.
- Trust signals: 501(c)(3) status, Charity Navigator (when eligible), audited financials link.
- "Get involved" page: volunteer interest form, partner inquiry form, planned giving info.

### 7.4 Providers + locations + blog (per your selection)
- **Dr. Lebarty bio page** as the flagship — full credentials wall, video greeting (optional), languages, what to expect at first visit, links to scholarly publications if any.
- **Blog / Resources hub** — start with 8 cornerstone articles (E-E-A-T-optimized):
  1. "What to expect at your first visit with Dr. Lebarty"
  2. "Suboxone (buprenorphine) for opioid use disorder: what it is, how it works, what to expect"
  3. "Telehealth vs in-person: when each makes sense"
  4. "USCIS civil surgeon exams in Schenectady: complete guide"
  5. "Medicare, Medicaid, and us: insurance plans we accept"
  6. "Nursing home visits: how Dr. Lebarty cares for our oldest neighbors"
  7. "Annual physicals: what they cover and why they matter"
  8. "How patient visits fund the Lebarty Foundation"
- **Locations:** Schenectady page with map, hours, parking, languages, transit access, photos.
- Schema.org `MedicalOrganization`, `Physician`, `MedicalClinic`, `LocalBusiness`, `Article` markup throughout.

---

## 8. Technical Architecture

### 8.1 Stack (confirmed)
- **Framework:** Next.js 15 (App Router) + React 19 + Server Components
- **Hosting:** Vercel (Pro plan minimum; Enterprise + BAA if Phase 2 PHI)
- **DB / Auth:** Supabase (Pro plan v1; Team + HIPAA add-on if/when Phase 2 PHI)
- **Payments:** Stripe (nonprofit account for Foundation)
- **Booking/Portal:** Tebra (widget embed; BAA on their side)
- **CMS:** Sanity headless CMS (or Notion API as fallback) — lets the client team edit without code
- **Email:** Postmark (transactional, has BAA option) or Resend
- **Analytics:** Vercel Analytics + PostHog (self-hosted on Hetzner if PHI concerns) + GA4
- **Search:** Algolia or Pagefind for blog
- **Image:** Next.js Image + Cloudinary or Vercel image pipeline
- **Forms:** React Hook Form + Zod validation; Postmark for delivery

### 8.2 Performance budget
- **Lighthouse mobile:** target 95+ across all categories
- **LCP:** ≤ 2.0s on 4G mid-tier device
- **CLS:** ≤ 0.05
- **INP:** ≤ 150ms
- **JS bundle (route shell):** ≤ 90KB compressed

### 8.3 Repo & DevOps
- Monorepo (single Next.js app)
- GitHub → Vercel with preview deployments per PR
- Lighthouse CI + axe-core CI on every PR (block merge if AA fails)
- Conventional commits + automated changelog
- Sentry for error monitoring
- `.env.local` for secrets; never commit Supabase service role key

### 8.4 SEO foundation
- `next-seo` for per-page metadata
- `sitemap.xml` + `robots.txt` auto-generated
- Schema.org structured data on every key page
- Google Search Console + Bing Webmaster setup
- Core Web Vitals tracking
- Local business schema with NAP consistency across all citations
- Google Business Profile audit + optimization (this is 36% of local SEO ranking weight)

---

## 9. Phased Roadmap

### Phase 0 — Discovery & alignment (Week 0)
- Kickoff call w/ Dr. Lebarty
- Brand questionnaire (voice, must-haves, taboos, aspirational competitors)
- Existing asset audit (logos, photos, copy from other sites, video)
- Confirm Foundation 501(c)(3) status + EIN
- Photography brief — schedule on-site shoot at the Schenectady practice
- Confirm Tebra account exists or plan procurement
- Approve scope, budget, schedule

### Phase 1 — Design (Weeks 1–3)
- Brand workshop output: positioning, voice card, visual direction
- Design system: tokens, type scale, component library
- Hi-fi mockups: Home, Dr. Lebarty bio, Addiction Medicine service page, Foundation home, Donation flow, Booking page (mobile + desktop)
- Client review + 2 revision rounds

### Phase 2 — Build (Weeks 4–8)
- Foundation: Next.js + Supabase + Stripe scaffolding, design system in code
- Marketing pages (Home, About, Services, Locations, Contact)
- Foundation pages + Stripe donation flow (test mode → live)
- Blog + CMS wiring; first 8 articles drafted by Zagaprime, reviewed by Dr. Lebarty
- Tebra widget integration on /book + service pages
- Accessibility implementation (continuous, not last-mile)
- SEO + structured data wiring
- Email transactional templates (donation receipt, contact form, etc.)

### Phase 3 — QA, Compliance, Launch (Weeks 9–10)
- Manual + automated accessibility audit (axe + screen reader walkthrough)
- Lighthouse on all pages must pass 95+
- Cross-browser test (Chrome, Safari, Firefox, mobile Safari, Chrome Android)
- Stripe live mode + test donation
- Google Search Console + Bing Webmaster + sitemap submission
- Google Business Profile update (NAP, services, photos, hours)
- 301 redirects from any legacy URLs
- DNS cutover
- Post-launch monitoring (Sentry alerts, GA4 conversion goals)

### Phase 4 — Post-launch (Weeks 11+)
- Weekly content cadence (1 blog post)
- Monthly SEO check-in + Google Business Profile review responses
- Quarterly conversion optimization sprint
- Phase 5 candidate: in-house patient portal on Supabase Team + HIPAA add-on, custom telehealth video on a HIPAA-eligible WebRTC provider, integrations with the EHR

---

## 10. Conversion & SEO Strategy

### 10.1 Conversion architecture
- **Three primary CTAs** site-wide, never more: **Book a visit**, **Start telehealth**, **Donate**.
- **Sticky bottom CTA on mobile** ("Book a visit · Call · Telehealth") on service pages.
- **Insurance verification widget** on every service page — patients abandon when unsure.
- **Trust signals stacked** on hero + service pages: years in practice, # patients served, board certifications, hospital affiliations, Google Reviews live count.
- **Form length:** 3–4 fields max on inquiry forms (research shows 11→4 fields = +120% conversion).
- **Real testimonials** with first name + neighborhood + photo (where consented). Display + 270% conversion lift over no testimonials.

### 10.2 Local SEO targets (90-day plan)
Target queries we should rank top-3 on within 90 days:

| Query | Current competitor | Why we can win |
|---|---|---|
| `family medicine Schenectady` | Center for Family Practice | E-E-A-T + content depth + reviews |
| `Suboxone doctor Schenectady` | Sarah Paston NP, Dr. Hughes | Physician status + empathetic page |
| `addiction medicine Schenectady` | Conifer Park, Fusion Recovery | Smaller practice + personal care angle |
| `civil surgeon Albany NY` | Sparse competition | Unique service, low SEO competition |
| `nursing home physician Schenectady` | Tapestry Health | Lebarty Medical Telehealth is purpose-built for this |
| `telehealth primary care New York` | National players | Local + insurance specific wins on conversion even if not on rank |
| `community health foundation Africa Albany` | None local | Brand-defining query |

### 10.3 Content cadence
- **Pre-launch:** 8 cornerstone service-aligned articles
- **Month 1–3:** 1 article/week, mostly Dr. Lebarty bylined (with Zagaprime drafting)
- **Quarterly:** Foundation impact post with photos + numbers
- **Always:** When patients ask the same question 3 times, it becomes a blog post

---

## 11. Open Questions / Decisions Needed

These don't block planning but I'll need answers before/during build:

1. **Domain.** Use a new domain (`lebartymedical.com` if available) or reuse an existing one? Current `centralmedurgentcare.com` is a different brand.
2. **Foundation 501(c)(3) + EIN status.** Confirmed registered? NY Charities Bureau registered? We need both to legally accept donations.
3. **Existing Tebra/EHR account.** Does the practice already use Tebra, NexHealth, athenaOne, or something else? Drives integration choice.
4. **Photography budget.** Greenlight a half-day on-site photo shoot in Schenectady? This single decision moves the design quality more than any other.
5. **Foundation Africa photography rights.** Does Project Health Africa have photos we can license/reuse? Critical for the Foundation section.
6. **Other providers.** Does Lebarty Medical PLLC have other providers besides Dr. Lebarty? If so, are we adding their bios?
7. **CentralMed branding.** Are we keeping CentralMed and Lebarty Medical PLLC as separate brands forever, or eventually merging?
8. **Blog authorship.** Does Dr. Lebarty want to byline articles (and review/edit) or does he want them ghostwritten under the practice name?
9. **Reviews strategy.** Are we surfacing Google Reviews directly on site? Need to ensure no PHI leaks via review responses.
10. **HHS funding status.** Does Lebarty Medical PLLC bill Medicare/Medicaid directly? (Likely yes via Medi-Trans → confirms WCAG 2.1 AA deadline applies now.)

---

## 12. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Accessibility lawsuit before launch | Medium | High ($150K+ violation) | WCAG 2.1 AA from Day 1 of design; CI enforcement; statement page |
| Proweaver delivers something unexpectedly strong | Low | Medium | Visual audit ASAP once browser/allowlist resolved |
| HIPAA exposure via blog comments / contact form | Medium | High | No comments; contact form does NOT ask medical info; clear "do not include health details" notice |
| Foundation isn't actually 501(c)(3) registered | Low | Medium | Verify EIN + NY CHAR410 before donation flow goes live |
| Photography never happens | High | High | Block design Phase 2 until shoot is scheduled |
| Tebra integration delays | Medium | Medium | Have a non-PHI fallback "Request appointment" form ready as bridge |
| SEO cannibalization with CentralMed | Medium | Medium | Separate Google Business Profiles, distinct service positioning, internal linking strategy |

---

## 13. Immediate Next Actions

For Kzee to do (or approve me to do):

1. **Get me onto the Proweaver staging site** — either add `proweaver.design` to allowlist, sign in to Chrome extension, or send screenshots. I need to confirm my floor analysis.
2. **Approve the strategic direction** (positioning, IA, feature scope) before I move to design phase.
3. **Schedule a 30-min discovery call with Dr. Lebarty** — voice card, photo permissions, content interview.
4. **Confirm Foundation 501(c)(3) + EIN + NY Charities Bureau registration.**
5. **Decision on Tebra vs in-house portal** for v1 — I recommend Tebra; confirm.
6. **Decision on photography shoot** — yes/no/budget cap.

Once 1–6 are settled, I move into Phase 1 (design) and produce hi-fi mockups for review.

---

## 14. Sources

**Client + business context:**
- [Dr. Nosa Aigbe Lebarty MD profile — CentralMed](https://www.centralmedurgentcare.com/provider/nosa-d-aigbe-lebarty-md)
- [Lebarty Medical PLLC NPI Registry](https://npino.com/primary-clinic/1104468099-lebarty-medical-pllc/)
- [CentralMed Urgent Care home](https://www.centralmedurgentcare.com/)
- [Lebarty Medi-Trans home](http://www.lebartymeditrans.com/)
- [Dr. Nosa Lebarty on Doximity](https://www.doximity.com/pub/nosa-aigbe-lebarty-md)
- [Project Health Africa members](https://www.projecthealthafrica.org/medical-outreach-meet-our-members)
- [Lebarty Community Health Foundation](https://www.lebartycommunityhealth.org/)

**Competitive + market:**
- [Healthgrades — best primary care Albany NY](https://www.healthgrades.com/find-a-doctor/new-york/best-primary-care-physicians-in-albany)
- [Suboxone doctors Schenectady](https://www.suboxonedoctor.com/new-york/schenectady)
- [Schenectady County health indicators](https://www.health.ny.gov/community/health_equity/reports/county/schenectady.htm)
- [Schenectady demographics — DataUSA](https://datausa.io/profile/geo/schenectady-ny)
- [Albany Medical Primary Care](https://www.albanymed.org/specialty/primary-care/)

**Design references:**
- [10 Best Healthcare Website Designs of 2026 — Azuro](https://azurodigital.com/healthcare-website-examples/)
- [Awwwards Healthcare](https://www.awwwards.com/inspiration/medical-and-healthcare-branded-website)
- [Possible Health on Awwwards](https://www.awwwards.com/sites/possible-health)
- [Best Nonprofit Websites 2026 — Kanopi](https://kanopi.com/blog/best-nonprofit-websites/)
- [Nonprofit Design Trends 2026 — ImageX](https://imagexmedia.com/blog/best-nonprofit-website-designs-drive-impact)

**Compliance:**
- [HHS Section 504 May 11, 2026 deadline](https://adaquickscan.com/blog/hhs-section-504-healthcare-web-accessibility-may-2026-deadline)
- [ADA Title II April 2026 deadline — Venable LLP](https://www.venable.com/insights/publications/2026/04/ada-title-ii-website-accessibility-regulations)
- [Healthcare ADA lawsuits — Accessitree](https://www.accessitree.com/accessibility-articles/healthcare-ada-lawsuits-wcag-21-hhs-section-504hcare-ada-lawsuits-and-what-to-do-in-90-days/)
- [Supabase HIPAA solutions](https://supabase.com/solutions/healthcare)
- [Supabase HIPAA + SOC2 announcement](https://supabase.com/blog/supabase-soc2-hipaa)

**Build / integrations:**
- [Tebra scheduling widget docs](https://helpme.tebra.com/Platform/Practice_Settings/Scheduling_Widget/Scheduling_Widget)
- [Tebra primary care](https://www.tebra.com/specialties/primary-care)
- [NexHealth booking system](https://www.nexhealth.com/features/nexhealth-online-booking)
- [Stripe nonprofit donations](https://stripe.com/industries/nonprofits)
- [Stripe recurring donations guide](https://stripe.com/resources/more/how-to-handle-recurring-donations-in-nonprofit-payments)

**SEO + conversion:**
- [Healthcare conversion benchmarks 2026 — Promodo](https://www.promodo.com/blog/healthcare-digital-marketing-benchmarks)
- [Patient acquisition guide 2026 — Advaa Health](https://advaahealth.com/blog/medical-practice-seo-patient-acquisition-guide/)
- [Local SEO for medical practices](https://www.powerchord.com/blog/local-seo-for-medical-practices)
- [Healthcare CRO 2025](https://www.fetchfunnel.com/conversion-rate-optimization-for-healthcare/)

**Proweaver context:**
- [Proweaver healthcare web design](https://www.proweaver.com/healthcare-web-design)
- [Proweaver streamlining healthcare UX](https://www.proweaver.com/amplify-healthcare-website-ux-for-easy-scheduling)
