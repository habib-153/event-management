// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0GOCzxBXl8VQI1Lj4qPHaS17bG8McUWc",
  authDomain: "social-event-50763.firebaseapp.com",
  projectId: "social-event-50763",
  storageBucket: "social-event-50763.appspot.com",
  messagingSenderId: "977441943286",
  appId: "1:977441943286:web:7dd90ef28d690a2b9586d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

