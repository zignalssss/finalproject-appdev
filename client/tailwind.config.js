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
        'homepage-img-1': "url(https://firebasestorage.googleapis.com/v0/b/appdev-image-storage.appspot.com/o/imgforproject%2Fbg_img3.jpg?alt=media&token=cdcfb637-3ffe-4259-8ff7-12aa4255aa1f)",
        'homepage-img-2': "url(https://firebasestorage.googleapis.com/v0/b/appdev-image-storage.appspot.com/o/imgforproject%2Fbg_img1.jpg?alt=media&token=898f3d22-e41d-4cc8-b0b5-65cc8257c6e8)",
        'homepage-img-3': "url(https://firebasestorage.googleapis.com/v0/b/appdev-image-storage.appspot.com/o/imgforproject%2Fbg_img2.jpg?alt=media&token=32f66452-3409-4fcb-8c5a-fba27bfc5b14)",
        'login_img1':"url(https://firebasestorage.googleapis.com/v0/b/appdev-image-storage.appspot.com/o/imgforproject%2FBG-img-log-reg.png?alt=media&token=c76dd9f5-e9be-4a12-9bbf-60b6072e07eb)",
        'login_imge':"url(https://firebasestorage.googleapis.com/v0/b/appdev-image-storage.appspot.com/o/imgforproject%2FBG-img10.jpg?alt=media&token=8a94e1c5-9c2f-4284-aeaa-7ad0023b3ed3)",
      },
      fontFamily:{
          inter :["Inter", "sans-serif"],
          kanit :["Kanit", "sans-serif"]
      },

      boxShadow:{
        '5xl': '20px 20px 50px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [require("daisyui")],
}