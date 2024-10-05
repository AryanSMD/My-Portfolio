module.exports = {
  content: [
    "*.html",
    "./src/*.js",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        text: 'var(--text)',
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}