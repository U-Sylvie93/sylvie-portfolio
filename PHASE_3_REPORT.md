# PHASE 3 REPORT — Umutoniwase Sylvie

Completed 7 October 2026 in the existing Next.js portfolio. The application was not recreated. Dependency versions and working behavior were preserved. No GitHub push or deployment occurred.

## 1. Files changed

| File | Change |
| --- | --- |
| src/data/portfolio.ts | Real email/phone, Certifications navigation, five curated projects with ownership, University of Rwanda education; historical demo suppressed. |
| src/data/certifications.ts | New reusable typed records for all six supplied certifications. |
| src/components/certifications.tsx | New reusable CertificationCard and grouped section; optional verification/document/image support. |
| src/components/profile-photo.tsx | New server-detected local portrait component with Next.js Image and honest absent-photo fallback. |
| src/components/sections.tsx | Real IT-student biography, identity/photo slot, filled education card, journey access. |
| src/components/projects.tsx | Personal/Team labels and preserved featured/source/filter behavior. |
| src/components/contact.tsx | Clickable real email and phone; explicit separation of validation and unavailable delivery. |
| src/components/navigation.tsx | Simplified navigation with Certifications and retained keyboard/mobile behavior. |
| src/app/page.tsx | Content order now prioritizes projects, skills and certifications. |
| src/app/layout.tsx | Real university/student context in description; no phone metadata. |
| src/app/globals.css | Responsive profile frame, education treatment, technical/leadership cards, ownership labels and contact wrapping. |
| scripts/smoke.mjs | Certifications section included in server-rendering smoke checks. |
| public/images/README.md | Exact portrait placement and crop instructions. |
| public/certificates/README.md | Genuine certificate asset placement instructions; no assets fabricated. |
| README.md | Updated Phase 3 architecture, setup, personal assets, contact and verification notes. |
| PROJECT_VERIFICATION.md | Dated Phase 3 recheck limits and owner-provided collaboration status. |
| PHASE_3_REPORT.md | This report. |

## 2. Education implementation

A real data-driven education card displays University of Rwanda, Information Technology (IT), and 2025 — 2029 (Expected). It uses the established surface, border and mint accent system. No degree title, campus, GPA, modules, awards or academic achievements were added. Year Two is not displayed.

About now identifies Sylvie as a Full-Stack Web Developer and Information Technology student at the University of Rwanda. The tone emphasizes practical development and continuous learning without implying senior employment.

## 3. Certifications implementation

Technical certifications are the prominent first group:

| Name | Issuer | Date | Supplied duration |
| --- | --- | --- | --- |
| Responsive Web Design | freeCodeCamp | Completed October 1, 2026 | Approximately 300 hours of work |
| Associate Python Developer | DataCamp | Completed June 10, 2026 | 30 hours |
| Introduction to Cybersecurity | Cisco Networking Academy | Issued December 2, 2025 | Not supplied; omitted |

Leadership & Professional Development is a quieter second group:

- iChoose Leadership Values Program — Maxwell Leadership Foundation — completed June 4, 2025.
- iDo Leadership Values Program — Maxwell Leadership Foundation — completed June 4, 2025.
- iLead Program — Maxwell Leadership Foundation — completed June 4, 2025; all three levels, iChoose, iDo & iLead.

All details are owner-supplied. No credential IDs were inferred. The freeCodeCamp verification link is included exactly as provided. The cards support genuine verification URLs, documents and images later; missing URLs/assets do not produce fake or broken actions. The remote freeCodeCamp destination could not be rechecked in this run.

## 4. Project information and verification

Exactly these five records remain visible. No descriptions or technologies were expanded without access to source evidence. Their existing documentation dates to 5 October 2026:

| Repository | Retained source-backed information | Phase 3 status |
| --- | --- | --- |
| E-Learning | HTML/CSS/JavaScript/Bootstrap/SCSS frontend, with course/instructor/contact/sign-in pages and template adaptation attribution. Authentication is not asserted. | Fresh access failed; Personal Project label authorized by owner. |
| Sylvie-website | Earlier HTML/CSS/JavaScript/Bootstrap portfolio with TemplateMo Elegance attribution. Template biography/statistics were not adopted. | Fresh access failed; Personal Project label authorized by owner. |
| MKInnovationLtd | Laravel/PHP/Blade/Vite business site and newsletter validation; actual mailing-list delivery is not asserted. | Fresh access failed; Personal Project label authorized by owner. |
| mk-innovation | Next.js/React/TypeScript/Tailwind business website with reusable presentation sections. | Fresh access failed; historical demo could not be reconfirmed and is hidden. |
| E-learning-mkscholars | Laravel/PHP/Blade/Livewire/Tailwind/Filament learning-platform source, with discovery, enrollment/progress and admin implementation documented in the earlier review. | Fresh access failed; Team Project status supplied directly by owner. |

