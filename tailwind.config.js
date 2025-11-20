/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E5E5E5",
          dark: "rgba(0,0,0, 0.5)",
          light: "rgba(245,245,248,0.28)",
        },
        footer: {
          DEFAULT: "#141414",
          dark: "#292929",
          light: 'rgba(0,0,0,0.3)'
        },
        borderBot: {
          DEFAULT: 'rgba(0,0,0,0.2)',
        }
      },
    },
  },
  plugins: [],
}