module.exports = {
  content: ["./ezcozyPage/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        protest: 'Protest Riot',
        dancing: 'Dancing Script'
      },
      colors: {
        navyblue: '#045174',
        dessrtsun: '#D89C60',
        burntOrange: '#E87A00',
      },
      backgroundImage: theme => ({
        'bg1': "url('C:/Users/rajah/Downloads/schoolFiles/ezcozy/pic/bg.jpg')",
         'card': "url(C:/Users/rajah/Downloads/schoolFiles/ezcozy/pic/cardbg.jpg)",
      })
    },
  },
  plugins: [],
}
