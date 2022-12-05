import {  initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQpEXsxgpk4BLSpoS9OZs1zZIycFBFFKc",
  authDomain: "reactblog-6af4e.firebaseapp.com",
  projectId: "reactblog-6af4e",
  storageBucket: "reactblog-6af4e.appspot.com",
  messagingSenderId: "1028252814243",
  appId: "1:1028252814243:web:e87d847b3b20ddeff02816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };