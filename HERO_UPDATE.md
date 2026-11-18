# Frameless homepage hero

The homepage now places the portrait directly against the emerald page background, with a defined emerald circular backdrop, thin concentric ring and soft radial glow matching the supplied reference. The photo card, border, rounded photo panel, caption and outer hero card treatment are removed. The transparent portrait uses Next.js Image with object-fit: contain, no filters, and a subtle bottom fade. Mobile stacks the existing hero content above the portrait. About retains the original photograph; project cards, seven certificates and CV links are preserved.

## Image asset
- Saved project asset: `C:\Users\Sylvie\Projects\sylvie-portfolio\public\images\sylvie-portrait-cutout.png`.
- Input: `public/images/sylvie-profile.png`, retained unchanged.
- Mode: built-in image_gen tool, background-extraction edit, transparent_background=true.
- Output: 1024 x 1536 PNG with alpha. Transparency was verified (alpha minimum 0).

## Final image prompt
Use case: background-extraction. Edit target: the supplied portrait of Umutoniwase Sylvie. Asset: transparent PNG cutout for a developer portfolio hero. Remove ONLY the office background, plants, furniture and lighting behind the person and replace those background pixels with true transparent alpha. Preserve the person exactly as supplied: same face, facial structure, expression, eyes, teeth, skin tone, braided hair and fine hair edges, black blazer, white top, crossed arms, watch, hands, body proportions, original pose and lighting. Do not redraw, beautify, retouch, stylize, recolor or change the person. Keep the original portrait composition with entire hair/head and crossed arms visible. No border, frame, card, shadow, glow, text or other additions; the website supplies those. Output just the isolated original person on a genuinely transparent background.

## Files changed
- `src/components/hero.tsx`
- `src/data/portfolio.ts`
- `src/app/globals.css`
- `scripts/emerald-browser-qa.mjs`
- `public/images/README.md`
- New transparent portrait PNG and this report.

## Validation
Passed: ESLint, TypeScript, production build, HTTP smoke tests, and Edge/Playwright browser regression checks. Verified that the photo frame and caption are absent, the hero border is zero, the photo container background is transparent, and the image uses object-fit: contain with no filters. All images load; both themes passed at 320, 375, 390, 430, 768, 1024 and 1440px without horizontal overflow. Desktop dark/light and mobile screenshots were reviewed. All five projects, seven certificates, CV downloads, filters, mobile navigation, focus states, reduced motion and contact validation passed. No push or deployment.

## Run locally in CMD
```cmd
cd /d "C:\Users\Sylvie\Projects\sylvie-portfolio"
npm run dev
```
Open the Local URL printed by Next.js, normally http://localhost:3000.
