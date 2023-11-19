/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "granite-gra": "#676862",
        "dark-liver": "#505050",
        argent: "#BFBFBF",
        "cookies-and-cream": "#D9DCA7",
        "pine-tree": "#2c2c29",
        "silver-pink": "#BDAFA4",
        gainsboro: "#DBDBDB",
        "white-coffee": "#E7E1D7",
      },
      fontFamily: {
        Ephesis: ["Ephesis"],
        Montserrat: ["Montserrat"],
        Lexend: ["Lexend"],
      },
      spacing: {
        267: "267px",
        368: "368px",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
    },
  },
  plugins: [],
};
