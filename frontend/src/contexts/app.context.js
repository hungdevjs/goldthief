import { createContext, useState } from 'react';

import useAuth from '../hooks/useAuth';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const authState = useAuth();

  return (
    <AppContext.Provider value={{ authState }}>{children}</AppContext.Provider>
  );
};
