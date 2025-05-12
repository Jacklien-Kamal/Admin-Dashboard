/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

       colors: {
        primary: {
          body: '#252729',     // Primary 500
          light: '#111c43',       // Primary 400
          dark: '#1a1c1e',        // Primary 600
        }
      },
       animation: {
        'spin': 'spin 4.5s linear infinite',
      },
    },
  },
  plugins: [],
}