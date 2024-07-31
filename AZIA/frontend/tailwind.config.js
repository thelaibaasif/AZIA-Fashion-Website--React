/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skin-brown': '#ddc688',
        'skin-light': '#e1d0a3',
        'skin-dark': '#c4a44a',
        'skin-soft': '#e1d0a3',
        
      },

    },
  },
  variants: {},
  plugins: [],
}
