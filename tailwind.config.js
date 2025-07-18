const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
    "./src/constants/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        accent: "#00e6a8",
        secondary: "#bfcbe6",
        "primary-light": "#f4f8fb",
        "secondary-light": "#1a202c",
        "accent-light": "#00796b",
      },
      spacing: {
        100: "25rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        glow: "glow 2s ease-in-out infinite",
        "fade-glow": "fade-glow 3s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "75%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "fade-left": {
          "0%": { transform: "translateX(100%)", opacity: "0%" },
          "30%": { transform: "translateX(0%)", opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        "fade-right": {
          "0%": { transform: "translateX(-100%)", opacity: "0%" },
          "30%": { transform: "translateX(0%)", opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        title: {
          "0%": { "line-height": "0%", "letter-spacing": "0.25em", opacity: "0" },
          "25%": { "line-height": "0%", opacity: "0%" },
          "80%": { opacity: "100%" },
          "100%": { "line-height": "100%", opacity: "100%" },
        },
        "fade-glow": {
          "0%": { transform: "translateX(100%)", opacity: "0", "text-shadow": "0 0 5px #00e6a8" },
          "30%": { transform: "translateX(0)", opacity: "1", "text-shadow": "0 0 15px #00e6a8" },
          "100%": { opacity: "0.9", "text-shadow": "0 0 10px #00e6a8" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
  ],
};
