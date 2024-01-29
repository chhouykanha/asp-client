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
        "primary-dark": "#9530B9",
        secondary: "#FFFFFF",
        third: "#FF8181",
        fourth: "#4CCE70",
        btcha: "#FAFAFA", // body text color hover and active
        btc: "#303030", // body text color
        ltc: "#909090", // label text color
        phc: "#BDBDBD", // placeholder color
        dsc: "#888888", // disabled color
        default: "#f0f0f0", // default background color
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