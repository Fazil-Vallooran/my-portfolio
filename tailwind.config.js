// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#2bb3a6",
        dark: "#18181b",
        light: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
