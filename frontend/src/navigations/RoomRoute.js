import { Routes, Route, Navigate } from "react-router-dom";

import CreateRoom from "../pages/Rooms/CreateRoom";
import JoinRoom from "../pages/Rooms/JoinRoom";
import WaitingRoom from "../pages/Rooms/WaitingRoom";
import useGame from "../hooks/useGame";

const RoomRoute = () => {
  const {game} = useGame()
  
  if (!game) return (
    <Routes>
      <Route path="/create" element={<CreateRoom />} />
      <Route path="/join" element={<JoinRoom />} />
      <Route path="/waiting" element={<WaitingRoom />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  return <WaitingRoom />
};

export default RoomRoute;
