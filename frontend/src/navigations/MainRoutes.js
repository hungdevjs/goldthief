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
import GuideRoute from "./GuideRoute";

const MainRoutes = () => {
  const { gameState } = useAppContext();
  const { game, prepare } = gameState;

  const [isInitialized, setIsInitialized] = useState(false);
  const [gameStatus, setGameStatus] = useState(null);

  useEffect(() => {
    setGameStatus(game?.status);

    setIsInitialized(true);
  }, [game]);

  if (!isInitialized) return null;

  return (
    <Routes>
      {gameStatus === "waiting" ? (
        <>
          <Route path="/waiting/*" element={<WaitingRoom />} />
          <Route path="*" element={<Navigate to={`/waiting/${game.id}`} />} />
        </>
      ) : gameStatus === "preparing" ? (
        <>
          <Route
            path="/preparing/*"
            element={<PrepareRoute prepare={prepare} />}
          />
          <Route path="*" element={<Navigate to={`/preparing/${game.id}`} />} />
        </>
      ) : gameStatus === "in progress" ? (
        <>
          <Route path="/game/*" element={<GameRoute />} />
          <Route path="*" element={<Navigate to={`/game/${game.id}`} />} />
        </>
      ) : (
        <>
          <Route path="/profile/*" element={<ProfileRoute />} />
          <Route path="/create" element={<CreateRoom />} />
          <Route path="/join" element={<JoinRoom />} />
          <Route path="/guide" element={<GuideRoute />} />
          <Route path="*" element={<HomeRoute />} />
        </>
      )}
    </Routes>
  );
};

export default MainRoutes;
