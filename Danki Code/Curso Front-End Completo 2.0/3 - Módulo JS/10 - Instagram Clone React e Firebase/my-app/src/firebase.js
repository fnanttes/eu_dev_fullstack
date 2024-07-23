import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB4SPcX39EjWeJXO3ctyXa7DwJK31VHwM0",
  authDomain: "instagram-clone-curso-769d6.firebaseapp.com",
  projectId: "instagram-clone-curso-769d6",
  storageBucket: "instagram-clone-curso-769d6.appspot.com",
  messagingSenderId: "518395032335",
  appId: "1:518395032335:web:8770a20e57cfe107e2447a",
  measurementId: "G-50F47E4TCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const functions = getFunctions(app);

export { app, analytics, db, auth, storage, functions };
