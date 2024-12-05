/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        'xs': { 'max': '576px' },
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      fontFamily: {
        montserrat: ["var(--font-primary)"]
      },
      colors: {
        primary: '#2F3E46',
        secondary: '#E6FF9E',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, rgba(47,62,70,1) 0%, rgba(82,121,111,1) 100%)'
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        white: 'rgba(255, 255, 255, 0.35) 0px 1px 5px',
      }
    },
  },
  plugins: [],
}