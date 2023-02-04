import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import {
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, firestore } from "../configs/firebase.config";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginAnonymous = async () => {
    await signInAnonymously(auth);

    const newUser = {
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
    };

    await setDoc(doc(firestore, "users", auth.currentUser.uid), newUser);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      setIsInitialized(true);
    });
    return () => unsubscribe && unsubscribe();
  }, []);

  return { login, loginAnonymous, logout, user, isInitialized };
};

export default useAuth;
