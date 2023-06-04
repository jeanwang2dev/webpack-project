/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ['./dist/*.html',"./src/**/*.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: '375px',
      md: '1440px',
    },
    extend: {
      colors: {
        primaryBlue: '#38BDF8',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'bvpro': ['Be Vietnam Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}

