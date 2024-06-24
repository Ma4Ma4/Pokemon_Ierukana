/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", , "./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pokedot': "url('../src/img/pokedot.webp')",
       })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

