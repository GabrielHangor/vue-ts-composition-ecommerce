/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1135px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        'orange-base': '#E85638',
        'orange-hovered': '#EF320B',
        error: '#E03646',
      },
      fontFamily: { sans: ['Montserrat', 'sans-serif'], serif: ['Montserrat', 'serif'] },
      boxShadow: {
        inputBase: '0px 0px 10px rgba(88, 36, 25, 0.1)',
      },
    },
  },
  plugins: [],
};
