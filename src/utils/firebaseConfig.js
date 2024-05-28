import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBmLCp0JB3BF-K2th9UMvyq56w9f1cBYrw",
  authDomain: "todolist-45fba.firebaseapp.com",
  databaseURL: "https://todolist-45fba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-45fba",
  storageBucket: "todolist-45fba.appspot.com",
  messagingSenderId: "984630434868",
  appId: "1:984630434868:web:4ffdbbcb67b383aa003e61"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
