/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Font1:'Inter',
      Font2:'Clash Grotesk',
    },
    extend: {
      screens:{
        xm:"810px",
      },
    },
  },
  plugins: [],
}
