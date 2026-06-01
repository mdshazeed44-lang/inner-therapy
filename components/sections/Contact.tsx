import Link from "next/link";
import { contact, site } from "@/lib/content";

export function Contact() {
  return (
    <section className="relative bg-plum">
      {/* Full-width map area */}
      <div className="relative h-[465px] md:h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contact.mapImage})` }}
          aria-hidden="true"
        />

        {/* Cream info card — overlaid on left, vertically centered */}
        <div className="container-x relative flex h-full items-center">
          <div className="w-full max-w-[464px] space-y-5 rounded-[20px] bg-cream p-8 text-ink shadow-2xl">
            {/* Logo line */}
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display tracking-caps text-ink text-2xl">
                  iNNER
                </span>
                <span className="font-light text-ink/60 text-2xl">theory</span>
              </div>
              <p className="text-ink/50 text-[9px] tracking-[0.25em] uppercase mt-1">
                {site.tagline}
              </p>
            </div>

            {/* Rating row */}
            <div className="flex items-center gap-3">
              <span className="h-7 w-7 rounded-full border border-ink/20 grid place-items-center text-sm font-semibold text-ink">
                G
              </span>
              <span className="font-semibold text-ink">{site.rating}</span>
              <span className="text-gold text-lg leading-none tracking-wide">
                ★★★★★
              </span>
            </div>

            {/* Address row */}
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 shrink-0 rounded-full border border-ink/20 grid place-items-center text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="text-ink text-[15px] font-medium">
                {site.address}
              </span>
            </div>

            {/* Phone row */}
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 shrink-0 rounded-full border border-ink/20 grid place-items-center text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <Link href={site.phoneHref} className="text-ink font-medium hover:opacity-70">
                {site.phone}
              </Link>
            </div>

            {/* Email row */}
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 shrink-0 rounded-full border border-ink/20 grid place-items-center text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                </svg>
              </span>
              <Link href={site.emailHref} className="text-ink font-medium hover:opacity-70">
                {site.email}
              </Link>
            </div>

            {/* Book Appointment pill */}
            <Link
              href={contact.cta.href}
              className="rounded-full bg-[#423d2f] text-sand px-6 py-3 inline-flex items-center gap-3 text-sm uppercase tracking-caps hover:opacity-90"
            >
              {contact.cta.label}
              <span className="h-6 w-6 rounded-full bg-white text-[#423d2f] grid place-items-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
