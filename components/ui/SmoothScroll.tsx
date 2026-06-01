"use client";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let mounted = true;
    let cleanup = () => {};

    (async () => {
      try {
        const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (!mounted) return;
        const gsap = gsapMod.default;
        const { ScrollTrigger } = stMod;
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({ duration: 1.1, smoothWheel: true });

        // Drive Lenis from GSAP's ticker and keep ScrollTrigger in sync
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        // Re-measure once Lenis is controlling the scroll
        ScrollTrigger.refresh();

        cleanup = () => {
          gsap.ticker.remove(tick);
          lenis.off("scroll", ScrollTrigger.update);
          lenis.destroy();
        };
      } catch (e) {
        console.warn("SmoothScroll/GSAP not loaded:", e);
      }
    })();

    return () => {
      mounted = false;
      cleanup();
    };
  }, []);
  return null;
}
