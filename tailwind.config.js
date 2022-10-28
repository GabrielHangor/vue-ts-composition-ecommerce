/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './views/**/*.{js,ts,jsx,tsx,vue}', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    fontFamily: { sans: ['Montserrat', 'sans-serif'], serif: ['Montserrat', 'serif'] },
    extend: {
      colors: {
        'orange-base': '#E85638',
        'orange-hovered': '#EF320B',
      },
    },
  },
  plugins: [],
};
