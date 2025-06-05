/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '5000': '5000ms',
        '10000': '10000ms',
      },
    },
  },
  plugins: [],
};