# AGENTS.md

## What this is
Single-page Web3/blockchain developer portfolio for Arpan Barik. Astro + Tailwind, static output, zero-JS-by-default.

## Hard constraints
- No UI component libraries (no shadcn, no MUI, no Chakra).
- No animation libraries (no Framer Motion, GSAP, AOS). CSS transitions + one small
  IntersectionObserver script only.
- No stock photography, no 3D illustrations, no gradient blobs, no glassmorphism.
- Total JS payload must stay under ~30KB gzipped. Check after every change.
- Never invent, embellish, or paraphrase content. All copy comes verbatim from
  src/content/profile.ts. If a section needs new copy, ask — don't generate filler.
- One accent color only. Defined once in global.css as a CSS variable, referenced
  everywhere else — never a second hardcoded color.

## Editing content
Edit src/content/profile.ts only. Never hardcode resume facts inside .astro components.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

## Definition of done for any change
- Lighthouse mobile score stays ≥95 (Performance, Accessibility, Best Practices, SEO)
- Works at 360px through 2560px viewport width without horizontal scroll or overlap
- No new dependency added without being named explicitly in the request