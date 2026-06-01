# Animations — why nothing moves, and how to get the full Framer feel

## STEP 1 — make sure it's actually running with deps installed
If literally nothing animates, 9 times out of 10 the packages aren't installed or the
dev server has an error.

```bash
npm install          # MUST finish without errors (installs framer-motion + lenis)
npm run dev          # open http://localhost:3000
```

Then in the browser press F12 → Console. If you see red errors like
"Cannot find module 'framer-motion'" or "'lenis'", the install didn't complete — run
`npm install framer-motion lenis` again.

Other quick checks:
- Make sure your OS "Reduce motion" setting is OFF (it disables smooth scroll on purpose).
- Every animated file must start with `"use client";` on line 1. If you edited any, confirm it.
- Hard refresh (Ctrl+Shift+R) to clear a stale build.

## STEP 2 — the animation toolkit now in the project
New reusable helpers in `components/ui/`:
- **Reveal** — scroll fade-in. Props: `dir` ("up"|"down"|"left"|"right"), `delay`.
- **Parallax** — element drifts as you scroll. Prop: `speed` (0.1–0.4; negative = opposite).
- **ScrollScale** — element scales while scrolling (used on the Hero background).
- **WordReveal** — words ramp from faint→ink (used in Philosophy).
- **Odometer** — rolling number counter (used in Stats).
- **Marquee** — infinite horizontal scroll strip.
- **SmoothScroll** — Lenis inertia, already mounted in `app/layout.tsx`, with a safe
  fallback so the site still works if Lenis isn't installed.

Shared easings/variants live in `lib/anim.ts` (`EASE`, `fadeUp`, `stagger`).

Working examples already wired:
- `Hero.tsx` → `ScrollScale` on the background.
- `Story.tsx` → two `Parallax` images moving at different speeds.
- `Philosophy.tsx` → `WordReveal`. `Stats.tsx` → `Odometer`.

## STEP 3 — apply these across every section
Wrap section content in `Reveal`, add `Parallax` to images, and use `stagger` for card grids.
Example for a card grid:

```tsx
<motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {items.map((it) => (
    <motion.div key={it.id} variants={fadeUp}>...</motion.div>
  ))}
</motion.div>
```

## STEP 4 — match the original's signature effects
- Hero: background scale + the H1 slightly parallaxing over the image.
- CenterStatement: pulsing center dot + the text fading in on scroll.
- Philosophy: the word-by-word reveal (already there) — tune the `offset` in WordReveal.
- CounterCTA + Stats: odometer counters firing when they enter view.
- Sticky header: transparent → solid (already in Header.tsx).
- Smooth inertia scrolling everywhere via Lenis.
