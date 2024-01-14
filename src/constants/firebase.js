// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO1B1UJywTCmE_sQBCDnwCVn-t0e11WY4",
  authDomain: "dtbi-website.firebaseapp.com",
  projectId: "dtbi-website",
  storageBucket: "dtbi-website.appspot.com",
  messagingSenderId: "832168120959",
  appId: "1:832168120959:web:4141283c3045c08de5654a",
  measurementId: "G-2QCMZL17QC"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
export { app, firestore, auth } 