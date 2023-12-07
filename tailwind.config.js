/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        horoluxia: ['Libre Baskerville', 'Cinzel Decorative', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        cinzel: ['Cinzel', 'sans-serif'],
        cinzelDeco: ['Cinzel Decorative', 'sans-serif'],
      },
    },
    colors: {
      matte: "#28282B", // Custom primary background color
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
});
