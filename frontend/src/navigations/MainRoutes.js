import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import PrepareRoute from "./PrepareRoute";
import GameRoute from "./GameRoute";
import ProfileRoute from "./ProfileRoute";
import CreateRoom from "../pages/Rooms/CreateRoom";
import JoinRoom from "../pages/Rooms/JoinRoom";
import WaitingRoom from "../pages/Rooms/WaitingRoom";
import useAppContext from "../hooks/useAppContext";

const MainRoutes = () => {
  const { gameState } = useAppContext();
  const { game } = gameState;

  const [isInitialized, setIsInitialized] = useState(false);
  const [gameStatus, setGameStatus] = useState(null);

  useEffect(() => {
    setGameStatus(game?.status);

    setIsInitialized(true);
  }, [game]);

  if (!isInitialized) return false;

  return (
    <Routes>
      {gameStatus === "waiting" ? (
        <>
          <Route path="/rooms/waiting/*" element={<WaitingRoom />} />
          <Route
            path="*"
            element={<Navigate to={`/rooms/waiting/${game.id}`} />}
          />
        </>
      ) : gameStatus === "preparing" ? (
        <>
          <Route path="/prepare/*" element={<PrepareRoute />} />
          <Route path="*" element={<Navigate to={`/prepare/${game.id}`} />} />
        </>
      ) : gameStatus === "in progress" ? (
        <>
          <Route path="/game/*" element={<GameRoute />} />
          <Route path="*" element={<Navigate to={`/game/${game.id}`} />} />
        </>
      ) : (
        <>
          <Route path="/profile/*" element={<ProfileRoute />} />
          <Route path="rooms/create" element={<CreateRoom />} />
          <Route path="rooms/join" element={<JoinRoom />} />
          <Route path="*" element={<HomeRoute />} />
        </>
      )}
    </Routes>
  );
};

export default MainRoutes;
