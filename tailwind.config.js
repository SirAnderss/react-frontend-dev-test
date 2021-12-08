const { colors } = require('./src/theme/colors');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-purple': colors.themePurple,
        'custom-orange': colors.themeOrange,
        'custom-yellow': colors.themeYellow,
      },
      height: {
        'semi-full': '80%',
      },
      maxWidth: {
        xxs: '18rem',
      },
      zIndex: {
        '-1': '-1',
        1: '1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
