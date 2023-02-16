import { createContext, useState } from "react";

import Loading from "../components/Loading";
import useLoading from "../hooks/useLoading";
import useAuth from "../hooks/useAuth";
import useGame from "../hooks/useGame";
import usePrepare from "../hooks/usePrepare";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const loadingState = useLoading();
  const authState = useAuth();
  const gameState = useGame();
  const prepareState = usePrepare();

  return (
    <AppContext.Provider
      value={{ authState, gameState, loadingState, prepareState }}
    >
      {children}
      <Loading isLoading={loadingState.isLoading} />
    </AppContext.Provider>
  );
};
