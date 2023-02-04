import { Routes, Route } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import LoginRoute from "./LoginRoute";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login/*" element={<LoginRoute />} />
      <Route path="*" element={<HomeRoute />} />
    </Routes>
  );
};

export default AuthRoutes;
