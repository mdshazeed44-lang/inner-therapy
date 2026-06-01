"use client";

import { useState } from "react";
import Link from "next/link";
import { footer, finalCta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
      </svg>
    ),
  },
  {
    label: "Tumblr",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M14.563 22.066h-2.94c-2.66 0-4.638-1.376-4.638-4.668V11.05H4.13V7.852c2.79-.74 3.954-3.148 4.088-5.18H11.21v4.7h3.66v3.678H11.21v5.652c0 1.55.78 2.082 2.026 2.082h1.327v3.282z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.08 2.45 7.59 5.96 9.13-.08-.78-.16-1.97.03-2.82.17-.74 1.1-4.7 1.1-4.7s-.28-.56-.28-1.39c0-1.3.76-2.27 1.7-2.27.8 0 1.19.6 1.19 1.32 0 .81-.51 2.01-.78 3.13-.22.94.47 1.7 1.4 1.7 1.68 0 2.97-1.77 2.97-4.33 0-2.26-1.63-3.85-3.96-3.85-2.7 0-4.28 2.02-4.28 4.11 0 .81.31 1.69.7 2.16.08.1.09.18.07.28-.08.31-.25 1-.28 1.14-.04.18-.15.22-.34.13-1.26-.59-2.05-2.43-2.05-3.91 0-3.18 2.31-6.1 6.66-6.1 3.5 0 6.22 2.49 6.22 5.82 0 3.47-2.19 6.27-5.23 6.27-1.02 0-1.98-.53-2.31-1.16l-.63 2.4c-.23.87-.84 1.97-1.26 2.63.95.29 1.95.45 3 .45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden bg-plum text-sand">
      {/* sculptural figure — anchored bottom-right, spans the entire footer block */}
      <img
        src={finalCta.image}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-full max-h-[1200px] w-auto -scale-x-100 select-none object-contain object-bottom opacity-95"
      />

      <div className="container-x relative z-10 pb-10 pt-24 md:pt-28">
        {/* ── TOP — Final CTA (left) ── */}
        <div className="max-w-[60%]">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2">
              {finalCta.eyebrow}
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="text-cream/80" aria-hidden>
                <path d="M2 9C5 3 8 1 14 5M14 5l-3-3M14 5l-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,3.6vw,2.875rem)] uppercase leading-[1.18] text-white">
              {finalCta.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8">
              <Button href={finalCta.cta.href} variant="light">
                {finalCta.cta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-stone">
              {finalCta.body}
            </p>
          </Reveal>
        </div>

        {/* ── BOTTOM — Newsletter + Nav + Follow + Copyright ── */}
        <div className="mt-20 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">
          {/* Newsletter */}
          <div className="max-w-[480px] md:col-span-2 lg:col-span-1">
            <h3 className="font-display text-[clamp(1.9rem,3vw,2.375rem)] uppercase leading-[1.1] text-white">
              {footer.newsletterTitle}
            </h3>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-stone">
              {footer.newsletterBody}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="mt-7 flex items-end gap-4 max-w-sm"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="flex-1 border-b border-white/30 bg-transparent pb-2 text-[14px] text-sand outline-none placeholder:text-stone/60 focus:border-cream"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-cream px-5 py-2 text-[11px] font-bold uppercase tracking-caps text-ink transition-opacity hover:opacity-90"
              >
                Book Now
              </button>
            </form>
          </div>

          {/* Nav col 1 */}
          <nav className="flex flex-col gap-3">
            {footer.columns[0].links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] text-sand transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Nav col 2 */}
          <nav className="flex flex-col gap-3">
            {footer.columns[1].links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] text-sand transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Follow Us */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand">
              Follow Us
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-cream/15 text-cream transition-colors hover:bg-cream hover:text-ink"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright — bottom right */}
        <div className="mt-14 max-w-[62%] text-[12px] leading-relaxed text-cream/55 md:text-right">
          {footer.copyright}
          <br />
          <span className="text-cream/45">Website Design by Gud Agency</span>
        </div>
      </div>
    </footer>
  );
}
