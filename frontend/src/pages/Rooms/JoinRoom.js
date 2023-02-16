import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import useAppContext from "../../hooks/useAppContext";

const JoinRoom = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { gameState, loadingState } = useAppContext();
  const navigate = useNavigate();

  const { setIsLoading } = loadingState;
  const { joinGame, game } = gameState;

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const join = async () => {
    setIsLoading(true);
    try {
      await joinGame({ code, password });

      navigate(`/preparing/${game?.id}`);
    } catch (err) {
      console.log(err.message);
      enqueueSnackbar(err.message, { variant: "error" });
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        spacing={3}
        sx={{ gap: 1, mt: 3 }}
      >
        <TextField
          disableUnderline
          size="small"
          label="Code"
          sx={{
            background: "rgba(31, 31, 31, 0.4)",
            fontFamily: "Montserrat",
            fontWeight: "700",
            borderRadius: "8px",
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "2px solid #D68F24",
              },
              "&:hover fieldset": {
                border: "2px solid #D68F24",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid #D68F24",
              },
            },
          }}
          InputLabelProps={{
            style: {
              color: "#FF9900",
            },
          }}
          onChange={(e) => setCode(e.target.value)}
        />
        <TextField
          size="small"
          type="password"
          label="Password"
          sx={{
            background: "rgba(31, 31, 31, 0.4)",
            fontFamily: "Montserrat",
            fontWeight: "700",
            borderRadius: "8px",
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "2px solid #D68F24",
              },
              "&:hover fieldset": {
                border: "2px solid #D68F24",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid #D68F24",
              },
            },
          }}
          InputLabelProps={{
            style: {
              color: "#FF9900",
            },
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{
            background: "linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)",
            py: 1,
            px: 17,
            mb: 1,
            color: "#2E2E2E",
            fontFamily: "Luckiest Guy",
            fontWeight: "600",
            borderRadius: "10px",
          }}
          onClick={join}
        >
          join
        </Button>
      </Box>
    </Layout>
  );
};

export default JoinRoom;
