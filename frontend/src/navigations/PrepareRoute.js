import { Routes, Route, Navigate } from "react-router-dom";

import Prepare from "../pages/Prepare/Prepare";
import BeforeStart from "../pages/Prepare/BeforeStart";
import PrepareTools from "../pages/Prepare/PrepareTools";

const PrepareRoute = ({ prepare }) => {
  return (
    <Routes>
      <Route
        path="/:id"
        element={
          prepare.tools ? (
            <BeforeStart />
          ) : prepare.map ? (
            <PrepareTools />
          ) : (
            <Prepare />
          )
        }
      />
    </Routes>
  );
};

export default PrepareRoute;
