// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZKDMlqNvPuAr8rQCi3ToBLW3mU1MOT98",
  authDomain: "netflix-gpt-4d95a.firebaseapp.com",
  projectId: "netflix-gpt-4d95a",
  storageBucket: "netflix-gpt-4d95a.appspot.com",
  messagingSenderId: "123772919155",
  appId: "1:123772919155:web:ce8defd5678311e654b906",
  measurementId: "G-4F0PCVXW4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 


export const auth = getAuth();