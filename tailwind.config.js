module.exports = {
  content: [
    "*.html",
    "./src/*.js",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary)',
        text: 'var(--text)',
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}