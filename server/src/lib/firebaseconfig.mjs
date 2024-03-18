// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvD-fgfq8Aawuoc_38tIcRS4UvNLRdhJ8",
  authDomain: "appdev-image-storage.firebaseapp.com",
  projectId: "appdev-image-storage",
  storageBucket: "appdev-image-storage.appspot.com",
  messagingSenderId: "556131845780",
  appId: "1:556131845780:web:cdc7644e7a5ee0d8ba1681",
  measurementId: "G-JTK2SDDFX3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
