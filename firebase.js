// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0I3T4SX8U3PEru2TctpESWadt_RmpTQE",
  authDomain: "laundrilite.firebaseapp.com",
  projectId: "laundrilite",
  storageBucket: "laundrilite.appspot.com", // ✅ Fixed storage bucket URL
  messagingSenderId: "795013113551",
  appId: "1:795013113551:web:2d5b489b6a4be628e639ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Fixed Firestore initialization

export { auth, db, doc, setDoc, updateDoc }; // ✅ Exporting Firestore functions
