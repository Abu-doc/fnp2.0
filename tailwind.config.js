/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-xl': {'min': '1024px', 'max': '1439px'},
        'md-lg': {'min': '768px', 'max': '1023px'} ,
      },
      width: {
        '90' : '370px',
        '106': '28rem',
        '128': '32rem',   // Custom width class `w-128` with a value of 32rem
        '144': '36rem',   // Custom width class `w-144` with a value of 36rem
        '160': '40rem',   // Custom width class `w-160` with a value of 40rem
        'full-screen': '100vw', // Custom width class `w-full-screen` for full viewport width
      },
      height: {
        '106': '28rem',
        '128': '32rem',   // Custom width class `w-128` with a value of 32rem
        '144': '36rem',   // Custom width class `w-144` with a value of 36rem
        '160': '40rem',   // Custom width class `w-160` with a value of 40rem
        'full-screen': '100vw', // Custom width class `w-full-screen` for full viewport width
      },
      inset: {
        '128': '32rem', // Add a new value for 'left-128'
        '144': '36rem', // Add another custom value if needed
        '170': '51rem',
      },
      colors: {
        'custom-green': '#7d8035',
      },
      borderRadius: {
        'full': '50%', // Add this line
      },

    },
  },
  plugins: [],
}

