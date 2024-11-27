/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'backgroundPattern' : "url('/image/bg-pattern.svg')"
      },
      colors:{
      'paleBlue' : 'hsl(230, 100%, 99%)',
      'strongCyan': 'hsl(174, 86%, 45%)',
      'softCyan' : 'hsl(174, 77%, 80%)',
      'white' : 'rgb(255,255,255)',
      'desaturatedBlue':'hsl(227, 35%, 25%)'
      },
    },
  },
  plugins: [],
}