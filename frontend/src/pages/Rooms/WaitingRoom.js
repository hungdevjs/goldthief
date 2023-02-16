import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import LayoutGame from "../../components/LayoutGame";
import useAppContext from "../../hooks/useAppContext";

const WaitingRoom = () => {
  const navigate = useNavigate();
  const { gameState } = useAppContext();

  const { game } = gameState;

  if (game.joiner) navigate(`/preparing/${game.id}`);

  return (
    <LayoutGame>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        width="80vw"
        height="75vh"
        borderRadius="24px"
        sx={{ background: "rgba(255, 253, 253, 0.5)", px: 3, py: 2 }}
      >
        <Grid xs={8} sm={6}>
          <Typography
            fontFamily="'Luckiest Guy', cursive"
            fontWeight="600"
            fontSize="24px"
          >
            {game.host.username}
          </Typography>
          <Typography
            fontFamily="'Luckiest Guy', cursive"
            fontWeight="600"
            fontSize="24px"
          >
            Room: {game.code}
          </Typography>
        </Grid>
        <Grid display="flex" justifyContent="flex-end" xs={10.5} sm={6}>
          <Typography
            fontFamily="'Luckiest Guy', cursive"
            fontWeight="600"
            fontSize="24px"
          >
            Waiting For Opponent...
          </Typography>
        </Grid>
      </Grid>
    </LayoutGame>
  );
};

export default WaitingRoom;
