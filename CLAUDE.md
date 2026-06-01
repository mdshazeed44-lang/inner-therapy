# CLAUDE.md — ClearPath rebuild

This project is a **pixel-perfect clone of https://clearpath-template.framer.website/**
(a Framer therapy/coaching template). Use this file + `BUILD_SPEC.md` as the source of truth.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis (smooth scroll).
Fonts via `next/font`: Crimson Text (serif display) + Inter (sans UI).

## Commands
```bash
npm install      # one time
npm run dev      # local dev at http://localhost:3000
npm run build    # production build (run before declaring done)
```

## Where things live
- `app/page.tsx` — composes all 16 home sections in order.
- `components/sections/*` — one file per section. Header, Hero, Services, Stats, Story,
  Pricing, FAQ, BookingForm, Footer are **fully built reference patterns**. The rest render
  with correct copy but carry `// TODO` notes for visual polish (real imagery, parallax).
- `components/ui/*` — reusable primitives: `Button` (999px pill + dot), `Reveal` (scroll
  fade-up), `WordReveal` (per-word opacity ramp for the philosophy line), `Odometer`
  (rolling number counter), `SmoothScroll` (Lenis).
- `lib/content.ts` — ALL copy/data (services, steps, plans, articles, stats, faqs, stories).
  Edit text here, not in components.
- `lib/fonts.ts`, `tailwind.config.ts`, `app/globals.css` — design tokens.
- `public/images/` — drop portraits here (see its README for required filenames).

## Design tokens (must match exactly)
- Accent sage `#7FA69B`; ink `#2E3231`; muted `#535956`; paper `#FAFAFA`; white base.
- Display type = Crimson Text 400; UI/body = Inter 400/500; eyebrows = Inter uppercase,
  letter-spacing 0.08em, sage.
- Pills: `rounded-pill` (999px) with a small dot on the right.

## Build order (recommended for Claude Code)
1. `npm install`, confirm `npm run dev` renders the home page.
2. Add real imagery to `public/images/` (hero, story portraits) — biggest visual lift.
3. Polish the TODO sections to match the reference screenshots:
   - Hero: layer the portrait + faint line streaks; keep H1 overlapping the image.
   - CenterStatement: full-bleed portrait bg + animated center dot + orbit lines.
   - CounterCTA: add the rolling odometer strip above the heading.
   - Story: fine-tune the two overlapping rounded images.
4. Verify animations: scroll reveals, WordReveal ramp, Odometer counts, Pricing toggle,
   FAQ accordion, sticky header transparent→solid.
5. Build the sub-pages the nav implies: `/about`, `/services`, `/stories` (+ `[slug]`),
   `/journal` (+ `[slug]`), `/book`, `/privacy`, `/terms`, and a `not-found.tsx` (404).
6. Responsive pass: mobile nav drawer in `Header`, stacked grids, fluid type already via clamp.
7. `npm run build` clean; run Lighthouse, fix any CLS from images (use next/image sizes).

## Conventions
- Any component using hooks / Framer Motion / browser APIs starts with `"use client"`.
- Keep copy verbatim from `BUILD_SPEC.md` for the visual clone; swap to real business
  content later by editing `lib/content.ts` only.
- Prefer `Reveal` for entrance animations so timing stays consistent across sections.
