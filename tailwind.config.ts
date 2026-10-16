import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#121110",
        "bg-1": "#181712",
        "bg-2": "#201f19",
        line: "#2c2a24",
        "line-strong": "#3b392f",
        ink: "#ece6d9",
        bone: "#f5f0e6",
        signal: "#ff5a17",
        "signal-deep": "#d8470d",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
