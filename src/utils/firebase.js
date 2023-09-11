// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7jrDK4NrwWjvpw2jZEe1oJiedPJIp2dA",
  authDomain: "netflixgpt-92d77.firebaseapp.com",
  projectId: "netflixgpt-92d77",
  storageBucket: "netflixgpt-92d77.appspot.com",
  messagingSenderId: "993390948734",
  appId: "1:993390948734:web:0e0067144b29c72140032f",
  measurementId: "G-CEYBTHKCPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();