/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js",],
  theme: {
    extend: {
      screens :{
        'media321': '321px',
        'media450': '450px',
        'media582':'582px',
       'media830': '830px',
       'media1025':'1025px',
      'media1200': '1200px',
      },
    },
  },
  plugins: [],
}

