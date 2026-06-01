import { Aboreto, Mulish } from "next/font/google";

// Display / feature headings (the flared inscriptional caps in the Figma file).
export const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aboreto",
  display: "swap",
});

// Body + UI. Avenir in the source file; Mulish is the closest free Google match.
export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mulish",
  display: "swap",
});
