/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      primary: '#2E9AFE',
      black: '#171717',
      gray: '#E9E9E9',
      white: '#FFFFFF',
      brightBlue: '#F7F8F9',
      blue: '#E3EFFA',
      blackBright: '#171717',
      borderColor: '#ECECEC'
    },
  },
  plugins: ['tailwindcss ,autoprefixer', require('@tailwindcss/line-clamp')],
};
