import { Routes, Route, Navigate } from "react-router-dom";

import Prepare from "../pages/Prepare/Prepare";

const PrepareRoute = () => {
  return (
    <Routes>
      <Route path="/:id" element={<Prepare />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default PrepareRoute;
