/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#1C352D",
        secondColor:"#1C352D",
        textColor:"#ffffff",
        blackColor:"#000000"
      },
      keyframes:{
        anim:{
          "0%":{transform: 'translateY(-500px)'},
          "100%":{transform: 'translateY(0)'}
        }
      },
      animation:{
        anim:"anim 1.4s "
      }
    },
  },
  plugins: [],
}
