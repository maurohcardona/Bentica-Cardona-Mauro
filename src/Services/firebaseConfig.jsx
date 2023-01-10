
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { collection } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, 'productos')
export const auth  = getAuth(app);