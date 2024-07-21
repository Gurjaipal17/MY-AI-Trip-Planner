// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYkaAjFNgGBjUwzr47BLx5Ld0urXxeacM",
  authDomain: "ai-travel-planner-60312.firebaseapp.com",
  projectId: "ai-travel-planner-60312",
  storageBucket: "ai-travel-planner-60312.appspot.com",
  messagingSenderId: "115663358446",
  appId: "1:115663358446:web:79ec308d9173b43ce0e6ff",
  measurementId: "G-LJ18MP0S8F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
