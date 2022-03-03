const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    typography: (theme) => ({
      dark: {
        css: {
          color: 'white',
        },
      },
    }),
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
