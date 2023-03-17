
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5daOuvYPyAON8j7ATPuIZmKezHJHGRTU",
  authDomain: "chatapp-8e233.firebaseapp.com",
  projectId: "chatapp-8e233",
  storageBucket: "chatapp-8e233.appspot.com",
  messagingSenderId: "243134730389",
  appId: "1:243134730389:web:1c4f76753a778704e6cb9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// Initialize Firebase
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();