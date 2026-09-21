/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        background: '#3f3cbb',
        'midnight': '#121063',
        text: '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        primary: '#3f82f6',
        secondary: '#1e3a8a',
      },
      fontFamily: {
        poppins: 'poppins, sans-serif',
      },
      keyframes: {
        myanimation: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        }
      },
      animation: {
        myanimation: 'myanimation 1s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}

