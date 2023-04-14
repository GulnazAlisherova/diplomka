// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9PQdaXHb7-Fj9cm2Q-Rm4JIVhhRsmeIQ",
  authDomain: "elet-company.firebaseapp.com",
  projectId: "elet-company",
  storageBucket: "elet-company.appspot.com",
  messagingSenderId: "862703181912",
  appId: "1:862703181912:web:51e630f1668a59ccc36a2d",
};

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
