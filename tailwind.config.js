/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*/*.{html,js}",
    "./*/*/*.{html, js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'archivo': ['Archivo Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

