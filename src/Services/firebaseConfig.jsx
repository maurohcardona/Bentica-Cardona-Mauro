
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPii7RyZo9ZyRHZ7lh0H96hLTKNG0m6ro",
  authDomain: "bentica-mauro-cardona.firebaseapp.com",
  projectId: "bentica-mauro-cardona",
  storageBucket: "bentica-mauro-cardona.appspot.com",
  messagingSenderId: "894150801959",
  appId: "1:894150801959:web:aef57d319b33fd7671ac02"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, 'productos')