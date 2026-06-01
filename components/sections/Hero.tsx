"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero, problem, programs } from "@/lib/content";
import { Button } from "@/components/ui/Button";

// Figma background ellipse arcs (Ellipse 8718/8719/8720) — recreated from exact
// Figma geometry (rect-relative cx,cy,rx,ry in a 1440×900 viewBox).
const ARCS = [
  { cx: 1085, cy: 430, rx: 351, ry: 640 }, // big vertical ellipse, right side
  { cx: 205, cy: 770, rx: 300, ry: 300 },  // lower-left arc
  { cx: 1080, cy: 835, rx: 384, ry: 196 }, // lower-right arc
];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const fig = useRef<HTMLImageElement>(null);
  const rings = useRef<SVGSVGElement>(null);
  const heroLayer = useRef<HTMLDivElement>(null);
  const headline = useRef<HTMLDivElement>(null);
  const bodyEl = useRef<HTMLDivElement>(null);
  const line = useRef<SVGSVGElement>(null);
  const creamBg = useRef<HTMLDivElement>(null);
  const togglePill = useRef<HTMLSpanElement>(null);
  const toggleKnob = useRef<HTMLSpanElement>(null);
  const toggleLabel = useRef<HTMLSpanElement>(null);
  const toggleWrap = useRef<HTMLDivElement>(null);
  const offBlock = useRef<HTMLDivElement>(null);
  const onBlock = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(heroLayer.current, { autoAlpha: 0, duration: 1, ease: "power2.out" });

      // initial state — line invisible
      const paths = line.current?.querySelectorAll("path");
      paths?.forEach((path) => {
        const len = (path as SVGPathElement).getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      });
      // anchor scaling at the toggle endpoint so the line's tip stays put while it grows
      gsap.set(line.current, { transformOrigin: "54% 62%" });
      gsap.set(creamBg.current, { autoAlpha: 0 });
      // toggle + statement stay in their position — only opacity animates (no slide)
      gsap.set(toggleWrap.current, { autoAlpha: 0 });
      gsap.set(offBlock.current, { autoAlpha: 0 });
      gsap.set(onBlock.current, { autoAlpha: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      // ── Phase 1 (0–0.25): headline + body + figure ALL fade together (synced) ──
      tl
        .to(rings.current, { scale: 1.1 }, 0)
        .to(fig.current, { scale: 1.04 }, 0)
        // headline + body scroll UP and fade out
        .to(headline.current, { yPercent: -80, autoAlpha: 0, ease: "power1.in" }, 0)
        .to(bodyEl.current, { yPercent: -60, autoAlpha: 0, ease: "power1.in" }, 0)
        // figure + rings fade out IN SYNC with text (same start, same end)
        .to(fig.current, { autoAlpha: 0, ease: "power1.in" }, 0)
        .to(rings.current, { autoAlpha: 0, ease: "power1.in" }, 0);

      // ── line draws SLOWLY across the first ~60% of scroll (both strands together),
      //    leading the eye gently down toward the toggle ──
      if (paths && paths.length > 0) {
        tl.to(paths, { strokeDashoffset: 0, duration: 0.6, ease: "none" }, 0);
      }

      // ── Phase 2 (0.6–0.7): toggle + "The Problem No One Is Solving" gently reveal ──
      tl
        .to(toggleWrap.current, { autoAlpha: 1, ease: "power2.out" }, 0.6)
        .to(offBlock.current, { autoAlpha: 1, ease: "power2.out" }, 0.63);

      // ── Phase 3 (0.78–0.9): toggle flips ON, bg → cream, ON state reveals ──
      tl
        .to(creamBg.current, { autoAlpha: 1, ease: "power2.inOut" }, 0.78)
        .to(togglePill.current, { backgroundColor: "#587D19", ease: "none" }, 0.79)
        .to(toggleKnob.current, { x: 32, ease: "power2.inOut" }, 0.79)
        .to(toggleLabel.current, { color: "#29242D", ease: "none" }, 0.81)
        .to(offBlock.current, { autoAlpha: 0, ease: "power2.in" }, 0.78)
        .to(line.current, { autoAlpha: 0, ease: "power1.in" }, 0.78)
        .to(onBlock.current, { autoAlpha: 1, ease: "power2.out" }, 0.84);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[320vh] bg-plum">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* DARK background base — exact Figma linear gradient (cream → plum → ink, 136°) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(136deg,#c3baad_-41%,#39333e_84%,#29242d_100%)]" />
          {/* Figma background ellipse arcs (faint white outlines) */}
          <svg
            ref={rings}
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            aria-hidden="true"
          >
            {ARCS.map((a, i) => (
              <ellipse
                key={i}
                cx={a.cx}
                cy={a.cy}
                rx={a.rx}
                ry={a.ry}
                stroke="#ffffff"
                strokeOpacity="0.09"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        {/* CREAM overlay — fades in when toggle flips ON */}
        <div ref={creamBg} className="absolute inset-0 z-[5] bg-cream opacity-0" />

        {/* Hero content layer (figure + headline + body) */}
        <div ref={heroLayer} className="absolute inset-0 z-10">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
            <img
              ref={fig}
              src="/images/hero.png"
              alt=""
              aria-hidden="true"
              className="ml-[6%] h-[76vh] max-h-[800px] w-auto max-w-[48vw] origin-bottom select-none object-contain object-bottom"
            />
          </div>

          {/* Flowing decorative line */}
          <svg
            ref={line}
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 600 -50 C 940 170, 1040 470, 720 565 C 510 627, 388 505, 476 398 C 540 320, 680 348, 700 470"
              stroke="#ffffff"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 628 -50 C 968 178, 1068 478, 744 576 C 528 640, 404 512, 494 402 C 560 322, 704 352, 724 478"
              stroke="#ffffff"
              strokeOpacity="0.16"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          <div className="container-x relative h-full">
            <div ref={headline} className="absolute left-0 top-[24%] z-10 max-w-[88%] md:max-w-none">
              <h1 className="max-w-[460px] font-display text-[clamp(2rem,4.6vw,3rem)] leading-[1.16] text-white">
                {hero.title}
              </h1>
              <div className="mt-7">
                <Button href={hero.cta.href} variant="gradient">
                  {hero.cta.label}
                </Button>
              </div>
            </div>

            <div ref={bodyEl} className="absolute right-0 top-[54%] z-10 hidden md:block">
              <p className="max-w-[380px] text-right text-[15px] leading-relaxed text-sand/80">
                {hero.body}
              </p>
            </div>
          </div>
        </div>

        {/* Toggle + statements layer — Figma exact position (just below the figure) */}
        <div className="absolute inset-x-0 top-[62%] z-20 flex flex-col items-center px-6 text-center">
          {/* Toggle (revealed during Phase 2 along with statement) */}
          <div ref={toggleWrap} className="mb-6 inline-flex items-center justify-center gap-3">
            <span
              ref={toggleLabel}
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C3BAAD" }}
            >
              Core Programs
            </span>
            <span
              ref={togglePill}
              className="relative h-7 w-[64px] rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
            >
              <span
                ref={toggleKnob}
                className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow"
              />
            </span>
          </div>

          {/* OFF + ON statements share the SAME slot so they crossfade cleanly in place */}
          <div className="relative w-full min-h-[210px]">
            {/* OFF — "The Problem No One Is Solving" */}
            <div ref={offBlock} className="absolute inset-x-0 top-0 px-6">
              <h2 className="mx-auto max-w-3xl font-sans text-display-md font-light text-white">
                {problem.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-stone">
                {problem.body}
              </p>
            </div>

            {/* ON — "Structured Protocols, Not Service Menus" */}
            <div ref={onBlock} className="absolute inset-x-0 top-0 px-6">
              <h2 className="mx-auto max-w-3xl font-sans text-display-md font-light text-ink">
                Structured Protocols, <span className="text-olive">Not Service Menus.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/70">
                {programs.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
