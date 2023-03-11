/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#E9EFC0",
      secondary: "red",
      "text-base": "white",
      "color1": '#E9EFC0'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
