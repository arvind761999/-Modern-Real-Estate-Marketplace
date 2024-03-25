// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bookroomsflates-f56e4.firebaseapp.com",
  projectId: "bookroomsflates-f56e4",
  storageBucket: "bookroomsflates-f56e4.appspot.com",
  messagingSenderId: "187200591835",
  appId: "1:187200591835:web:9f7809fd18e34dfc5279fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);