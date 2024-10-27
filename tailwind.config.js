/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2e445a",
        secondary: "#fc7f03",
        textSecDark: "#fc7f03",
        tertiary: "#DDFFFD",
        bgSecondary: "rgb(250, 250, 246)",
        bgPrimary: "white",
      },
      screens: {
        sc560: "560px",
        maxSc360: { max: "360px" },
        sc600: "600px",
        sc800: "800px",
        sc1200: "1200px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
