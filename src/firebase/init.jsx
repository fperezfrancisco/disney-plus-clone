// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9tCJPDW2VfwCOHt6m5IfQqINUQzzcn4o",
  authDomain: "disney-clone-8c307.firebaseapp.com",
  projectId: "disney-clone-8c307",
  storageBucket: "disney-clone-8c307.appspot.com",
  messagingSenderId: "709380399308",
  appId: "1:709380399308:web:b70d52241f3688007f2269",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
