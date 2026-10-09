# Dulaar Hospital & Children Clinic — Website

A fast, SEO-friendly marketing website for **Dulaar Hospital & Children Clinic**, a 24x7
pediatric and multi-specialty hospital in Bagsewaniya, Hoshangabad Road, Bhopal. The site
showcases services, doctors, facilities and testimonials, and lets visitors request OPD
appointments online.

---

## Tech Stack

| Area          | Technology                                                     |
| ------------- | -------------------------------------------------------------- |
| Framework     | [Next.js 15](https://nextjs.org) (App Router)                   |
| Language      | TypeScript                                                     |
| UI            | React 19                                                       |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme`) |
| Animation     | [Framer Motion](https://www.framer.com/motion/)                |
| Icons         | [Lucide React](https://lucide.dev)                             |
| Forms         | React Hook Form + Zod (`@hookform/resolvers`)                  |
| Email         | [Resend](https://resend.com)                                    |
| Linting       | ESLint (`eslint-config-next`)                                  |

---

## Project Structure

```
app/
  api/appointment/route.ts   # POST endpoint: validates + emails appointment requests
  privacy/page.tsx           # Privacy Policy
  terms/page.tsx             # Terms of Service
  disclaimer/page.tsx        # Medical Disclaimer
  opengraph-image.tsx        # Dynamic social share image (next/og)
  layout.tsx                 # Root metadata + JSON-LD structured data
  page.tsx                   # Home page (all sections)
  sitemap.ts, robots.ts      # SEO files
  globals.css                # Tailwind theme + component classes
components/                   # Header, Hero, About, Services, Doctors, Facilities,
                              # Testimonials, AppointmentForm, Contact, Footer,
                              # FloatingWidget, LegalPage, Reveal, SectionHeading, Logo
lib/
  site.ts                    # Central site config (name, phone, address, content data)
  form-schema.ts             # Zod appointment schema + option lists
```

---

## Local Setup

**Prerequisites:** Node.js 18.18+ (Node 20+ recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env.local   # then edit values (see below)

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server             |
| `npm run build`   | Create an optimized production build     |
| `npm run start`   | Run the production build locally         |
| `npm run lint`    | Run ESLint                               |

### Type Checking

```bash
npx tsc --noEmit
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values. **Never commit real secrets.**

| Variable                | Required | Description                                                                 |
| ----------------------- | -------- | --------------------------------------------------------------------------- |
| `RESEND_API_KEY`        | Yes*     | API key from [resend.com](https://resend.com/api-keys). Without it the API validates the submission but does not send email (logs to console). |
| `APPOINTMENT_TO_EMAIL`  | No       | Reception/management inbox. Defaults to `SITE.email` in `lib/site.ts`.      |
| `APPOINTMENT_FROM_EMAIL`| No       | Verified sender. Defaults to Resend's test sender (`onboarding@resend.dev`). In production use a verified domain, e.g. `Dulaar Hospital <appointments@dulaarhospital.com>`. |

\* The site still builds and runs without `RESEND_API_KEY`; email delivery is simply skipped.

> **WhatsApp number:** update `SITE.whatsapp` in `lib/site.ts` with the hospital's official
> WhatsApp number in international format (country code + number, no symbols).

---

## Appointment Flow

1. The visitor submits `components/AppointmentForm.tsx`.
2. The form `POST`s JSON to `/api/appointment`.
3. `app/api/appointment/route.ts` re-validates the payload server-side with the shared Zod
   schema in `lib/form-schema.ts`.
4. On success, Resend emails the booking details (name, age, phone, department, date, slot,
   notes) to the reception inbox.
5. The API returns structured JSON (`{ ok, delivered, message, fieldErrors }`) with proper
   status codes (`200`, `400`, `422`, `500`, `502`).

---

## SEO

- Rich metadata, Open Graph and Twitter cards in `app/layout.tsx`.
- JSON-LD `Hospital` / `MedicalClinic` structured data (NAP, hours, geo, physicians, services).
- Dynamic OG image generated at build time via `app/opengraph-image.tsx`.
- `app/sitemap.ts` and `app/robots.ts`.

Update the production domain in `lib/site.ts` (`SITE.url`) so canonical URLs, the sitemap and
structured data all point to the live site.

---

## Deployment

The project deploys cleanly to [Vercel](https://vercel.com) or any Node.js host.

**Vercel (recommended):**

1. Push the repository to GitHub/GitLab.
2. Import the project in Vercel.
3. Add the environment variables above under **Project → Settings → Environment Variables**.
4. Deploy. (Build command: `next build`; output: `.next`.)

**Self-hosting:**

```bash
npm ci
npm run build
npm run start   # serves on port 3000 by default
```

---

## License

© Dulaar Hospital & Children Clinic. All rights reserved. Content is proprietary.
