import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import useResponsive from "../../hooks/useResponsive";
import useGame from "../../hooks/useGame";

const WaitingRoom = () => {
  const { isMobile } = useResponsive();
  const {game} = useGame();

  console.log(game)

  return (
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      top={0}
      left={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundImage: `url(${"/background.png"})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        width="100vw"
        height="100vh"
        position="fixed"
        top={0}
        left={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Typography
          fontFamily="'Luckiest Guy', cursive"
          fontWeight="600"
          fontSize="48px"
          align="center"
          lineHeight={isMobile ? "100px" : "auto"}
          sx={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            paddingTop: isMobile ? "4vh" : "2vh",
            mb: 4,
            color: "rgba(255, 226, 89)",
          }}
        >
          Gold Thief
        </Typography>
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          width="80vw"
          height="75vh"
          sx={{ background: "rgba(255, 253, 253, 0.5)", px: 3, py: 2 }}
        >
          <Grid xs={8} sm={6}>
            <Typography
              fontFamily="'Luckiest Guy', cursive"
              fontWeight="600"
              fontSize="24px"
            >
              Name: {game.username}
            </Typography>
            <Typography
              fontFamily="'Luckiest Guy', cursive"
              fontWeight="600"
              fontSize="24px"
            >
              Room:{game.code}
            </Typography>
          </Grid>
          <Grid
            display="flex"
            justifyContent="flex-end"
            xs={10.5}
            sm={6}
            sx={{ flexGrow: 1 }}
          >
            <Typography
              fontFamily="'Luckiest Guy', cursive"
              fontWeight="600"
              fontSize="24px"
            >
              Waiting For Opponent...
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WaitingRoom;
