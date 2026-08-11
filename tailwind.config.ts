import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        "paper-3": "var(--paper-3)",
        ink: "var(--ink)",
        jade: "var(--jade)",
        "jade-deep": "var(--jade-deep)",
        stamp: "var(--stamp)",
        brass: "var(--brass)",
        line: "var(--line)",
      },
      fontFamily: {
        // These match globals.css's .font-display/.font-body/.font-mono
        // classes, which already set these vars directly. Kept in sync
        // here too so the Tailwind utilities (font-display etc.) agree
        // with the plain CSS classes instead of silently losing the
        // cascade to whichever rule happens to load last.
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
