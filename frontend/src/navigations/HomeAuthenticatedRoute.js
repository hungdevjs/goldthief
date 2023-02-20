import { Routes, Route, Navigate } from "react-router-dom";

import HomeAuthenticated from "../pages/HomeAuthenticated/HomeAuthenticated";

const HomeAuthenticatedRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeAuthenticated />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default HomeAuthenticatedRoute;
