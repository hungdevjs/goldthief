import { useState } from 'react';

import { create } from '../utils/callables';

const useGame = () => {
  const [game, setGame] = useState({});

  const createGame = async (data) => {
    await create(data);
  };

  return { createGame, game };
};

export default useGame;
