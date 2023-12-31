/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'granite-gra': '#676862',
        'dark-liver': '#505050',
        argent: '#BFBFBF',
        'cookies-and-cream': '#D9DCA7',
        'pine-tree': '#2c2c29',
        'silver-pink': '#BDAFA4',
        gainsboro: '#DBDBDB',
        'white-coffee': '#E7E1D7',
        bone: '#DAD3C7',
        'spanish-gray': '#999A95',
        'red-price': '#8E0D0D',
        'main-color': '#4C4A4A',
        'grey-main': '#BFBFBF',
        quartz: '#4c4c4a',
        'button-black': '#1D1D1C',
        'total-price': '#4E4E4B',
        'detail-border': '#D7CDC5',
        'detail-text': '#B4B4A4',
        black: '#1D1D1C',
        'green-default': '#EBFAED',
        'green-text': '#0CE622',
        'dark-charcoal': '#323232',
        'bg-shipping': '#FEF7E6',
        'txt-shipping': '#FFC226',
        'bg-cancle': '#FDE2E2',
        'txt-cancle': '#EC2828',
        'bg-process': '#E1EAFC',
        'txt-process': '#2847EC',
      },
      fontFamily: {
        Ephesis: ['Ephesis'],
        Montserrat: ['Montserrat'],
        Lexend: ['Lexend'],
      },
      spacing: {
        267: '267px',
        368: '368px',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      screens: {
        laptop14inches: '1200px',
        //laptop15inches: "1083px",
      },
    },
  },
  
  plugins: [require("daisyui")],
};
