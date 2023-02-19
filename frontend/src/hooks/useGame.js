import { useState, useEffect } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

import { create, join, prepareGame, prepareTools } from "../utils/callables";
import { firestore } from "../configs/firebase.config";
import useAuth from "./useAuth";

const useGame = () => {
  const { user } = useAuth();

  const [game, setGame] = useState(null);
  const [prepare, setPrepare] = useState({ map: null, tools: null });

  const handleGameData = async () => {
    if (user?.activeGameId) {
      const gameDoc = await getDoc(doc(firestore, "games", user.activeGameId));

      setGame({ ...gameDoc.data(), id: user.activeGameId });
    } else setGame(null);

    console.log(game);
  };

  const unsubcribe = async (id) => {
    const unsub = onSnapshot(doc(firestore, "games", id), (doc) => {
      setGame({ ...doc.data(), id });
    });

    return unsub;
  };

  const createGame = async (data) => {
    const gameDoc = await create(data);

    unsubcribe(gameDoc.data.id);

    setGame(gameDoc.data);
  };

  const joinGame = async (data) => {
    const gameDoc = await join(data);

    unsubcribe(gameDoc.data.id);

    setGame(gameDoc.data);
  };

  const prepareGameMap = async (data) => {
    const gameDoc = await prepareGame(data);

    setGame(gameDoc.data);
  };

  const prepareGameTools = async (data) => {
    const gameDoc = await prepareTools(data);

    setGame(gameDoc.data);
  };

  useEffect(() => {
    handleGameData();
  }, [user]);

  useEffect(() => {
    if (game?.id) {
      game?.host.id === user?.id
        ? setPrepare({
            map: game.host?.map || null,
            tools: game.host?.tools || null,
          })
        : setPrepare({
            map: game.joiner?.map || null,
            tools: game.joiner?.tools || null,
          });
    } else setPrepare({ map: null, tools: null });
  }, [game]);

  return {
    createGame,
    joinGame,
    prepareGameMap,
    prepareGameTools,
    game,
    prepare,
  };
};

export default useGame;
