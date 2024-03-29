module.exports = {
  content: [
    "*.html",
    "./src/*.js",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#252525',
        secondary: '#414141',
        tertiary: '#525252',
        fourth: '#00FFAB',
        navbarColor: '#101010',
      }
    },
    container: {
      center: true,
      padding: '1rem',
    }
  },
  plugins: [],
}