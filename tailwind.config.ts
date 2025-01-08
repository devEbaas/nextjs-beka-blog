import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#282C33",
        foreground: "var(--foreground)",
        brand: "#C778DD",
        secondary: "#ABB2BF",
      },
    },
  },
  plugins: [],
} satisfies Config;
