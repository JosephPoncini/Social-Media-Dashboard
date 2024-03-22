/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //Primary 
        LimeGreen: '#1db489',
        BrightRed: '#dc414c',
        Facebook: '#198ff5',
        Twitter: '#1ca0f2',
        YouTube: '#c4032a',

        //Dark Theme
        VeryDarkBlueBG: '#1e202a',
        VeryDarkBlueTopBGPattern: '#1f212e',
        DarkDesaturatedBlueCardBG: '#252a41',
        DesaturatedBlueText: '#8b97c6',
        WhiteText: '#ffffff',

        DarkCardHover: '#333A56',

        //Light Theme
        Toggle: '#aeb3cb',
        WhiteBG: '#ffffff',
        VeryPaleBlueTopBGPattern: '#f5f7ff',
        LightGrayishBlueCardBG: '#f0f2fa',
        DarkGrayishBlueText: '#63687e',
        VeryDarkBlueText: '#1e202a',

        CardHover: '#E1E3F0',
      },
      fontSize: {
        normal:'14px',
      },
      fontFamily: {
        InterRegular: 'InterRegular',
        InterBold: 'InterBold',
      }
    },
    backgroundImage: {
      Instagram: 'lineargradient(to right, #fdc468, #df4996)',
      Toggle: 'lineargradient(to right, #378fe6, #3eda82)'
    }
  },
  plugins: [],
}

