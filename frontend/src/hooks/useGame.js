import { useState } from "react";

import { create } from "../utils/callables";

const useGame = () => {
  const [game, setGame] = useState({});

  const createGame = async (data) => {
    const gameDoc = await create(data);

    setGame(gameDoc.data);

    return gameDoc.data.id;
  };

  return { createGame, game };
};

export default useGame;
