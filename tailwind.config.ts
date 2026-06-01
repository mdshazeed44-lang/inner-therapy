import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Inner Theory palette (sampled exactly from the Figma file)
        ink: "#29242D",        // dark text on cream surfaces
        plum: "#39333E",       // deep base background (frame fill)
        noir: "#313131",       // card caption boxes / dark overlays
        cocoa: "#43392F",      // dark warm section background
        coffee: "#5A4E41",     // mid-dark warm / image fallback
        taupe: "#8A7E6E",      // mid warm neutral
        stone: "#B7AC9B",      // muted light
        cream: "#C3BAAD",      // accent text (eyebrows, stats)
        sand: "#E7E0D3",       // light surface / soft text
        olive: "#587D19",      // toggle accent
        gold: "#FFC51E",       // rating stars
      },
      fontFamily: {
        display: ["var(--font-aboreto)", "Georgia", "serif"],
        sans: ["var(--font-mulish)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // fluid scale mirroring the 1575px desktop frame
        "display-xl": ["clamp(2.75rem, 6vw, 4.25rem)", { lineHeight: "1.12", letterSpacing: "0.01em" }], // hero caps
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.15" }],   // section caps
        "display-md": ["clamp(1.75rem, 3vw, 2.625rem)", { lineHeight: "1.2" }],    // title-case headings
        "display-sm": ["clamp(1.25rem, 2vw, 1.625rem)", { lineHeight: "1.25" }],   // card titles
      },
      letterSpacing: { eyebrow: "0.22em", caps: "0.04em" },
      maxWidth: { content: "1320px" },
      borderRadius: { pill: "999px", card: "14px", soft: "22px" },
    },
  },
  plugins: [],
};
export default config;
