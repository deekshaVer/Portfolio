import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        accent: "#0EA5A4",
        bg: "#F8FAFC",
        textMain: "#0F172A",
        textSub: "#64748B",
      },
    },
  },
  plugins: [],
};

export default config;