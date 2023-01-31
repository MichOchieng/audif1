/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'formulaRegular': ['Formula-Regular', 'sans-serif'],
        'formulaBold': ['Formula-Bold', 'sans-serif'],
        'formulaWide': ['Formula-Wide', 'sans-serif'],
      }
    },
  },
  plugins: [],
}