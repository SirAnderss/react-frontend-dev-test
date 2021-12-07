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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
