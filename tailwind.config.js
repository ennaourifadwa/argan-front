/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        extend: {
          fontFamily: {
            roboto: ["Roboto", "sans-serif"],
          },
        },    
        colors: {
          brown: {
            500: "#8B4513",
          },
        },
      },
    },
    plugins: [],
  };
  