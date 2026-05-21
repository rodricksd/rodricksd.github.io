/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f4',
          100: '#f8ede3',
          200: '#f1decf',
          300: '#e4c7a7',
          400: '#d3a779',
          500: '#b8834a',
          600: '#9a6733',
          700: '#7c512a',
          800: '#5f3c21',
          900: '#4a2f1a',
          950: '#2e1b12',
        },
        neutral: {
          50: '#f7f4f1',
          100: '#ede6e0',
          200: '#ded1c2',
          300: '#c9b29e',
          400: '#b4967d',
          500: '#9d7d66',
          600: '#7f6251',
          700: '#634b3f',
          800: '#48342c',
          900: '#32221d',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffeec4',
          200: '#ffde8d',
          300: '#fbc862',
          400: '#f2ab3a',
          500: '#d9891c',
          600: '#bb6c12',
          700: '#98530f',
          800: '#77410f',
          900: '#5f3510',
        },
      },
    },
  },
  plugins: [],
}

