# Phase 5: updated PDF CV and C# certification

## Files changed
- `public/cv/Umutoniwase_Sylvie_CV.pdf`: unchanged copy of the supplied updated PDF.
- `public/cv/README.txt`: current CV file and URL instructions.
- `src/data/portfolio.ts`: shared CV URL.
- `src/components/ui.tsx`: explicit download filename and decorative download icon accessibility.
- `src/data/certifications.ts`: new technical certificate, using the existing reusable card.
- `scripts/emerald-browser-qa.mjs`: updated certificate counts and regression checks for CV links, HTTP PDF response, both actual downloads and file integrity.
- `PHASE_5_REPORT.md`: this report.

## CV integration
Source: `C:\Users\Sylvie\Downloads\Umutoniwase_Sylvie_Developer_CV_Updated.pdf`.
Destination: `public/cv/Umutoniwase_Sylvie_CV.pdf`.
URL: `/cv/Umutoniwase_Sylvie_CV.pdf`.

The source was confirmed to exist and pass PDF parsing before copying. No previous PDF existed at the destination. The navbar and hero both render accessible HTML download links through the shared `CvButton`, with their existing Emerald Tech styling and download icons.

The supplied CV was not edited. It is an unencrypted, one-page PDF 1.4 document (30,526 bytes). Source and destination SHA-256 match:
`2E877497B9E217407E388781F239E1B92C98F60F2E43D7094C16151FAC87DB14`.

## New technical certification
- Name: Foundational C# with Microsoft
- Issuer: freeCodeCamp in collaboration with Microsoft
- Completed: October 12, 2026
- Verification: https://www.freecodecamp.org/certification/fcc-df763bc2-810a-4103-9cbe-d82075135302/foundational-c-sharp-with-microsoft
- Category: Technical Certifications
- Icon: existing technical code icon in `CertificationCard`.

The entry uses the owner's supplied details. It is not described as a Microsoft professional certification, and no credential ID or achievement was added.

## Certificate count and preserved content
Seven entries: four technical and three leadership/professional development. All six previous entries remain: Responsive Web Design, Associate Python Developer, Introduction to Cybersecurity, iChoose Leadership Values Program, iDo Leadership Values Program, and iLead Program.

All five curated projects and the Team Project disclosure remain. No theme colors, layouts, hero content, portrait settings, contact details or education information were changed. The Emerald palette and existing light theme are preserved.

## Validation results
- ESLint: passed (`npm run lint`).
- TypeScript: passed (`npm run typecheck`), and production compilation/type checking passed.
- Production build: passed (`npm run build`), including static page generation and final trace collection.
- PDF: parsed successfully; source/copy hashes match; local HTTP GET returned 200 with `application/pdf` and identical bytes.
- Downloads: actual navbar and mobile hero downloads succeeded with the expected filename and matching bytes.
- Certifications: all seven names checked; four technical and three leadership; C# issuer, date, exact verification URL and safe external link attributes checked.
- Verification URL: browser HTTP request returned 200 from freeCodeCamp.
- Browser regression suite: passed in Edge/Playwright at 320, 375, 390, 430, 768, 1024 and 1440px in both themes, without horizontal scrolling. Theme persistence, project filters/ownership, mobile navigation, keyboard focus/Escape, reduced motion and contact validation passed.
- HTTP smoke test: passed for server-rendered sections, metadata, favicon and contact availability.
- Screenshots reviewed: new certificate on desktop in both themes and on mobile; no clipping or style inconsistencies found. Screenshots are under `preview/phase5-*.png`.

## Local preview
http://localhost:3000

To start it yourself in CMD:

```cmd
cd /d "C:\Users\Sylvie\Projects\sylvie-portfolio"
npm run dev
```

Use the Local URL printed by Next.js if port 3000 is already occupied.

## Remaining issues
No remaining Phase 5 issues. All requested checks passed. The external verification URL was reachable through the browser despite initial web-client/TLS fetch failures. No push or deployment was performed.


