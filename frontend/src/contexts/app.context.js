import { createContext, useState } from "react";

import useAuth from "../hooks/useAuth";
import useGame from "../hooks/useGame";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const authState = useAuth();
  const gameState = useGame();

  return (
    <AppContext.Provider value={{ authState, gameState }}>
      {children}
    </AppContext.Provider>
  );
};
