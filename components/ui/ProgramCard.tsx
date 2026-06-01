"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Item = { title: string; body: string; image: string; href: string };

// per-card scroll-parallax amount (creates the dynamic staggered look)
const SPEED = [10, -16, 6, -20];

export function ProgramCard({ item, index }: { item: Item; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const s = SPEED[index % SPEED.length];
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { yPercent: -s },
        {
          yPercent: s,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current?.closest("section"),
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [index]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <Link
      ref={ref}
      href={item.href}
      onMouseMove={onMove}
      className="group relative z-0 block w-full hover:z-10"
    >
      {/* the card box grows from its centre on hover (no layout reflow) */}
      <div className="relative h-[300px] origin-center overflow-hidden rounded-[20px] bg-coffee shadow-md transition-all duration-500 ease-out group-hover:h-[400px] group-hover:shadow-[0_34px_70px_-22px_rgba(0,0,0,0.6)] sm:h-[340px] md:h-[380px] md:group-hover:h-[470px]">
        {/* Photo — zooms on hover (slight over-fill removes edge artifacts) */}
        <div
          className="absolute -inset-px bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12]"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        {/* legibility gradient — dark at top + bottom, clear in the middle so the photo shows */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/0 to-ink/95" />
        {/* cursor-following glare */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(160px_160px_at_var(--mx,50%)_var(--my,0%),rgba(255,255,255,0.18),transparent_70%)]" />

        {/* Title */}
        <h3 className="absolute left-5 right-5 top-5 font-display text-[20px] leading-tight text-white drop-shadow">
          {item.title}
        </h3>

        {/* Short description + READ MORE (bottom; expands on hover) */}
        <div className="absolute inset-x-5 bottom-5">
          <p className="text-[12.5px] leading-relaxed text-white/85 line-clamp-2 transition-all duration-500 group-hover:line-clamp-4">
            {item.body}
          </p>
          <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.18em] text-white">
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-cream transition-all duration-300 group-hover:w-3" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 ease-out group-hover:max-w-[140px] group-hover:opacity-100">
              Read More
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="-translate-x-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
