/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        lightTheme:"#6C63FF",
        darkTheme:"#252525",
        hover:"#5850DD"
      },
      fontFamily:{
        kanit:['kanit','sans-serif']
      }
    },
  },
  plugins: [],
}

