/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `assets/**/*.{vue,js}`
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      },
      colors: {
        primary: '#37456c',
        'primary-blue': '#1055ea',
        'primary-white': '#dadde7'
      }
    }
  },
  plugins: []
}
