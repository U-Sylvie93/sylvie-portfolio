# Emerald hero update

The existing portfolio now uses the supplied emerald palette, a spacious rounded two-column hero, a restrained portrait glow, and matching repository cards. All five curated projects, technology tags, ownership disclosures, credentials, contact details, filters, theme controls and CV behavior are retained.

The selected image is pending. Hero shows a monogram placeholder and About uses its existing monogram fallback; no artificial portrait is used. When the final portrait is selected, replace `public/images/sylvie-profile.jpg` and change `showProfileImage` to `true` in `src/data/portfolio.ts`. Both sections will use Next.js Image with a proportional crop. The previous image file is retained, but hidden.

Local preview from CMD:

```cmd
cd /d "C:\Users\Sylvie\Projects\sylvie-portfolio"
npm run dev
```

Open the Local URL printed by Next.js. Keep the CMD window open; Ctrl+C stops the server.

Validation commands: `npm run lint`, `npm run typecheck`, `npm run build`, and `node scripts/smoke.mjs`. The optional `scripts/emerald-browser-qa.mjs` uses the installed local Playwright runtime and Edge; set `SMOKE_URL` to the running preview URL, and `PLAYWRIGHT_PATH` to a Playwright `index.mjs` path if needed. It checks both themes at seven widths, the five project links and filters, ownership, placeholder, navigation, focus, reduced motion, CV dialog and required form validation. Screenshots are written to `preview/`.

No Git push or deployment is part of this update.

Validation results (20 October 2026):
- Full ESLint check passed.
- TypeScript check passed.
- Production build passed, with the static homepage and dynamic contact route generated successfully.
- HTTP smoke checks passed for server-rendered sections, metadata, favicon and contact availability.
- Edge/Playwright browser checks passed: five repository links, one Team Project and four Personal Projects, filters, six credentials, portrait placeholder, CTA links, both themes at 320/375/390/430/768/1024/1440px without horizontal scrolling, theme persistence, mobile navigation and Escape/focus restoration, CV dialog, keyboard focus outline, reduced motion and contact required-field validation.
- Desktop, tablet and mobile screenshots were reviewed. Screenshots are in `preview/`.

Local preview: http://localhost:3000 (existing development server). If starting it yourself, use the CMD commands above and the Local URL printed by Next.js.
