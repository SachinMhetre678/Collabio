// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "collabio-e89c6.firebaseapp.com",
  projectId: "collabio-e89c6",
  storageBucket: "collabio-e89c6.appspot.com",
  messagingSenderId: "1043974272583",
  appId: "1:1043974272583:web:d914622e4144d3cd626362",
  measurementId: "G-8MVEZPPSVF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);