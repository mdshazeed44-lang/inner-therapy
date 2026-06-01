# Prompt for Claude Code — add the full animation / scroll layer

This Next.js project rebuilds https://clearpath-template.framer.website/ . Right now the
scroll animations and effects are NOT showing across the site. Fix and complete them so it
matches the original's motion feel. Read `ANIMATIONS.md`, `BUILD_SPEC.md`, and `CLAUDE.md` first.

Do this in order:

1. **Get it running.** Run `npm install` (must install framer-motion + lenis with no errors),
   then `npm run dev`. Open the browser console and fix any red errors. If a module is missing,
   run `npm install framer-motion lenis`. Confirm the Hero background scales on scroll and the
   Story images parallax — those are already wired as reference.

2. **Diagnose why "nothing animates"** if reveals still don't fire: check that every animated
   component starts with `"use client";`, that `prefers-reduced-motion` isn't on, and that
   `SmoothScroll` is mounted in `app/layout.tsx`. Report the root cause.

3. **Apply animations to every section** using the existing helpers in `components/ui/`
   (Reveal, Parallax, ScrollScale, WordReveal, Odometer, Marquee) and the variants in
   `lib/anim.ts` (EASE, fadeUp, stagger):
   - Wrap each section's text blocks in `<Reveal>` with sensible `dir` and `delay`.
   - Stagger every card grid (Services, Pricing, Journal, Stats) with `stagger` + `fadeUp`.
   - Add `Parallax` to all large images (stories, journal thumbs, center statement bg).
   - CenterStatement: animate the center dot (pulse) and fade the headline on scroll.
   - CounterCTA: add the rolling odometer strip above the heading.
   - Header: confirm transparent → solid on scroll works.

4. **Tune the signature scroll effects** to feel like Framer: soft EASE, ~0.6–0.8s durations,
   `viewport={{ once: true, margin: "-80px" }}`, Lenis inertia on. Don't over-animate — keep it calm.

5. **Verify:** scroll the whole page slowly. Every section should reveal, images should parallax,
   counters should roll, the pricing toggle and FAQ accordion should animate. Then `npm run build`
   must pass clean. Fix any hydration warnings.

Rules: keep design tokens exact (sage #7FA69B, ink #2E3231; Crimson Text display, Inter UI; pill
buttons 999px). Keep copy verbatim from `lib/content.ts`. Any file using hooks/motion needs "use client".
