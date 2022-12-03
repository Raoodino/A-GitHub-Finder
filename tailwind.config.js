/** @type {import('tailwindcss').Config} */
module.exports = {
  //all contents contain daisyUI to be put here
  content: [
    "./src/App.js",
    "./src/components/layout/Navbar.jsx"
   
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui')],
}
