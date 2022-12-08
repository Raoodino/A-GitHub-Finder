/** @type {import('tailwindcss').Config} */
module.exports = {
  //all contents contain daisyUI to be put here
  content: [
    "./src/App.js",
    "./src/components/layout/Navbar.jsx",
    "./src/components/layout/Footer.jsx",
    "./src/pages/About.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/NotFound.jsx",
    "./src/components/users/UserItem.jsx",
    "./src/components/users/UserResults.jsx",
    "./src/components/users/UserSearch.jsx",
   
   
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui')],
}
