import { initializeApp } from "firebase/app"; import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration For Firebase JS SDK v7.20.0 and
// later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ9wMwRAPZTADd5rP0WM19nNya91k2Omw",
  authDomain: "paystruct.firebaseapp.com",
  projectId: "paystruct",
  storageBucket: "paystruct.appspot.com",
  messagingSenderId: "710241577425",
  appId: "1:710241577425:web:13b34d7edf37937a17d8f0",
  measurementId: "G-PPEPCN53ME"
};

// Initialize Firebase
initializeApp(firebaseConfig); 
const db = getFirestore();

export default db;