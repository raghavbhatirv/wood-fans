/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'dark': '#282828',
        'dark-gray': '#C4C4C4',
        'light-gray': '#F8F8F8',
        'primary-yellow': '#D7B256',
      },
    },
  },
  plugins: [],
}
