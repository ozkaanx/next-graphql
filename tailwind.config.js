/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerImage': 'url(https://rick-and-morty-chars.netlify.app/static/media/cover.18f506d0.webp)'
      }
    },
    minHeight : {
      'headerHeigth' : '360px'
    },
    width : {
      'searchInputWidth' : '740px',
      'widthFull' : '100%'
    },
    fontSize : {
      'headerText' : '40px',
      'searchInputText' : '14px'
    },
    fontFamily: {
      'headerFont' : ["Popins", "sans-serif"]
    }
  },
  plugins: [],
}