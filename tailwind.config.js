/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C69F50',
          lightGold: '#E3C068',
          dark: '#1A2332',
        }
      }
    },
  },
  plugins: [],
}