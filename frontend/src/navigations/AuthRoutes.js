import { Routes, Route } from "react-router-dom";

import LoginRoute from "./LoginRoute";
import SignUpRoute from "./SignUpRoute";
import GuideRoute from "./GuideRoute";
import HomeAuthenticated from "../pages/HomeAuthenticated/HomeAuthenticated";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/signup/*" element={<SignUpRoute />} />
      <Route path="/login/*" element={<LoginRoute />} />
      <Route path="/guide" element={<GuideRoute />} />
      <Route path="*" element={<HomeAuthenticated />} />
    </Routes>
  );
};

export default AuthRoutes;
