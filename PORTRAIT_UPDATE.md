# Real portrait integration — 7 October 2026

Updated the existing portfolio in place. No push or deployment occurred.

## Changes

- Corrected public/images/sylvie-profile.jpg.jpeg to public/images/sylvie-profile.jpg. Original image bytes were preserved; no retouching, filters, background replacement or re-encoding was applied to the file.
- src/components/hero.tsx: real Next.js Image replaces the developer code window and its decorative labels. Existing hero text, buttons and social/CV controls are unchanged.
- src/app/globals.css: a modest responsive 3:4 portrait frame, theme-aware border/surface/shadow, object-fit: cover and face-friendly object-position: 50% 20%. The About portrait uses the same crop alignment.
- public/images/README.md and README.md: real-photo status and placement/crop documentation updated.

The hero image is preloaded, has responsive sizes, and uses alt text Umutoniwase Sylvie. Its rendered width is approximately 318px on desktop, 278px on tablet and 240px on mobile. The source photograph remains unchanged; Next.js optimizes delivery normally. The small existing About portrait is secondary. Unrelated portfolio content was preserved.

## Validation

- npm run lint: passed.
- npm run typecheck: passed.
- npm run build: passed, including production type validation.
- Real optimized image loaded and decoded successfully; correct alt text verified.
- Developer visual absent from the rendered hero; no monogram placeholder remains while the real photo exists.
- object-fit: cover, object-position: 50% 20% and filter: none verified.
- No horizontal overflow at 320, 375, 390, 430, 768, 1024 and 1440 pixels.
- Desktop, tablet and mobile screenshots reviewed; face and hair clearly visible in both themes.
- Existing five project and six certification counts preserved; no browser page exceptions.

Local preview: http://127.0.0.1:3002. Source ZIP refreshed to include the real photograph and these changes. Earlier Phase 3 photo-missing statements describe the earlier snapshot and are superseded by this update.
