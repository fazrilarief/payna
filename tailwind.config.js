/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['poppins']
      },
      colors: {
        'gray': '#F5F6FB',
        'fontGray': '#575455',
        'primary' : '#1F7CFF',
      }
    },
  },
  plugins: [],
}

