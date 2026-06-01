"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/** Rolls each digit column from 0 up to the target value when scrolled into view. */
export function Odometer({ value, suffix = "+", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}
