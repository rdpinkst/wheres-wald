// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCweJc4il6uPOltWDcGK4jGSxkSr7et5cc",
  authDomain: "waldoproject-6f4fb.firebaseapp.com",
  projectId: "waldoproject-6f4fb",
  storageBucket: "waldoproject-6f4fb.appspot.com",
  messagingSenderId: "448823630977",
  appId: "1:448823630977:web:8f08f183228e162f5d8180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };