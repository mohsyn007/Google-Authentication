// Do not store config on client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOHNWkpWHZsxBIqjJ3njcKON1EcrR5PKk",
  authDomain: "simple-firebase-e1a13.firebaseapp.com",
  projectId: "simple-firebase-e1a13",
  storageBucket: "simple-firebase-e1a13.firebasestorage.app",
  messagingSenderId: "644255148025",
  appId: "1:644255148025:web:d8905aecd696e892a0bf28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;
