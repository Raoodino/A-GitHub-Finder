/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/layout/Navbar.jsx"
   
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui')],
}
