/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavaOrange': '#FA7268',
        'wineRed': '#871400',
        'brightMustard': '#f5730a',
      }
    },
  },
  plugins: [],
}