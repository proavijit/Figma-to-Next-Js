/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#B83B5E',
      },
      fontFamily: {
        myFont: ['Muli', 'sans-serif'], // Set Muli font
      },
    },
  },
  plugins: [],
}
