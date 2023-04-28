/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ['./dist/*.html',"./src/**/*.html", "./src/**/*.js"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryBlue: '#38BDF8',
        brightRed: 'hsl(12, 88%, 59%)',
      }
    },
  },
  plugins: [],
}

