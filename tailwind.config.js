/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fond-page": "#0C0301",
        "contour-button": "#000061"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true
    }
  },
  plugins: [],
}

