import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB4SPcX39EjWeJXO3ctyXa7DwJK31VHwM0",
  authDomain: "instagram-clone-curso-769d6.firebaseapp.com",
  projectId: "instagram-clone-curso-769d6",
  storageBucket: "instagram-clone-curso-769d6.appspot.com",
  messagingSenderId: "518395032335",
  appId: "1:518395032335:web:8770a20e57cfe107e2447a",
  measurementId: "G-50F47E4TCC",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };
