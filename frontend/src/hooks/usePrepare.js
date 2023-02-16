import { useState, useEffect } from "react";

import {
  defaultTreasures,
  defaultCoordinates,
  defaultTools,
} from "../utils/constants";
import useAuth from "./useAuth";

const usePrepare = () => {
  const { user } = useAuth();

  const [treasures, setTreasures] = useState(defaultTreasures);

  const [coordinates, setCoordinates] = useState(defaultCoordinates);

  const [tools, setTools] = useState(defaultTools);

  const [toolsSelected, setToolsSelected] = useState([]);

  const resetPrepare = () => {
    setTreasures(defaultTreasures);
    setCoordinates(defaultCoordinates);
    setTools(defaultTools);
    setToolsSelected([]);
  };

  useEffect(() => {
    resetPrepare();
  }, [user]);

  return {
    tools,
    setTools,
    treasures,
    setTreasures,
    coordinates,
    setCoordinates,
    toolsSelected,
    setToolsSelected,
    resetPrepare,
  };
};

export default usePrepare;
