/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'heading_font': ['Racing Sans One', 'cursive'],
        'body1_font': ['Oxanium', 'cursive'],
        'body2_font': ['Biryani', 'sans-serif']
      },
      boxShadow: {
        '3xl': "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }
    },
  },
  plugins: [],
}