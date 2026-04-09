import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-dark": "#1a3a1f",
        "green-mid": "#2d5a35",
        "green-light": "#4a8c55",
        gold: "#c9a84c",
        "gold-light": "#e2c47a",
        cream: "#faf7f0",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;