/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        nav : "#020615",
        button : "#ff8a00",
        footer : "#020614",
      },
      colors:{
        font: "#020615",
        hover: "#ff8a00",
      },
      fontFamily:{
        Playfair : "'Playfair Display', serif",
        Lato: "'Lato', sans-serif ",
      }
    },
  },
  plugins: [],
}

