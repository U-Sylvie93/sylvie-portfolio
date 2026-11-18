# Portfolio imagery update

The selected portrait is copied unchanged from `C:\Users\Sylvie\Downloads\picture.png` to `public/images/sylvie-profile.png`. Hero and About use the shared profile image through Next.js Image, with a responsive cover crop and no filters. The previous JPG is retained as an unused source asset.

The five existing projects now have original SVG illustrations under `public/images/projects/`. These are labeled "Project illustration" in the cards and have descriptive alt text. They are not presented as screenshots. No project, technology, live demo, credential or contribution was invented. All five projects, the Team Project disclosure, seven certificates, CV downloads and both themes are preserved.

Changed implementation files: `src/data/portfolio.ts`, `src/components/profile-photo.tsx`, `src/components/projects.tsx`, `src/app/globals.css`, and `scripts/emerald-browser-qa.mjs`. New assets: the portrait PNG and five SVG covers. Asset notes are in `public/images/projects/README.md`.

Validation passed: ESLint, TypeScript, production build, Edge/Playwright browser regression checks and HTTP smoke tests. The selected portrait loads in Hero and About, all five cover images decode successfully, and the placeholder is absent. Both themes were checked at 320, 375, 390, 430, 768, 1024 and 1440px without horizontal scrolling. All five projects, seven certificates, project filters, CV downloads, keyboard focus, mobile navigation, reduced motion and contact validation passed. Desktop and mobile screenshots were reviewed in preview/. Portrait source/copy SHA-256 checksums match. No remaining issues found for this update.

Local preview from CMD:

```cmd
cd /d "C:\Users\Sylvie\Projects\sylvie-portfolio"
npm run dev
```

Open the Local URL shown by Next.js, normally http://localhost:3000. No push or deployment is included.

