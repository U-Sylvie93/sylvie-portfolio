# Certificate confirmation and footer update

## Certificates
The seven additional supplied PDFs match certificates already listed: Foundational C# with Microsoft, Responsive Web Design, Associate Python Developer, Introduction to Cybersecurity, iChoose Leadership Values Program, iDo Leadership Values Program and iLead Program. Titles, dates and the stated 30-hour / approximately 300-hour course durations match the existing records. The leadership date remains June 4, 2025, consistent with the owner's previously supplied date and certificate text.

The total remains ten: seven technical and three leadership/professional development. No duplicate or newly invented credential has been added. Course completion information was checked against extracted PDF text and rendered pages; no independent issuer authentication is claimed.

All ten original PDFs remain private in the owner's Documents folder. No original certificate images, QR codes, DataCamp statement number or newly extracted certificate IDs are published. Previously approved freeCodeCamp verification URLs remain unchanged. Git ignores every PDF under public/certificates/, and browser checks require that directory to contain none. The separately approved CV remains publicly downloadable.

## Footer design
A reusable Footer component replaces the minimal footer. It uses plain-name branding, the verified developer title and public email, concise section navigation, labeled GitHub/LinkedIn links, a shared CV download link, current copyright year and a keyboard-accessible back-to-top anchor. Subtle borders, restrained typography and responsive stacking match the compact emerald theme. No decorative logo, large promotional panel or new personal information was added.

Navbar, Hero and Footer now share the same approved CV URL and download filename.

## Files changed
- src/components/footer.tsx (new)
- src/app/page.tsx
- src/app/globals.css
- src/data/certifications.ts (provenance comment only)
- scripts/emerald-browser-qa.mjs
- .gitignore, public/certificates/README.md and README.md
- This report.

## Validation
Passed: ESLint, TypeScript, production build, HTTP smoke checks and Edge/Playwright browser regression checks. All ten certificate entries remain, no duplicate certificates or public certificate PDFs are present, and the private PDF URLs return 404. All three CV links use the same URL and download filename, and actual navbar/Hero/Footer downloads were checked. Footer navigation, verified mailto link and keyboard back-to-top action passed. Both themes were checked at 320, 375, 390, 430, 768, 1024 and 1440px without horizontal overflow. Desktop/mobile footer screenshots were reviewed. No remaining issues found for this update.

## Local preview
In CMD, run npm run dev from C:\Users\Sylvie\Projects\sylvie-portfolio and use the Local URL printed by Next.js, normally http://localhost:3000.
