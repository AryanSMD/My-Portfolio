module.exports = {
  content: [
    "*.html",
    "*./src/*.js",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0E1118',
        secondary: '#253F6F',
        tertiary: '#7F9FDA',
        fourth: 'red',
        textColor: '#151515',
      }
    },
    container: {
      center: true,
      padding: '1rem',
    }
  },
  plugins: [],
}