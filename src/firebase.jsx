// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

// получить список категорий (коллекция документов).
export const categoryCollection = collection(db, "categories");
export const productCollection = collection(db, "products");
export const orderCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(orderCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
