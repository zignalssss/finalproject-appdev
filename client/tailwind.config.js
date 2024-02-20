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

      boxShadow:{
        '5xl': '20px 20px 50px rgba(0,0,0,0.5)',
      },

      backgroundImage:{
          'login_img1':"url('src/assets/img/BG_image_blur.jpg')",
          'login_imge':"url('src/assets/img/BG_image.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}