import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2000px",
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-geist-sans)"],
        inter: ["var(--font-geist-sans)"],
      },
      backgroundImage: {
        gradientBlue: "linear-gradient(to bottom, #000510 40%, #031438)",
      },
      colors: {
        background: "#fff",
        foreground: "#19171c",
        textlight:'#6e6e73;',
        primary:"#03BDFF",
        secondary:"#011A56",
        accentBg:'#f2f1f3'
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
