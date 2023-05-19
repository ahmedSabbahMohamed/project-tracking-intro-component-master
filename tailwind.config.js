/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        Red: "hsl(0, 100%, 68%)",
        vdblue: "hsl(230, 29%, 20%)",
        dgblue: "hsl(230, 11%, 40%)",
        gblue: "hsl(231, 7%, 65%)",
        lgblue: "hsl(207, 33%, 95%)",
      },
      fontSize: {
        root: "18px",
      },
      fontFamily: {
        family: 'Barlow Condensed',
      }
    },
  },
  plugins: [],
}

