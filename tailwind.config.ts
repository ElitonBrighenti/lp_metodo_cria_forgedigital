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
        bg: {
          primary:   "#0a0a0a",
          secondary: "#111111",
        },
        accent: {
          DEFAULT: "#FF4B00",
          light:   "#FF8C00",
        },
        text: {
          primary:   "#FFFFFF",
          secondary: "#888888",
        },
        border: {
          DEFAULT: "#222222",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontWeight: {
        body:    "400",
        medium:  "500",
        heading: "800",
        black:   "900",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #FF4B00, #FF8C00)",
      },
      borderColor: {
        DEFAULT: "#222222",
      },
      animation: {
        "orange-glow": "orange-glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        "orange-glow": {
          "0%, 100%": { boxShadow: "0 0 18px 2px rgba(255,75,0,0.35)" },
          "50%":       { boxShadow: "0 0 32px 8px rgba(255,140,0,0.55)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
