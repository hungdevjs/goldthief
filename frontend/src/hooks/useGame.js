import { useState, useEffect } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

import { create, join } from "../utils/callables";
import { firestore } from "../configs/firebase.config";
import useAuth from "./useAuth";

const useGame = () => {
  const { user } = useAuth();

  console.log(user);

  const [game, setGame] = useState(null);

  const handleGameData = async () => {
    if (user?.activeGameId) {
      const gameDoc = await getDoc(doc(firestore, "games", user.activeGameId));

      setGame({ ...gameDoc.data(), id: user.activeGameId });
    } else setGame(null);
  };

  const unsubcribe = async (id) => {
    const unsub = await onSnapshot(doc(firestore, "games", id), (doc) => {
      setGame({ ...doc.data(), id });
    });

    return unsub;
  };

  const createGame = async (data) => {
    const gameDoc = await create(data);

    setGame(gameDoc.data);

    await unsubcribe(gameDoc.data.id);

    return gameDoc.data.id;
  };

  const joinGame = async (data) => {
    const gameDoc = await join(data);

    setGame(gameDoc.data);

    await unsubcribe(gameDoc.data.id);

    return gameDoc.data.id;
  };

  useEffect(() => {
    handleGameData();
  }, [user]);

  return { createGame, joinGame, game };
};

export default useGame;
