import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
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

export { database};