See PROJECT_VERIFICATION.md for original manifest/README/source links. All five GitHub hrefs were checked in the browser against the requested repository URLs, which is distinct from fresh remote repository inspection. No suitable repository screenshots could be retrieved; polished neutral repository artwork remains. No fake screenshots were created.

## 5. Featured selection

Two featured records remain, within the requested 2–3 range:

- MK Scholars: the most substantial documented full-stack learning-platform example, with backend, data and interface layers. Its team status remains prominent.
- MK Innovation: a distinct modern Next.js/React/TypeScript frontend example.

Selection is editorial and based on documented code scope, not awards, users, business outcomes or current demo uptime. All five projects remain accessible through All and category filters.

## 6. Group-project identification

E-learning-mkscholars is labeled Team Project with a Users icon and a note describing collaborative development work. The owner explicitly supplied this fact. No individual contribution, commit history attribution or sole-creator status was invented. Four other records are labeled Personal Project as authorized, with existing template attribution preserved.

## 7. Profile photo status

No real portrait was found in accessible workspace or attachment image files. No portrait was generated. A neutral branded monogram occupies the identity slot without a broken image request.

Place the selected real photo at:

public/images/sylvie-profile.jpg

Public URL: /images/sylvie-profile.jpg. The server component automatically detects that exact file during rendering/build. Next.js Image uses alt text Umutoniwase Sylvie, responsive sizes, an undistorted cover crop, tasteful border/frame and no extreme filters. Rebuild production or restart development after adding it. Actual portrait rendering cannot be tested until that real asset exists.

## 8. Contact implementation

- Email: umutoniwasesylvie38@gmail.com, using mailto:.
- Phone display: 0794 689 345; clickable local number tel:0794689345. No country code was guessed.
- GitHub and LinkedIn links retained.
- Phone is absent from metadata.
- Form fields and shared validation remain. Stable error slots preserve the earlier first-click submission fix.
- The notice explicitly distinguishes UI validation from actual delivery. No delivery configuration was added; valid form submissions return an honest HTTP 503/not-sent response and retain text. No outbound email was sent.

There is no CV. The existing availability dialog and public/cv/sylvie-cv.pdf architecture remain; no fake CV or broken PDF link was created.

## 9. Information still missing

- The selected real profile photograph in the documented location.
- The future real CV, to be created in a later authorized phase.
- Genuine certificate documents/images and other credential URLs, if desired.
- Individual responsibilities in the group project, if the owner wishes to document them.
- Email delivery configuration, approved sender and server-side credentials in a later phase.
- A production domain and newly confirmed working demos.
- An international phone country code, only if international dialing is intended.

None of these missing items were fabricated. They do not prevent this phase's local portfolio completion.

## 10. Validation results

| Check | Result |
| --- | --- |
| npm run lint | Passed. |
| npm run typecheck | Passed. |
| npm run build | Passed, including production type validation and static page generation. |
| HTTP smoke | Passed: sections, Certifications, SEO/Open Graph metadata, favicon, unavailable-delivery response. |
| Responsive widths | Passed at 320, 375, 390, 430, 768, 1024 and 1440 pixels; no document horizontal overflow. |
| Visual review | Fresh desktop dark/light certifications, tablet/mobile certifications, mobile About/profile slot and education reviewed. |
| Projects | Exactly five cards, two featured, one Team Project, four Personal Projects; removed Innovations URL absent. |
| Filters | All 5, Full Stack 2, Frontend 3, Backend 0 with honest empty state. |
| Certifications | Six cards, correct technical/leadership grouping, exact supplied dates, correct freeCodeCamp href. |
| Education/About | University and expected date range rendered; student/developer biography; Year Two absent. |
| Link targets | Five GitHub URLs, LinkedIn, mailto, tel and freeCodeCamp matched supplied values. Remote availability is not newly verified. |
| Profile | Absent-photo fallback rendered without an image request; actual photo rendering pending the real file. |
| Themes/navigation | Switching, reload persistence, valid internal anchors, mobile link selection/menu close and Escape passed. |
| Accessibility | Semantic sections/card labels, visible focus, form associations, first-error focus, meaningful prepared photo alt, reduced-motion behavior reviewed/tested. |
| CV | Availability dialog opens/closes with Escape; no missing PDF download. |
| Contact | Required fields and malformed email rejected; corrected email submits exactly one POST on first click; not-sent text and input retention passed. |
| Browser runtime | No page exceptions in the final run. |

Browser checks used Edge/Chromium with reduced motion. Source archive excludes dependencies, generated output, Git metadata and private environment files. Local Phase 3 preview: http://127.0.0.1:3001. Nothing was deployed or pushed.
