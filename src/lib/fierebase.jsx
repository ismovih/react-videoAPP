// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQgt1F9HCuBH5C8YC-jW4W6mzsZObYsVw",
  authDomain: "react-video-56.firebaseapp.com",
  projectId: "react-video-56",
  storageBucket: "react-video-56.firebasestorage.app",
  messagingSenderId: "109817858124",
  appId: "1:109817858124:web:57a9e0f0574ec052084ce9",
  measurementId: "G-MF78K0X4ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);