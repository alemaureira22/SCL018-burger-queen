import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp9bBk_iIfkA3Sptsyq7rg12j99BoZ1LU",
  authDomain: "burger-queen-ma-22d5b.firebaseapp.com",
  projectId: "burger-queen-ma-22d5b",
  storageBucket: "burger-queen-ma-22d5b.appspot.com",
  messagingSenderId: "625978387798",
  appId: "1:625978387798:web:1a0d4e009d8d52ff0b3af7",
  measurementId: "G-VXLV54VW86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
