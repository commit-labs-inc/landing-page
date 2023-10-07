/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          secondary_dark: '#31B09F',
          ternary_dark: '#FABC91',
          dark_blue: '#00316D',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

