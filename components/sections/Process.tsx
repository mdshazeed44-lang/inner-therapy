"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  const root = useRef<HTMLElement>(null);
  const pinSection = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // initial: first step + first number visible, others hidden
      stepRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { autoAlpha: i === 0 ? 1 : 0, y: 0 });
      });
      numRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { autoAlpha: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.92 });
      });

      let current = 0;
      const setActive = (idx: number) => {
        if (idx === current) return;
        const dir = idx > current ? 1 : -1;
        stepRefs.current.forEach((el, i) => {
          if (!el) return;
          if (i === idx) {
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 30 * dir },
              { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }
            );
          } else if (i === current) {
            gsap.to(el, { autoAlpha: 0, y: -30 * dir, duration: 0.45, ease: "power2.in" });
          } else {
            gsap.set(el, { autoAlpha: 0 });
          }
        });
        numRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.to(el, {
            autoAlpha: i === idx ? 1 : 0,
            scale: i === idx ? 1 : 0.92,
            duration: 0.5,
            ease: "power2.out",
          });
        });
        current = idx;
      };

      // pin the inner sticky for 3× viewport, mapping scroll → step index
      ScrollTrigger.create({
        trigger: pinSection.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const total = process.steps.length;
          // give a small buffer so each step occupies ~equal scroll range
          const raw = self.progress * total;
          const idx = Math.min(total - 1, Math.floor(raw));
          setActive(idx);
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-cocoa text-sand">
      {/* faint flowing line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="h-full w-full opacity-[0.09]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 1600"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M -50 320 C 520 200, 360 640, 780 620 C 1200 600, 1000 1060, 1500 1000 M 120 920 C 540 880, 500 1320, 1000 1260"
            stroke="#ffffff"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* header */}
      <div className="container-x relative pt-24 text-center md:pt-28">
        <p className="eyebrow">{process.eyebrow}</p>
        <Reveal>
          <h2 className="mt-3 font-sans text-display-md font-light text-white">
            {process.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-4xl leading-relaxed text-stone">
            {process.body}
          </p>
        </Reveal>
      </div>

      {/* pinned slideshow: 1 viewport per step */}
      <div
        ref={pinSection}
        className="relative"
        style={{ height: `${process.steps.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="container-x grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* LEFT — only one step visible at a time */}
            <div className="relative min-h-[260px]">
              {process.steps.map((step, i) => (
                <div
                  key={step.no}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <h3 className="font-display text-3xl uppercase leading-tight text-cream md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-md text-[16px] leading-relaxed text-sand/90">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT — only one number visible at a time, right-bottom */}
            <div className="relative hidden h-[260px] lg:block">
              {process.steps.map((step, i) => (
                <span
                  key={step.no}
                  ref={(el) => {
                    numRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex items-end justify-end font-display text-[clamp(9rem,17vw,16rem)] leading-none text-cream"
                >
                  {step.no}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
