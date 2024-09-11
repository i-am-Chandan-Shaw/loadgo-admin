/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-theme-color)"
      },
      fontFamily: {
        bold: "var(--fnt-family-bold)"
      },
      
    },
  },
  plugins: [],
}