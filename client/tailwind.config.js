/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [],
  },
  theme: {
    
    extend: {
      backgroundImage: {
        'homepage-img-1': "url('src/assets/img/bg_img3.jpg')",
        'homepage-img-2': "url('src/assets/img/bg_img1.jpg')",
        'homepage-img-3': "url('src/assets/img/bg_img2.jpg')",
      },
      fontFamily:{
          inter :["Inter", "sans-serif"],
          kanit :["Kanit", "sans-serif"]
      },
    },
  },
  plugins: [require("daisyui")],
}