/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        forum: ['Forum', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "tan": "#B68D40",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "brown": "#9D938C",
        "home-bg": "#E2BCB7",
        "headphone-collection-bg" : "#e8b3ac",

      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}