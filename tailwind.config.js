/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        'serif':['Work Sans','sans-serif'],
        'Cascadia': 'CascadiaCode'
      }, 
      colors:{
        'do-blue-dark':'#080c2c',
        'do-blue-mediumdark':'#1d274c',
        'do-blue-medium':'rgb(20,51,214)',
        'do-blue-ligth':'rgb(0,105,255)'
      }
    },
  },
  plugins: [],
}

