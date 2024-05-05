// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJJkaLPsWXe-nNe36pCm5Q2Ey9dsJ9WJw",
  authDomain: "ecom-dae68.firebaseapp.com",
  projectId: "ecom-dae68",
  storageBucket: "ecom-dae68.appspot.com",
  messagingSenderId: "318443490587",
  appId: "1:318443490587:web:c01713e81ceeb2bb9757be"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }