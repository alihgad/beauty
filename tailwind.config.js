/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        holiday: ['Holiday', 'serif'],
      },
    },
  },
  plugins: [],
}

