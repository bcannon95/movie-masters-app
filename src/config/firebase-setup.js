import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDZrEjAj2fjGSz2braVVccN68qDyPapt2g",
  authDomain: "movie-db-b114f.firebaseapp.com",
  projectId: "movie-db-b114f",
  storageBucket: "movie-db-b114f.appspot.com",
  messagingSenderId: "708627248986",
  appId: "1:708627248986:web:ae2d10035a23626a6d6563",
  measurementId: "G-779EYNMWJZ"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
