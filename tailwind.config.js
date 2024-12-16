/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes:{
        carrusel: {
          "0%": { transform:"translateX(100%);"},
          "100%": { transform:"translateX(-100%);"}
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

