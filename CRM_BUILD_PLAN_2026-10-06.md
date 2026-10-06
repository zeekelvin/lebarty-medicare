# Lebarty CRM Build Plan

ZagaPrime working document. Prepared 6 October 2026. Jira epic: LMW-46.

A client CRM for Lebarty Medicare Hospital, built the way we built the Tinash, 7th Grace and MMD CRMs, keeping what worked, fixing what each of them got wrong, and adapting it to a Nigerian hospital on Microsoft 365 email and Cloudflare Workers.

## 1. What we learned from the three builds

All three are the same CRM, ported forward: MMD (29 Sep to 1 Oct) was built first, Tinash (4 to 5 Oct) ported it and moved to Cloudflare Workers, 7th Grace (5 Oct) ported it again on Vercel. Each port inherited MMD's fixes and some of its gaps.

| Area | MMD (`ZagaPrimeLLC/mmd-prod`) | Tinash (`ZagaPrimeLLC/tinash-prod`) | 7th Grace (`zeekelvin/7thgrace`) |
| :-- | :-- | :-- | :-- |
| Hosting | Vercel | Cloudflare Workers + OpenNext (free plan), same as Lebarty | Vercel, deploys from GitHub Actions only |
| CRM URL | `/dashboard` on the public domain | `crm.tinashhomecareservices.com`, public host 404s every CRM path | `crm.7thgraceoakchomecare.com`, same host split |
| Database | Supabase, schema `proj_mmd`, **base schema never put in migrations** | Supabase, `proj_tinash`, full schema in 9 migrations + `bootstrap.sql` | Supabase, `proj_7thgrace`, same 9 migrations |
| Sign-in | Magic link, PKCE only (breaks if opened on another device) | Magic link, `token_hash` callback works across devices | Same as Tinash |
| Invites | In-app, role applied on first sign-in by trigger; **no invite email** (copy/mailto) | Same | Same |
| Staff alert on new intake | **None** | Hostinger mailbox over Workers TCP sockets, Resend fallback | Titan SMTP via nodemailer, Resend fallback |
| Submitter confirmation | None | None | None |
| Spam protection | DB rate limits | DB rate limits + honeypot | DB rate limits + honeypot |
| Auth email sender | Supabase default (rate-limited, unbranded) | Supabase default | Supabase default |

**Keep (proven in all three):**
- Anon key + Row Level Security + `SECURITY DEFINER` functions. No service-role key in the app at all.
- One dedicated schema per client (`proj_<slug>`), exposed in the Data API, with every function inside that schema. MMD broke when a role function lived in `public`.
- Roles `admin | ops | leadership | viewer`, with guards against demoting yourself or removing the last admin.
- Invite-only access: `team_invites` + trigger on first sign-in + the "Before User Created" auth hook that refuses uninvited emails.
- Separate "could not check your access" and "not on the team" screens. A failed lookup once locked a real admin out.
- Public forms are **insert-only** for anonymous visitors, with column-level grants and no read access.
- Database rate limits keyed on `cf-connecting-ip`, race-free (advisory lock), with team members exempt.
- Contacts deduped automatically on email or phone; one person, many enquiries.
- Save to the database first, then email the office; if the save fails, the email still goes, marked "Saved in CRM: NO".
- Inbox with "make a follow-up card", multi-board work board, append-only comments and activity log.
- CRM on its own `crm.` subdomain, hidden from search, never linked from the public site.
- CI that checks bundle size, scans for leaked secrets, and verifies after deploy that public `/login` is 404 and `crm.../login` is 200.

**Fix this time (gaps or bugs found in the existing builds):**
1. Full schema, storage buckets, policies and auth hook in migrations from the first commit (MMD).
2. Commit the Supabase Auth email templates and URL settings to the repo (none of the three did).
3. Branded sign-in emails sent from the hospital domain through custom SMTP, not Supabase's default sender (none of the three).
4. A real invite email sent by the system (none of the three).
5. Confirmation email to the person who submitted the form, with the next step. This is also what the owner asked for in the 6 October video.
6. Turnstile on every public form (none of the three; the ZagaPrime launch gate requires it).
7. Generate the database's allowed service list from the same source as the website, with a test that fails if they drift. 7th Grace silently loses some leads because they drifted.
8. Put the CRM host itself in the Auth redirect allow-list and make it the Site URL. 7th Grace's list misses it.
9. Actually call the attribution capture (7th Grace never does).
10. End-to-end tests must never write into the production CRM (7th Grace does on every deploy).
11. Audit status changes, add CSV export, show uploaded files through signed links (Tinash).
12. Phone numbers normalised to `+234` format. The "last 10 digits" match only works for Nigerian numbers by accident.

## 2. Where Lebarty starts from

