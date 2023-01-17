/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1135px',
    },

    extend: {
      colors: {
        'orange-base': '#E85638',
        'orange-hovered': '#EF320B',
        'base-gray': ' #444444',
        error: '#E03646',
        'car-bg': '#F2F2F2',
      },
      fontFamily: { sans: ['Montserrat', 'sans-serif'], serif: ['Montserrat', 'serif'] },
      boxShadow: {
        inputBase: '0px 0px 10px rgba(88, 36, 25, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
};
