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
        tertiary: 'var(--tertiary)',
        fourth: 'var(--fourth)',
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