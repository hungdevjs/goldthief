import { Routes, Route } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import RoomRoute from "./RoomRoute";
import PrepareRoute from "./PrepareRoute";
import GameRoute from "./GameRoute";
import Profile from "../pages/Profile/Profile";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/rooms/*" element={<RoomRoute />} />
      <Route path="/prepare/*" element={<PrepareRoute />} />
      <Route path="/game/*" element={<GameRoute />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="*" element={<HomeRoute />} />
    </Routes>
  );
};

export default MainRoutes;
