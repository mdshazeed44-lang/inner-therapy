"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/lib/content";

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1460px] px-4 pt-5">
        <div
          className={`relative flex items-center justify-between h-[68px] px-7 rounded-full border border-white/15 backdrop-blur-md transition-colors duration-300 ${
            scrolled ? "bg-plum/85" : "bg-white/10"
          }`}
        >
          {/* LEFT — logo */}
          <Link href="/" className="flex flex-col leading-none" aria-label={site.name}>
            <span className="leading-none">
              <span className="font-display tracking-caps text-sand text-xl">iNNER</span>
              <span className="font-sans font-light text-sand/70 text-xl"> theory</span>
            </span>
            <span className="mt-1 text-[8px] tracking-[0.25em] text-cream/70 uppercase">
              {site.tagline}
            </span>
          </Link>

          {/* CENTER — nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-[14px] font-medium text-sand/85 hover:text-cream transition-colors"
              >
                {item.label}
                {item.dropdown ? <span className="ml-1 text-[10px]">▾</span> : null}
              </Link>
            ))}
          </nav>

          {/* RIGHT — search + book now */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="hidden lg:grid h-9 w-9 rounded-full border border-white/20 place-items-center text-sand/85 hover:text-cream transition-colors"
            >
              <SearchIcon />
            </button>

            <Link
              href="/book"
              className="hidden lg:flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 pl-5 pr-1.5 py-1.5 text-sand text-[14px] transition-colors"
            >
              Book Now
              <span className="h-8 w-8 rounded-full bg-white text-plum grid place-items-center">
                <ArrowUpRight />
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-9 w-9 rounded-full border border-white/20 place-items-center text-sand"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* MOBILE drawer */}
          {open && (
            <div className="lg:hidden absolute top-full mt-2 inset-x-4 rounded-soft bg-plum/95 backdrop-blur border border-white/10 p-6 flex flex-col gap-4">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-[15px] font-medium text-sand/85 hover:text-cream transition-colors"
                >
                  {item.label}
                  {item.dropdown ? <span className="ml-1 text-[10px]">▾</span> : null}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-between gap-2 rounded-full bg-white/15 hover:bg-white/25 pl-5 pr-1.5 py-1.5 text-sand text-[14px] transition-colors"
              >
                Book Now
                <span className="h-8 w-8 rounded-full bg-white text-plum grid place-items-center">
                  <ArrowUpRight />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
