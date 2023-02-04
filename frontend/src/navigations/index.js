import { Routes, Route } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import MainRoutes from "./MainRoutes";
import AuthRoutes from "./AuthRoutes";

const Navigation = () => {
  const { user, isInitialized } = useAuth();

  if (!isInitialized) return null;

  return user ? <MainRoutes /> : <AuthRoutes />;
};

export default Navigation;
