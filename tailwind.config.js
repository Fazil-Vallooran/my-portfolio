// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f', // dark blue background (dark)
        accent: '#00e6a8',  // brighter teal accent
        secondary: '#bfcbe6', // lighter blue/gray text for dark
        // Light theme colors
        'primary-light': '#f4f8fb', // very light blue background
        'secondary-light': '#1a202c', // dark gray text for light
        'accent-light': '#00796b', // deep teal accent for light
      },
    },
  },
  plugins: [],
}