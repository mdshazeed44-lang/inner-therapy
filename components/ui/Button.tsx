"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "@/lib/clsx";

type Variant = "solid" | "glass" | "outline" | "light" | "gradient";

const styles: Record<Variant, string> = {
  // dark espresso pill (primary)
  solid: "bg-ink text-sand hover:bg-ink/90",
  // translucent glassy pill used over imagery
  glass: "bg-white/10 text-sand backdrop-blur-md border border-white/15 hover:bg-white/15",
  // hairline outline
  outline: "bg-transparent text-sand border border-sand/30 hover:border-sand/60",
  // light/cream pill on dark
  light: "bg-sand text-ink hover:bg-sand/90",
  // Figma "Book Appointment" — cocoa→cream linear gradient, white text
  gradient:
    "bg-[linear-gradient(72deg,#423D2F_0%,#C3BAAD_100%)] text-white hover:brightness-110",
};

// trailing arrow-circle style per variant: gradient uses a filled white circle
// with a dark arrow (Figma), everything else uses a hairline outline circle.
const circleStyles: Partial<Record<Variant, string>> = {
  gradient: "bg-white text-ink border-0",
};

export function Button({
  children,
  href = "#",
  variant = "solid",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className="inline-block">
      <motion.span
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          "group inline-flex items-center gap-3 rounded-pill px-6 py-3 text-[12px] font-medium uppercase tracking-caps transition-colors",
          styles[variant],
          className
        )}
      >
        {children}
        <span
          className={clsx(
            "inline-flex h-6 w-6 items-center justify-center rounded-full opacity-90",
            circleStyles[variant] ?? "border border-current"
          )}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px">
            <path d="M2.5 9.5 9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </motion.span>
    </Link>
  );
}
