// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9PQdaXHb7-Fj9cm2Q-Rm4JIVhhRsmeIQ",
  authDomain: "elet-company.firebaseapp.com",
  projectId: "elet-company",
  storageBucket: "elet-company.appspot.com",
  messagingSenderId: "862703181912",
  appId: "1:862703181912:web:51e630f1668a59ccc36a2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//получить список категорий (коллекция документов)
export const categoryCollection = collection(db, 'categories');