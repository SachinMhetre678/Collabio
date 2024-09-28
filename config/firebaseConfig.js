// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "collabio-e89c6.firebaseapp.com",
  projectId: "collabio-e89c6",
  storageBucket: "collabio-e89c6.appspot.com",
  messagingSenderId: "1043974272583",
  appId: "1:1043974272583:web:d914622e4144d3cd626362",
  measurementId: "G-8MVEZPPSVF"
};

let app; // Declare app variable

if (typeof window !== 'undefined') {
  // Firebase should only be initialized in the client environment
  app = initializeApp(firebaseConfig);
}

// Export Firestore and Analytics conditionally
export const db = typeof window !== 'undefined' ? getFirestore(app) : null;
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
