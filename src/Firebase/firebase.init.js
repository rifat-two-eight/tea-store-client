// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4fIlkhWNV_vUj7OTv1Sx5EiI5tPDbMvY",
  authDomain: "tea-store-app.firebaseapp.com",
  projectId: "tea-store-app",
  storageBucket: "tea-store-app.firebasestorage.app",
  messagingSenderId: "833620274661",
  appId: "1:833620274661:web:3beee4589b8836d2e9d30c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
