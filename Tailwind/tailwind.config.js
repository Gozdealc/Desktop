/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {

    container: {
      center: true,

    },
    extend: {
      colors: {
        "miuul-red": "red",
        "miuul-blue": "blue",
      },

      fontFamily: {
      miuul: ['Madimi One', 'sans-serif'],
      open: ['open sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

