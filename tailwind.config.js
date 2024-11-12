/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundColor: {
        answred: "#4BB95C",
        masked: "#1D00FF",
        "yet-to-answer": "#E87731",
        "no-filter": "#000000",
      },
    },
  },
  plugins: [],
};
