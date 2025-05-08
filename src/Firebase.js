// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2bwzS5Q-0W1Gv8_IpvSjisqJ_VzrCO88",
  authDomain: "realo-6ca26.firebaseapp.com",
  projectId: "realo-6ca26",
  storageBucket: "realo-6ca26.firebasestorage.app",
  messagingSenderId: "114572098404",
  appId: "1:114572098404:web:9d58c92ea4b88d66db9871",
  measurementId: "G-HM55E3T8NN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);