// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-xEN_EXkfogwGu6nHhfJixwXf4sfGf2A",
  authDomain: "project-overview-67f6b.firebaseapp.com",
  projectId: "project-overview-67f6b",
  storageBucket: "project-overview-67f6b.firebasestorage.app",
  messagingSenderId: "2528687295",
  appId: "1:2528687295:web:ac4662bbb5983f742b020a",
  measurementId: "G-GKTXVZ48CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, analytics, auth};