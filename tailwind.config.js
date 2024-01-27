/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#164863",
        "primary-low": "#427D9D",
        "primary-light": "#9BBEC8",
        "bright-sun" : "#ffd43b",
        grey: "#F0F2F5",
      },
      fontFamily: {
        noto : ["Noto Sans Khmer", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },


    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}