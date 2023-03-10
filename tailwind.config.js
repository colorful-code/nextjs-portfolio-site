/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
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
        'oxfordBlue': '#011936',
        'strongPurple': '#7f00c1',
        'offWhite': '#fff9fe'
      },
      border: ['focus'],
    },
  },
  plugins: [],
})