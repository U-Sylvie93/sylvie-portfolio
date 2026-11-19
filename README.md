# Umutoniwase Sylvie — developer portfolio

Personal developer portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Current portfolio

- Restrained emerald theme with dark/light modes, a plain-name header and responsive layouts.
- Frameless hero with a transparent portrait and soft emerald glow; original portrait in About.
- Five compact, text-led project cards with accurate technologies, ownership disclosures and repository links.
- Ten certifications: seven technical and three leadership/professional development.
- Downloadable professional CV from both navigation and Hero.
- University of Rwanda IT education and developer journey.
- Accessible navigation, keyboard focus, reduced-motion support and contact validation.

Project records, credentials and personal information live in `src/data/`. Reusable page components live in `src/components/`.

## Run locally

Use Node.js 24 LTS and npm:

```sh
npm ci
npm run dev
```

Open the Local URL printed by Next.js, normally http://localhost:3000.

To run in Windows CMD:

```cmd
cd /d "C:\Users\Sylvie\Projects\sylvie-portfolio"
npm run dev
```

## Validate and build

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The scripts use Next.js Webpack mode. After starting the local server, run `node scripts/smoke.mjs` for HTTP checks. Set `SMOKE_URL` if using another port.

`scripts/emerald-browser-qa.mjs` is an optional Edge/Playwright regression suite. It uses the local Codex Playwright runtime by default. Set `PLAYWRIGHT_PATH` to a Playwright `index.mjs` file and edit the browser executable path if using another environment. Screenshots are written to ignored `preview/`.

Latest lint, TypeScript, production build, HTTP smoke and browser checks passed. Browser checks cover both themes at seven widths, all images, project filters, ten certificates, both CV downloads, navigation, keyboard focus, reduced motion and form validation.

## Images and CV

- `public/images/sylvie-profile.png`: original supplied portrait, used in About.
- `public/images/sylvie-portrait-cutout.png`: background-extracted portrait used by the frameless Hero. The built-in imagegen edit prompt and notes are in `HERO_UPDATE.md`.
- `public/images/projects/`: older illustrations retained as unused source assets. The current project cards use a compact image-free layout. Genuine screenshots are supported through the project data when available.
- The three new certificate cards publish course names, issuers, providers and completion dates only. Their original PDFs and certificate IDs are excluded from the public website and repository.
- `public/cv/Umutoniwase_Sylvie_CV.pdf`: supplied professional CV, copied unchanged and served at `/cv/Umutoniwase_Sylvie_CV.pdf`.

The older JPG is retained as an unused source asset. Certification documents can be added only when genuine files are supplied. No screenshots, credentials, technologies or achievements are fabricated.

## Configuration

Copy `.env.example` to `.env.local` only when configuring delivery or a production origin. Private environment files, dependencies, build output and local screenshots are ignored by Git.

The contact form requires `RESEND_API_KEY`, `CONTACT_EMAIL` and `CONTACT_FROM_EMAIL` for server-side email delivery. Without configuration, it reports that messages were not sent and preserves form text. Direct email, phone and social links remain available. No test email is sent when delivery is configured.

Set `NEXT_PUBLIC_SITE_URL` only when the actual production URL is known. Hosting/deployment is a separate step.

## Content notes

MK Scholars is disclosed as a Team Project; individual contributions are not invented. Earlier frontend projects retain their template attributions. Live Demo links remain absent until their deployments can be verified. See `PROJECT_VERIFICATION.md` for the historical repository review.

The new course certificates and privacy choice are documented in `CERTIFICATE_UPDATE.md`. The latest visual simplification is documented in `CLEANUP_REPORT.md`. Earlier changes are documented in `PHASE_5_REPORT.md`, `IMAGERY_UPDATE.md` and `HERO_UPDATE.md`. Older phase reports describe earlier states and are retained for context.
