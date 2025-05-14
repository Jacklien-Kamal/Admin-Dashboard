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
        },
        secondary:{
          body:'#f0f1f7'
        }
      },
       container: {
      center: true,         // auto mx by default
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }},
       animation: {
        'spin': 'spin 4.5s linear infinite',
      },
    },
  },
  plugins: [],
}