- **Site:** `lebartymedicare.org`, Next.js 15 + OpenNext on Cloudflare Workers, app in `web/`, deploys via PR preview → staging → approval-gated production. No middleware yet. Security headers already set in `next.config`.
- **Forms today:** the contact form posts to `#`, so every website enquiry is currently lost. The booking page and the "Book the Silver/Gold/Elite package" buttons lead to phone calls, not captured requests. LMH-38 (booking form with patient location routing) is still an idea.
- **Email:** Microsoft 365. MX and SPF point to Outlook. No DMARC record yet (LMH-24).
- **DNS:** Cloudflare (`coleman`/`haley` nameservers).
- **Compliance:** NDPC registration (LMH-17), a data protection practitioner (LMH-18) and the ZagaPrime business associate agreement (LMH-19) are all open. The EMR is a separate system (SwiftPractice, LMH-15).
- **Opening:** October 2026.

## 3. What the Lebarty CRM is (and is not)

**It is** the front desk's system for everything that comes in from outside: enquiries, appointment requests, care package enquiries, call-back requests from the chatbot, and later job applications. It tracks who called whom, what happens next, and who owns it.

**It is not** a medical record. Clinical notes, results, diagnoses and prescriptions stay in the EMR. Forms tell patients not to send medical details, as in all three builds. This boundary matters more for a hospital, so it is written into the forms, the privacy notice and the staff training.

### Intake sources (v1)

| Source | Today | In the CRM |
| :-- | :-- | :-- |
| Contact form `/contact` | Posts nowhere | `enquiries`, alert to front desk |
| Appointment request `/book` | Phone only | `appointments` (requested slot, department, patient location) |
| Care package buttons | Phone only | `enquiries` with `package = silver/gold/elite` |
| Chatbot "call me back" | No capture | `enquiries` with `source = chatbot` |
| Foundation donations | Stripe checkout (stub) | Out of scope for v1 |
| Careers | No form | v2 (recruitment module exists in all three builds) |

### Pipelines (hospital-specific)

- **Enquiries:** new → contacted → appointment booked → attended → closed. Plus "archived" for spam or duplicates.
- **Care packages:** new → contacted → price confirmed → paid → check-up booked → completed.
- **Appointments:** requested → confirmed → attended / no-show / cancelled.

Stage names live in one file and the database CHECK constraints are generated from it, with a test that they match.

### Screens (v1)

Overview (needs attention, new today, overdue follow-ups), Inbox (enquiries + appointments, claim, change status, make a follow-up card), Care packages pipeline, Appointments, Contacts, Work board, My work, Activity log, Settings (team and invites, boards, alert recipients), My profile. CSV export on Inbox, Contacts and Appointments.

**v2 candidates:** careers and applicant pipeline, staff onboarding packs, WhatsApp alerts, reporting.

## 4. Architecture

