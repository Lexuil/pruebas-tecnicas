/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(240px, 1fr))'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['forest']
  }
}
