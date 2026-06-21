import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["var(--font-space)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        skin: {
          bg: "var(--bg)",
          bg2: "var(--bg2)",
          bg3: "var(--bg3)",
          text: "var(--text)",
          text2: "var(--text2)",
        },
      },
    },
  },
  plugins: [],
};

export default config;