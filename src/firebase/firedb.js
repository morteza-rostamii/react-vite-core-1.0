// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//auth
import {getAuth} from 'firebase/auth'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNCjTUclJm_V-6QZAn-mwxol7BW26ZJwo",
  authDomain: "rostami-sites.firebaseapp.com",
  projectId: "rostami-sites",
  storageBucket: "rostami-sites.appspot.com",
  messagingSenderId: "764202708776",
  appId: "1:764202708776:web:f786f30ee3dc9362dcaa1d",
  measurementId: "G-LTKKXNB7GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth
export const auth = getAuth(app);

console.log('firebase is on !!')