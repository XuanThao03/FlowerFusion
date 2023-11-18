/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "granite-gra": "#676862",
        "dark-liver": "#4E4E4B",
        argent: "#BFBFBF",
        "cookies-and-cream": "#D9DCA7",
        "pine-tree": "#2c2c29",
        "silver-pink": "#BDAFA4",
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
    },
  },
  plugins: [],
};
