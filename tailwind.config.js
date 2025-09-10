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
  plugins: [
      function({ addUtilities }) {
      addUtilities({
        '.after-overlay': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.1)',
          transition: 'background .5s',
          cursor: 'pointer',
        },
      }, ['after']) // Apply to :after pseudo-element
    }
  ],
}