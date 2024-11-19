/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // Primary Colors
        lightBlue: "#1e90ff", // hsl(215.02, 98.39%, 51.18%)
        darkBlue: "#336699", // hsl(213.86, 58.82%, 46.67%)
        lightGreen: "#2bd4a7", // hsl(156.62, 73.33%, 58.82%)
      
        // Background Colors
        bgWhite: "#ffffff", // white
        bgBlack: "#000000", // black
        bgGray4: "#cccccc", // gray-400
        bgGray5: "#4f4f4f", // gray-500
        bgGray6: "#4b5563", // gray-600
        bgGray9: "#111827", // gray-900
        bgGreen4: "#40c463", // green-400 (hsl(144, 39.22%, 64.71%))
        bgGreen5: "#26893b", // green-500 (hsl(144, 39.22%, 40%))
        bgGreen5: "#26893b", // green-500 (hsl(144, 39.22%, 40%))
      
        // Text Colors
        textWhite: "#ffffff", // white
        textGray4: "#cccccc", // gray-400
        textGray5: "#4f4f4f", // gray-500
        textGreen4: "#40c463", // green-400 (hsl(144, 39.22%, 64.71%))
        textGreen5: "#26893b", // green-500 (hsl(144, 39.22%, 40%))
      
        // Button Colors
        buttonWhite: "#ffffff", // white
        buttonGray4: "#cccccc", // gray-400
        buttonGray5: "#4f4f4f", // gray-500
        buttonGreen4: "#40c463", // green-400 (hsl(144, 39.22%, 64.71%))
        buttonGreen5: "#26893b", // green-500 (hsl(144, 39.22%, 40%))
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};
