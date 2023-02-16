import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import { Navigate, useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import useAppContext from "../../hooks/useAppContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { authState, loadingState } = useAppContext();
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoading } = loadingState;
  const { signUp } = authState;

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      await signUp(email, password);

      navigate("/home");
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <Box display="flex" flexDirection="column" spacing={3} sx={{ gap: 1 }}>
        <TextField
          size="small"
          label="Email"
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
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleSignUp}
        >
          SignUp
        </Button>
      </Box>
    </Layout>
  );
};

export default SignUp;
