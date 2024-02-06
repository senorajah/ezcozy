/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./ezcozyPage/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        protest:'Protest Riot',
        dancing:'Dancing Script'
      },
      colors: {
        navyblue: '#045174',
        dessrtSun: '#D89C60',
        burntOrange: '#E87A00',
      }
    },
  },
  plugins: [

  ],
}

