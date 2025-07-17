const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
    "./src/constants/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'animate-title',
    'animate-fade-left',
    'animate-fade-right',
    'animate-fade-in',
    'animate-glow',
  ],
  theme: {
    extend: {
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
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        calsans: ["Calsans", ...defaultTheme.fontFamily.sans],
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        glow: "glow 2s ease-in-out infinite", // <-- ADD THIS
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "75%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "30%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "30%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        title: {
          "0%": {
            "line-height": "0",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0",
            opacity: "0",
          },
          "80%": {
            opacity: "1",
          },
          "100%": {
            "line-height": "1.2",
            opacity: "1",
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
