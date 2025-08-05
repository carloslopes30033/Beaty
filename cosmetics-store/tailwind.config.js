/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'persian': ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7ff',
          100: '#fdeeff',
          200: '#fbddff',
          300: '#f7bbff',
          400: '#f089ff',
          500: '#e654ff',
          600: '#d32aff',
          700: '#b916e3',
          800: '#9614ba',
          900: '#7a1494',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      }
    },
  },
  plugins: [],
}