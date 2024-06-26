/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        mosts: ["Montserrat", "sans-serif"],
        sand: ["Quicksand", "sans-serif"],
        hans: ["Archivo Black", "sans-serif"],
        monoton: ["Monoton", "sans-serif"],
      },
    },
  },
  plugins: "",
};
