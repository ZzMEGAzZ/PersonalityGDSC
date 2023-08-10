/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors: {
      MainGreen: '#0F9D58',
      MainBlue: '#4285F4',
      MainYellow: '#F4B400',
      MainRed: '#DB4437',
      MainBlack: '#000000',
      MainWhite: '#FFFFFF',
      MainGray: '#F5F5F5',
    }
  },
  plugins: [],
}

