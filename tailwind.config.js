/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // fontFamily: {
    //   'lexend': ['"Lexend"', 'sans-serif;']
    // }
    extend: {
      colors: {
        green: '#328c73',
        blue: '#264653',
        orange: '#f9994e',
        white: '#fbfbfb',
        black: '#181818'
      }, 
        fontFamily: {
        'lexend': ['"Lexend"', 'sans-serif;']
        }
    },
  },
  plugins: [],
}

