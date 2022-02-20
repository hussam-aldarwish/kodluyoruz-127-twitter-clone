// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEiO8Kx9ooXCWzn-0o6mPNyfmBjrgrQhw",
  authDomain: "twitter-clone-kodluyoruz-47f95.firebaseapp.com",
  projectId: "twitter-clone-kodluyoruz-47f95",
  storageBucket: "twitter-clone-kodluyoruz-47f95.appspot.com",
  messagingSenderId: "575099263580",
  appId: "1:575099263580:web:dafc3e3a388aaa7100e499",
  measurementId: "G-CZZYT31L9H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
