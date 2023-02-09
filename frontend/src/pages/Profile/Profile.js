import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState, useRef, useId } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import useResponsive from "../../hooks/useResponsive";
import useGame from "../../hooks/useGame";
import useAuth from "../../hooks/useAuth";
import useStorage from "../../hooks/useStorage";
import { async } from "@firebase/util";

const Profile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [files, setFiles] = useState([]);
  const labelRef = useRef();
  const inputId = useId();

  const { isMobile } = useResponsive();
  const { game } = useGame();
  const { logout } = useAuth();
  const { setFile, handleUpLoad, handleChange, urlImage, setUrlImage } =
    useStorage();

  const signOut = async () => {
    try {
      await logout();
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

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
          sx={{
            background: "rgba(255, 253, 253)",
            px: 3,
            py: 2,
            borderRadius: 4,
          }}
        >
          <Grid
            xs={12}
            display="flex"
            justifyContent="space-between"
            item
            width="100%"
            sx={{ pt: 1, pb: 3 }}
          >
            <Button
              variant="link"
              size="small"
              onClick={() => navigate("/home")}
            >
              Back
            </Button>
            <LogoutIcon sx={{ cursor: "pointer" }} onClick={() => signOut()} />
          </Grid>
          <Grid
            xs={isMobile ? 12 : 5}
            display="flex"
            flexDirection={isMobile ? "row" : "column"}
            sx={{ gap: isMobile ? 4 : 2, mb: 2 }}
            item
          >
            <Box
              component="img"
              sx={{
                width: isMobile ? 120 : 150,
                height: isMobile ? 120 : 150,
                borderRadius: 50,
              }}
              src={urlImage}
            ></Box>
            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              justifyContent={isMobile ? "center" : "flex-start"}
              sx={{ gap: 1, ml: isMobile ? 0 : 5 }}
            >
              <Box>
                <label htmlFor={inputId} ref={labelRef} className="d-none" />
                <input
                  id={inputId}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <EditIcon
                  sx={{ cursor: "pointer" }}
                  type="file"
                  onClick={() => labelRef.current?.click()}
                />
              </Box>

              <DeleteIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setFile("");
                  setUrlImage("");
                }}
              />
            </Box>
          </Grid>
          <Grid
            xs={isMobile ? 12 : 7}
            display="flex"
            flexDirection="column"
            sx={{ gap: 3, p: 1 }}
            item
          >
            <Box display="flex" sx={{ gap: 5 }}>
              <Typography fontWeight="600">Win:</Typography>
              <Typography fontWeight="600">Lose:</Typography>
              <Typography fontWeight="600">Total:</Typography>
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
          <Button
            variant="contained"
            sx={{ width: "100%", mt: isMobile ? 2 : 3 }}
            onClick={() => handleUpLoad()}
          >
            Save
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
