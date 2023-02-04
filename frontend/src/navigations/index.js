import { Routes, Route } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import useAppContext from '../hooks/useAppContext';

const Navigation = () => {
  const {
    authState: { user, isInitialized },
  } = useAppContext();

  if (!isInitialized) return null;

  return user ? <MainRoutes /> : <AuthRoutes />;
};

export default Navigation;
