# Additional technical certificates

The three new cards publish certificate names, issuers/programs, training providers and completion dates only, following the owner's choice to keep the original PDFs private. All seven previous entries remain: ten certificates total, comprising seven technical and three leadership/professional development.

| Certificate | Program / issuer shown | Offered by | Completed |
| --- | --- | --- | --- |
| Python Essentials 1 | Cisco Networking Academy / Python Institute | TRUSTERLABS Ltd. | June 28, 2026 |
| Computer Hardware Basics | Cisco Networking Academy | TRUSTERLABS Ltd. | May 26, 2026 |
| IT Essentials | Cisco Networking Academy | University of Rwanda | April 26, 2026 |

## Publication choice
The supplied one-page PDFs were read and visually reviewed to obtain the details. They remain unchanged in the owner's Documents folder. The temporary public copies and their card links were removed before publication. The original PDFs were never pushed to GitHub; the existing remote certificate directory contained only its README when checked. No new certificate IDs or source-document images are published.

The three PDF filenames are ignored by Git, and browser checks require each corresponding public URL to return 404. No view-only protection is claimed: public text can still be copied, as explained to the owner. Previously approved external credential links and the downloadable CV remain unchanged.

The compact card layout, portrait, five projects and both themes are preserved. The reusable certification component now supports an optional training provider.

## Files changed
- `src/data/certifications.ts`
- `src/components/certifications.tsx`
- `scripts/emerald-browser-qa.mjs`
- `.gitignore`, `README.md`, `public/certificates/README.md`, and this report.

## Validation
Passed: ESLint, TypeScript, production build, HTTP smoke tests and Edge/Playwright regression checks. All ten certificate names, exact new completion dates and providers are displayed; no PDF links appear on the three new cards. The three PDFs are absent from public assets and their URLs each return HTTP 404. Both themes passed at 320, 375, 390, 430, 768, 1024 and 1440px without horizontal overflow. The five projects, portrait, navigation, keyboard focus, reduced motion, contact validation and existing CV downloads passed. No remaining issues for this metadata-only update.

## Local preview
Run `npm run dev` from `C:\Users\Sylvie\Projects\sylvie-portfolio` in CMD and open the Local URL printed by Next.js, normally http://localhost:3000.
