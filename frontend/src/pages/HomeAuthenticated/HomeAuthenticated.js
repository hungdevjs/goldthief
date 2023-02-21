import { Box, Button } from "@mui/material";

import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import { async } from "@firebase/util";

const HomeAuthenticated = () => {
  const navigate = useNavigate();
  const { authState, loadingState } = useAppContext();
  const { setIsLoading } = loadingState;

  const { loginAnonymous } = authState;

  const handleClickAnonymous = async () => {
    setIsLoading(true);
    try {
      await loginAnonymous();
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <Box display="flex" flexDirection="column" spacing={3}>
        <Button
          sx={{
            background: "linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)",
            py: 1.5,
            px: 11,
            mb: 1,
            mt: 2,
            color: "#2E2E2E",
            fontFamily: "Luckiest Guy",
            fontWeight: "600",
            borderRadius: "10px",
          }}
          onClick={async () => {
            setIsLoading(true);
            try {
              navigate("/login");
            } catch (err) {
              console.log(err.message);
            }
            setIsLoading(false);
          }}
        >
          Login
        </Button>

        <Button
          sx={{
            background: "linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)",
            py: 1.5,
            px: 11,
            mb: 1,
            color: "#2E2E2E",
            fontFamily: "Luckiest Guy",
            fontWeight: "600",
            borderRadius: "10px",
          }}
          onClick={async () => {
            setIsLoading(true);
            try {
              navigate("/signup");
            } catch (err) {
              console.log(err.message);
            }
            setIsLoading(false);
          }}
        >
          Sign Up
        </Button>

        <Button
          sx={{
            background: "linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)",
            py: 1.5,
            px: 11,
            mb: 1,
            color: "#2E2E2E",
            fontFamily: "Luckiest Guy",
            fontWeight: "600",
            borderRadius: "10px",
          }}
          onClick={() => handleClickAnonymous()}
        >
          Play as guest
        </Button>

        <Button
          sx={{
            background: "linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)",
            py: 1.5,
            px: 11,

            color: "#2E2E2E",
            fontFamily: "Luckiest Guy",
            fontWeight: "600",
            borderRadius: "10px",
          }}
          onClick={async () => {
            setIsLoading(true);
            try {
              navigate("/guide");
            } catch (err) {
              console.log(err.message);
            }
            setIsLoading(false);
          }}
        >
          Guide
        </Button>
      </Box>
    </Layout>
  );
};

export default HomeAuthenticated;