- **One app, two hosts.** The CRM ships inside the existing `web/` app. `middleware.ts` (Next 15 name; Tinash and 7th Grace use Next 16's `proxy.ts`) splits by host exactly as Tinash does:
  - `lebartymedicare.org`: public site; every CRM path returns 404.
  - `crm.lebartymedicare.org`: CRM only, `/` → `/dashboard`, `noindex`, own `robots.txt`.
  - localhost and staging serve both.
- **Database:** a new dedicated Supabase project, schema `proj_lebarty`, region London (eu-west-2, nearest to Nigeria). Port Tinash's 9 migrations, renamed and adapted, and drop the recruitment and onboarding tables until v2.
- **Email:** see section 6.
- **Bundle size:** the Workers free plan caps the script at 3 MiB gzip. Tinash needed a webpack build to fit (2.25 MiB). Measure Lebarty plus the CRM in the first PR. LMH-36 already proposes a paid Workers plan, which raises the cap to 10 MiB.

## 5. URL, DNS and Auth settings

| Item | Value |
| :-- | :-- |
| CRM URL | `https://crm.lebartymedicare.org` (Worker custom domain in `wrangler.jsonc`; Cloudflare creates the record and certificate, no manual A/CNAME) |
| Staging CRM | the staging Worker's `workers.dev` host |
| Supabase Site URL | `https://crm.lebartymedicare.org` |
| Redirect URLs | `https://crm.lebartymedicare.org/auth/callback`, staging callback, `http://localhost:3000/auth/callback` |
| Magic link template | `{{ .SiteURL }}/auth/callback?token_hash={{ .TokenHash }}&type=email`, committed in `supabase/templates/` |
| Invite policy | Before-User-Created hook switched on after the first admin signs in |
| Mail records | Microsoft 365 MX, SPF and autodiscover left untouched and DNS-only |

## 6. Email: invites, sign-in links, alerts, confirmations

**Problem:** Tinash sent mail by logging into the client's Hostinger mailbox over SMTP. Lebarty's mail is Microsoft 365, and Microsoft is retiring basic-auth SMTP submission, so logging a server into a hospital mailbox is not a dependable path.

**Plan:** one transactional email provider on a **sending subdomain**, so the hospital's Microsoft 365 setup is never touched:

- Subdomain `notify.lebartymedicare.org` with its own SPF and DKIM records (Resend, or Cloudflare Email Service; both work over HTTP from Workers).
- From address `Lebarty Medicare <no-reply@notify.lebartymedicare.org>`, Reply-To the front desk mailbox (staff alerts use Reply-To = the patient, as in Tinash).
- DMARC on the apex (`p=none` first, then quarantine, then reject), which closes LMH-24 at the same time.
- The same provider is set as Supabase Auth's custom SMTP, so sign-in links are branded and not rate-limited.

| Email | Trigger | To | Notes |
| :-- | :-- | :-- | :-- |
| Team invite | Admin adds a person in Settings | Invited staff member | New. Branded, links to `crm.../login`. No token in the email; the sign-in link comes separately |
| Sign-in link | Staff request at `/login` | Staff member | Supabase Auth via custom SMTP, `token_hash` template |
| New enquiry alert | Any public form | Front desk list, per type | Port of Tinash `notifyOffice`, never blocks the form, "Saved in CRM" line |
| Patient confirmation | Any public form with an email | Patient | New. Thanks them and states the next step and office phone |
| Daily digest | Morning cron | Admins | Optional: unclaimed and overdue items |

**Routing:** recipients configured per intake type (appointments and packages to the front desk; general enquiries to info@), stored in Settings rather than env vars so the hospital can change them.

**WhatsApp/SMS (v2):** most Nigerian patients answer WhatsApp before email. Plan a WhatsApp alert to the front desk phone through the WhatsApp Business Cloud API or a Nigerian SMS provider once v1 is stable.

## 7. Security and compliance

- Turnstile on every public form, plus honeypot, plus database rate limits (Turnstile script and frame added to the CSP).
- No medical details on forms. Privacy notice rewritten for the NDPA 2023, replacing the US HIPAA wording.
- **Go-live gates:**
  - NDPC registration (LMH-17)
  - data protection practitioner (LMH-18)
  - business associate agreement (LMH-19)
  - Supabase data processing agreement and a note that data is hosted in the UK (cross-border transfer under the NDPA)
- Supabase **Pro** for production: daily backups and no free-plan pausing. If the hospital declines, the keepalive workflow from Tinash is required.
- Run the ZagaPrime launch gate (security, AI/search, leads/attribution, legal/sector) with evidence before go-live.

## 8. Build phases

| Phase | Work | Proven by |
| :-- | :-- | :-- |
| 0. Decisions and accounts | Answer section 9; create the Supabase projects (prod + staging); email provider; Turnstile site key | Accounts exist, keys in GitHub and Worker secrets, nothing committed |
| 1. Database | `proj_lebarty` migrations: team, roles, invites, contacts, enquiries, appointments, packages, boards, tasks, comments, activity, rate limits, auth hook, buckets | `supabase db reset` clean; RLS test (anon can insert, cannot read; viewer cannot write) |
| 2. Auth and host split | `middleware.ts`, Supabase clients, login, `token_hash` callback, `safe-next`, sign-out, access screens | Unit tests for host routing; sign-in works from a phone email app |
| 3. Intake | Contact, appointment, package and chatbot forms → DB; Turnstile; attribution; `/api/inquiry` relay | Test lead lands in staging DB; service-list parity test passes |
| 4. Email | Sending subdomain DNS, provider, Auth SMTP and templates, alerts, patient confirmation, invite email | Mail-tester score; alert and confirmation received; SPF/DKIM/DMARC pass |
| 5. CRM screens | Overview, Inbox, Packages, Appointments, Contacts, Board, Settings, Profile, Activity, CSV export | Walkthrough on staging with seeded data |
| 6. Deploy and DNS | `crm.` custom domain, staging and production Workers, smoke checks | Public `/login` 404, `crm/login` 200, sitemap excludes CRM |
| 7. Handover | Invite the first admin, enable the auth hook, train front desk, runbook (`docs/CRM.md`, `docs/DNS.md`) | Hospital admin invites a colleague unaided |

Each phase becomes a work item under LMW-46 once this plan is agreed.

## 9. Decisions needed from the owner or ZagaPrime

1. **Who gets access, and in which role?** First admin's email, front desk staff, leadership (read-only).
2. **Alert recipients:** which mailbox or people get each type of intake.
3. **Supabase plan:** Pro for production (recommended) or free plus keepalive.
4. **Email provider:** Resend (used as fallback in all three builds) or Cloudflare Email Service.
5. **Booking model:** free-text preferred date and time (simplest), or fixed slots per department.
6. **v1 scope:** confirm careers, onboarding and WhatsApp alerts wait for v2.
7. **Compliance order:** go live with non-clinical intake while LMH-17/18/19 complete, or wait.
