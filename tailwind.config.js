/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        scrollbar: ["rounded"],
      },
      colors: {
        primary: "#041059",
        primaryDark: "#041059",
        primaryLight: "#091877",
        ungu: "#5D50C6",
        pink: "#F85E9F",
        oren: "#FF5722",
        dark: "#191825",
        kuning: "#FACD49",
        grey: "#19182580",
        orenmuda: "#FACD4914",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
