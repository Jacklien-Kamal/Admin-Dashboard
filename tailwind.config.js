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
          body: '#2f434e',     // Primary 500
          light: '#734025', // Primary 400
          dark: '#1c2930',        // Primary 600
        },
        secondary:{
          body:'#E8D3B9'
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