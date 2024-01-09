/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'namefont' : ['Rubik Maps', 'system-ui'],
        'titlefont' : ['Rubik Doodle Shadow', 'system-ui']
      }
    },
  },
  plugins: [],
}