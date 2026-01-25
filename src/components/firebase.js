import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "https://shoepoint-43253-default-rtdb.firebaseio.com/",
  authDomain: "shoepoint-43253.firebaseapp.com",
  projectId: "shoepoint-43253",
  storageBucket: "shoepoint-43253.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123def456",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);