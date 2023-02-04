import { Routes, Route } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import RoomRoute from "./RoomRoute";
import PrepareRoute from "./PrepareRoute";
import GameRoute from "./GameRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/rooms/*" element={<RoomRoute />} />
      <Route path="/prepare/*" element={<PrepareRoute />} />
      <Route path="/game/*" element={<GameRoute />} />
      <Route path="*" element={<HomeRoute />} />
    </Routes>
  );
};

export default MainRoutes;
