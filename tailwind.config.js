/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fond-page": "#0C0301"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    }
  },
  plugins: [],
}

