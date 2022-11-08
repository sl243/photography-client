// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsUH4BHUMfTDErT7cmPEySVpD2RVGSN1U",
  authDomain: "shamim-photography.firebaseapp.com",
  projectId: "shamim-photography",
  storageBucket: "shamim-photography.appspot.com",
  messagingSenderId: "631601757519",
  appId: "1:631601757519:web:74b6d2a13a1fead707993a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;