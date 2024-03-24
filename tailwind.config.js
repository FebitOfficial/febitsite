/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#796430",
        secondary: "#feb900",
        textSecDark: "#009E94",
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
