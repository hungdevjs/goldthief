import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const WaitingRoom = () => {
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
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="20%"
      >
        <img src="/goldthief.png" width="90%" height="40%" />
      </Box>
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
            Name
          </Typography>
          <Typography
            fontFamily="'Luckiest Guy', cursive"
            fontWeight="600"
            fontSize="24px"
          >
            Room:{" "}
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
  );
};

export default WaitingRoom;
