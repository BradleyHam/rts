/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as necessary for your project structure
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3C4142',
        'primary-light': '#464c4e',
        'primary-dark': '#3a3f40',
        'accent-primary': '#07A84E',
        'accent-secondary': '#F3F43A',
        'light': '#fff',
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'headings': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
