// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfICE_UT31xtXiWvRuDxrS5FUBoYvsd40",
  authDomain: "netflixpractice-ef300.firebaseapp.com",
  projectId: "netflixpractice-ef300",
  storageBucket: "netflixpractice-ef300.firebasestorage.app",
  messagingSenderId: "884491066297",
  appId: "1:884491066297:web:64085bc0aa00eae4277468"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);