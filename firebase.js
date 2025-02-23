// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0I3T4SX8U3PEru2TctpESWadt_RmpTQE",
  authDomain: "laundrilite.firebaseapp.com",
  projectId: "laundrilite",
  storageBucket: "laundrilite.firebasestorage.app",
  messagingSenderId: "795013113551",
  appId: "1:795013113551:web:2d5b489b6a4be628e639ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
