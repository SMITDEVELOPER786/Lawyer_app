import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfff3ztUPVBiGpH6ngxnL_JzGF54CVVQA",
  authDomain: "sarvej-abbasi.firebaseapp.com",
  databaseURL: "https://sarvej-abbasi-default-rtdb.firebaseio.com",
  projectId: "sarvej-abbasi",
  storageBucket: "sarvej-abbasi.appspot.com",
  messagingSenderId: "1024332593531",
  appId: "1:1024332593531:web:e3f6dbabd4605e338ee5de"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { database, storage,auth };