import { Routes, Route, Navigate } from "react-router-dom";

import CreateRoom from "../pages/Rooms/CreateRoom";
import JoinRoom from "../pages/Rooms/JoinRoom";
import WaitingRoom from "../pages/Rooms/WaitingRoom";

const RoomRoute = () => {
  return (
    <Routes>
      <Route path="/create" element={<CreateRoom />} />
      <Route path="/join" element={<JoinRoom />} />
      <Route path="/" element={<WaitingRoom />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoomRoute;
