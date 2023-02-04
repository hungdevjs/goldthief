import { useState } from "react";
import { nanoid } from "nanoid";
import { collection, doc, addDoc, getDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

import { auth, firestore } from "../configs/firebase.config";

const useGame = () => {
  const [game, setGame] = useState({});

  const createGame = async (data) => {
    const currentUser = (
      await getDoc(doc(firestore, "users", auth.currentUser.uid))
    ).data();

    const newGame = {
      ...data,
      code: nanoid(4),
      createdAt: Timestamp.fromDate(new Date()),
      host: {
        id: auth.currentUser.uid,
        username: currentUser.username,
        avatar: currentUser.avatar,
      },
    };

    const gameDoc = await addDoc(collection(firestore, "games"), newGame);

    setGame(gameDoc);
  };

  return { createGame, game };
};

export default useGame;
