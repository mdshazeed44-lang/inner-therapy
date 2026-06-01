import type { Metadata } from "next";
import { aboreto, mulish } from "@/lib/fonts";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inner Theory — Your Biology Is Not a Mystery. It Is a System.",
  description:
    "Inner Theory is a diagnostics-first, protocol-driven health optimization center in Santa Monica. Comprehensive biomarker testing, physician-designed protocols, measurable results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${aboreto.variable} ${mulish.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
