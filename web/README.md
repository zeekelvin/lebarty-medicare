# lebartymedicare.org

Marketing + foundation site for **Lebarty Medicare Hospital** and the **Lebarty Community Health Foundation**, built by Zagaprime.

Stack: **Next.js 15** (App Router) · **React 19** · **Tailwind CSS** · **TypeScript** · **Stripe** (donations) · **Supabase** (non-PHI: blog, contact, donation logs) · **Tebra** (booking + patient portal embed).

---

## Quick start

```bash
# 1. Install
cd web
npm install

# 2. Copy env file and fill in keys when ready
cp .env.example .env.local

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

The donation flow runs in **stub mode** until `STRIPE_SECRET_KEY` is set in `.env.local` — you can still click through the UI end to end.

---

## Project structure

```
web/
├── public/
│   ├── logo.svg            # Full logo (mark + wordmark)
│   ├── logo-mark.svg       # Mark only
│   └── favicon.svg
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout, fonts, JSON-LD
│   │   ├── page.tsx        # Home
│   │   ├── about/dr-lebarty/
│   │   ├── services/       # Index + 6 service pages
│   │   ├── book/           # Booking widget host (Tebra embed)
│   │   ├── patients/       # Patient hub + insurance
│   │   ├── foundation/     # Foundation home + donate flow
│   │   ├── resources/      # Blog index (cornerstone list)
│   │   ├── locations/benin-city/
│   │   ├── contact/
│   │   ├── accessibility/
│   │   ├── privacy/
│   │   ├── hipaa-notice/
│   │   ├── api/donate/     # Stripe Checkout session creator
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/         # Header, Footer, Logo
│   │   ├── home/           # Homepage sections
│   │   ├── donate/         # DonationForm
│   │   └── ui/             # Button, Container, PageHero, Eyebrow, ServiceStubPage
│   └── lib/
│       ├── site.ts         # Single source of truth: copy, contact, services, insurance
│       └── cn.ts           # Tailwind className merger
├── tailwind.config.ts      # Brand tokens
├── next.config.mjs         # Security headers + image config
└── tsconfig.json
```

### Where to edit content
Almost all body copy, contact info, services, and insurance plans live in **`src/lib/site.ts`**. Edit there and it propagates to every page that uses it.

For long-form text on a service or article page, edit the page file directly under `src/app/...`.

---

## Brand assets

Master logo lives in `public/logo.svg` (full lockup with curved wordmark) and `public/logo-mark.svg` (icon mark only). Favicon at `public/favicon.svg`.

If you want to ship the client's original PNG instead of the SVG recreation, drop it at `public/logo-original.png` and swap the references in `src/components/layout/Logo.tsx`.

## Brand tokens

Defined in `tailwind.config.ts`. Token names (`forest`, `terracotta`) are kept generic so refactors stay easy; values reflect the real brand.

| Token            | Hex       | Use                                                      |
|------------------|-----------|----------------------------------------------------------|
| `forest-500`     | `#36B348` | Kelly green — primary brand, cross outline, primary CTAs |
| `forest-700`     | `#1B6B27` | Deep green — dark surfaces (footer, dark sections)       |
| `forest-800`     | `#134E1B` | Deepest green — inner cards on dark sections             |
| `terracotta-500` | `#E94B3C` | Warm red — heart, accent italics, foundation CTAs        |
| `cream-50`       | `#FBF8F2` | Page background                                          |
| `cream-100`      | `#F5EDE0` | Secondary warm surfaces                                  |
| `charcoal`       | `#1F2A2A` | Body text                                                |
| Fonts            |           | Fraunces (serif headlines), Inter (sans body)            |

---

## Integrations to wire up

### 1. Tebra (booking + patient portal)
- Sign in to Tebra and grab the practice's scheduling widget URL.
- Replace the placeholder block in `src/app/book/page.tsx` with the iframe embed.
- Same widget can be embedded inline on individual service pages (e.g. addiction-medicine, telehealth).

### 2. Stripe (donations)
1. Create a **Stripe nonprofit account** for the Foundation; apply for the reduced-fee program.
2. Set `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in `.env.local`.
3. (Optional) Build a `/api/donate/webhook` route handler to log successful payments to Supabase and trigger receipt emails via Postmark.

### 3. Supabase (non-PHI v1)
- Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and (server-side only) `SUPABASE_SERVICE_ROLE_KEY`.
- Suggested initial tables: `donations`, `contact_submissions`, `volunteer_inquiries`. **No PHI** — patient health data lives in Tebra.

### 4. Email (Postmark)
- Use Postmark transactional templates for: donation receipt, contact form notification, volunteer inquiry confirmation.
- Postmark offers a HIPAA tier when needed in Phase 2.

### 5. Photography
- The site currently uses CSS/SVG placeholder visuals (`HeroVisual`, `DoctorSpotlight`, `FoundationCallout`).
- Once the photo shoot is complete, drop assets in `/public/images/` and replace placeholders with `<Image>` from `next/image`.

---

## Accessibility (WCAG 2.1 AA — required)

The site is built to meet WCAG 2.1 Level AA:

- Skip-to-content link in `globals.css`
- Visible focus rings on all interactive elements
- Color contrast verified against 4.5:1 on body, 3:1 on display type
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels on icon-only controls
- `prefers-reduced-motion` honored
- Form fields with explicit labels and `:focus-visible` rings

**Before launch run:**
```bash
npx pa11y http://localhost:3000
npx @axe-core/cli http://localhost:3000
npx lighthouse http://localhost:3000 --only-categories=accessibility
```

Plus a manual pass with NVDA (Windows) and VoiceOver (Mac).

---

## Deployment (Cloudflare Workers)

Deployments are controlled by GitHub Actions and Cloudflare Wrangler:

- Pull requests to `main` run typecheck, build a Cloudflare Worker with staging settings, upload a per-PR preview version, and post a preview URL comment.
- Merges to `main` deploy the persistent staging worker automatically.
- Production deploys only after the `production` GitHub Environment receives manual approval.

Production URL: `https://lebartymedicare.org`

Staging URL: `https://lebarty-medicare-staging.<workers-subdomain>.workers.dev`

PR preview URL format: `https://pr-<number>-lebarty-medicare-staging.<workers-subdomain>.workers.dev`

Required GitHub repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Required GitHub repository variables:

- `CF_WORKERS_SUBDOMAIN`

Required GitHub environments:

- `staging`: no required reviewer.
- `production`: required reviewer approval enabled, deployment branch limited to `main`.

Runtime secrets such as `STRIPE_SECRET_KEY` and `OPENAI_API_KEY` live in Cloudflare Workers, not GitHub. Set them with Wrangler, using `--env staging` for the staging worker.

Bootstrap staging before the first PR preview:

```bash
npm run cf:build
npx opennextjs-cloudflare deploy --env staging
```

`wrangler versions upload` requires the staging worker to exist first. Use `wrangler versions upload` only for PR previews; staging and production use `opennextjs-cloudflare deploy`.

After the first successful GitHub Actions production deploy, disconnect the Cloudflare Workers Builds git integration in the Cloudflare dashboard. Leaving it connected would let pushes to `main` continue deploying directly to production and bypass the manual approval gate.

### Performance targets at launch
- Lighthouse mobile: **95+** across all four categories
- LCP ≤ **2.0s**, CLS ≤ **0.05**, INP ≤ **150ms**
- JS route-shell ≤ **90KB gzipped**

---

## Roadmap

See `../01_Research_and_Strategic_Plan.md` (one level up) for the full strategic plan, phased roadmap, and open decisions.

**Built by [Zagaprime](https://zagaprime.com).**
