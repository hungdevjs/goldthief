import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useResponsive from "../../hooks/useResponsive";
import useGame from "../../hooks/useGame";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")

  const { isMobile } = useResponsive();
  const { game } = useGame();
  const { logout } = useAuth()

    const signOut = async () => {
        try {
            await logout();
            navigate("/home")
        } catch(err) {
            console.log(err.message)
        }
    }

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
          justifyContent="space-between"
          maxWidth={isMobile ? "75vw" : "30vw"}
          maxHeight={isMobile ? "52h" : "40vh"}
          sx={{ background: "rgba(255, 253, 253)", px: 3, py: 2, borderRadius: 6 }}
        >
            <Grid xs={12} display="flex" justifyContent="space-between" item width="100%" sx={{pt: 1, pb: 3}}>
                <Button variant="contained" size="small" onClick={() => navigate("/home")}>Back</Button>
                <Button variant="contained" size="small" color="error" onClick={() => signOut()}>Sign out</Button>
            </Grid>
            <Grid xs={isMobile ? 12 : 6} display="flex" flexDirection={isMobile ? "row" : "column"} sx={{gap: isMobile ? 4 : 1, mb: 2}} item>
                <Box component="img" sx={{width: isMobile ? 120 : 150, height: isMobile ? 120 : 150, borderRadius: 50}} src="https://www.w3schools.com/css/ocean.jpg"></Box>
                <Box display="flex" flexDirection={isMobile ? "column" :"row"} justifyContent={isMobile ? "center" : "flex-start"} sx={{gap: 1}}>
                    <Button variant="contained" size="small" color="success">Edit</Button>
                    <Button variant="contained" size="small" color="error">Delete</Button>
                </Box>
            </Grid>
            <Grid xs={isMobile ? 12 : 6} display="flex" flexDirection="column"  sx={{gap: 4, p: 1}} item>
            <Box display="flex" sx={{gap: 5}}>
                <Typography 
              fontWeight="600">Win:</Typography>
                <Typography 
              fontWeight="600">Lose:</Typography>
                <Typography 
              fontWeight="600">Total:</Typography>
            </Box>
            <TextField
          size="small"
          label="Username"
          sx={{
            // background: "rgba(31, 31, 31, 0.4)",
            fontFamily: "Montserrat",
            fontWeight: "700",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "2px solid #1976d2",
              },
              "&:hover fieldset": {
                border: "2px solid #1976d2",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid #1976d2",
              },
            },
          }}
          InputLabelProps={{
            style: {
              color: "#1976d2",
            },
          }}
          onChange={(e) => setUsername(e.target.value)}
        />
            </Grid>
            <Button variant="contained" sx={{width: "100%"}}>Save</Button>
        </Grid>

      </Box>
    </Box>
  );
};

export default Profile;
