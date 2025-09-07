/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
          '2rem': '2rem', // Defines a new size named '2rem'
        }
    },
  },
  plugins: [],
}