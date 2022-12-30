// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBIsWC9kAfKG_5YN9OR6gWSWQLXkAmtaq8',
  authDomain: 'commushare-project.firebaseapp.com',
  projectId: 'commushare-project',
  storageBucket: 'commushare-project.appspot.com',
  messagingSenderId: '1069072126303',
  appId: '1:1069072126303:web:bdd3d9d360d679b18c26ea',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
