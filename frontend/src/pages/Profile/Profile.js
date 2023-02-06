import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import useResponsive from "../../hooks/useResponsive";
import useGame from "../../hooks/useGame";

const Profile = () => {
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
          maxWidth={isMobile ? "75vw" : "30vw"}
          maxHeight={isMobile ? "25vh" : "30vh"}
          sx={{ background: "rgba(255, 253, 253, 0.7)", px: 3, py: 2 }}
        >
            <Grid xs={isMobile ? 12 : 6} display="flex" flexDirection={isMobile ? "row" : "column"} sx={{gap: isMobile ? 2 : 1}}>
                <Grid>
                    <Box component="img" sx={{width: 100, height: 100}} src="https://www.w3schools.com/css/ocean.jpg"></Box>
                </Grid>
                <Grid display="flex" flexDirection="column" sx={{gap: 1}}>
                    <Typography fontFamily="Luckiest Guy" fontSize="14px">Username:</Typography>
                    <Typography fontFamily="Luckiest Guy" fontSize="14px">Id:</Typography>
                </Grid>
            </Grid>
            <Grid xs={isMobile ? 12 : 6} display="flex" flexDirection={isMobile ? "row" : "column"}  sx={{gap: 4, p: 1}}>
                <Grid fontFamily="Luckiest Guy" >Win:</Grid>
                <Grid fontFamily="Luckiest Guy" >Lose:</Grid>
                <Grid fontFamily="Luckiest Guy" >Total:</Grid>
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
