/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#0f172a',
          primary: '#0284c7',
          accent: '#f97316',
          light: '#f0f9ff'
        }
      }
    }
  },
  plugins: []
};
