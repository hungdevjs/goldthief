import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWZlmN7g6u2DLoTVyW9tGNDiVb-7YmX8g",
  authDomain: "goldthief-df9a4.firebaseapp.com",
  projectId: "goldthief-df9a4",
  storageBucket: "goldthief-df9a4.appspot.com",
  messagingSenderId: "685132469435",
  appId: "1:685132469435:web:1053dc2089a6d86db4c59e",
  measurementId: "G-H3BNG6YZWN",
};

const app = initializeApp(firebaseConfig);

export default app;

export const firestore = getFirestore(app);

export const auth = getAuth(app);
