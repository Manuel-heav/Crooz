import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1TKxWuwxjv2CVUqAU-FI7ILfAKc6cp2g",
  authDomain: "crooz-83fcd.firebaseapp.com",
  projectId: "crooz-83fcd",
  storageBucket: "crooz-83fcd.appspot.com",
  messagingSenderId: "790051288631",
  appId: "1:790051288631:web:95b3c1eefabeb78a2231b2",
  measurementId: "G-MLZNQHKK6S",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
