// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1yU6WbLVqe4GHlOgprHmn7bZuZw-fSjg",
  authDomain: "fday-7d60f.firebaseapp.com",
  projectId: "fday-7d60f",
  storageBucket: "fday-7d60f.appspot.com",
  messagingSenderId: "929835916060",
  appId: "1:929835916060:web:43cc6605c6ab97f37378d9",
  measurementId: "G-789DR3RY1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);