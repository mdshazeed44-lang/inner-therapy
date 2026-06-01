"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Item = { no: string; title: string; body: string; image: string; href: string };

// gentle scroll parallax (each card drifts at its own pace)
const SPEED = [8, -10, 6, -12];

export function TherapyCard({ item, index }: { item: Item; index: number }) {
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

  return (
    <Link
      ref={ref}
      href={item.href}
      className="group block w-full"
    >
      <div className="relative h-[420px] overflow-hidden rounded-[20px] bg-coffee shadow-md transition-all duration-400 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_44px_-22px_rgba(0,0,0,0.55)] md:h-[440px]">
        {/* photo — gentle zoom on hover (slight over-fill removes edge artifacts) */}
        <div
          className="absolute -inset-px bg-cover bg-center transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        {/* subtle bottom legibility gradient */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/55 to-transparent" />

        {/* clean caption — title top, learn more + no. bottom */}
        <div className="absolute inset-x-5 bottom-5 text-white">
          <h3 className="font-display text-[17px] uppercase leading-snug tracking-caps">
            {item.title}
          </h3>
          <p className="mt-2.5 max-w-[90%] text-[12.5px] leading-relaxed text-white/80">
            {item.body}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-light uppercase tracking-[0.22em] text-white/90">
              <span className="h-[5px] w-[5px] rounded-full bg-cream transition-all duration-300 group-hover:w-3" />
              Learn More
            </span>
            <span className="font-display text-xs text-cream/70">{item.no}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
