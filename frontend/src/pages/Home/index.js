import { Box, Button } from "@mui/material";

import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

const Home = () => {
  const navigate = useNavigate();
  const { authState, loadingState } = useAppContext();
  const { setIsLoading } = loadingState;

  const { user, loginAnonymous } = authState;

  return (
    <Layout>
      <Box display="flex" flexDirection="column" spacing={3}>
        <Button
          sx={{
            background: "linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)",
            py: 1.5,
            px: 11,
            color: "#2E2E2E",
            fontFamily: "Luckiest Guy",
            fontWeight: "600",
            borderRadius: "10px",
            display: user ? "flex" : "none",
          }}
          onClick={() => {
            setIsLoading(true)
            try {
              navigate("/profile/")
            } catch(err) {
              console.log(err.message)
            }
            setIsLoading(false)
          }}
        >
          Profile
        </Button>

        <Button
          sx={{
            background: "linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)",
            py: 1.5,
            px: 11,
            mb: 1,
            mt: user ? 1 : 2,
            color: "#2E2E2E",
            fontFamily: "Luckiest Guy",
            fontWeight: "600",
            borderRadius: "10px",
          }}
            onClick={() => {
              setIsLoading(true)
              try {
                user ? navigate("/create") : navigate("/login");
              } catch(err) {
                console.log(err.message)
              }
              setIsLoading(false)
            }}
        >
          {user ? "Create Room" : "Login"}
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
            display: user ? "none" : "flex",
          }}
          onClick={() => {
            setIsLoading(true)
            try {
              navigate("/signup")
            } catch(err) {
              console.log(err.message)
            }
            setIsLoading(false)
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
          onClick={() => {
            setIsLoading(true)
            try {
              user ? navigate("/join") : loginAnonymous();
            } catch(err) {
              console.log(err.message)
            }
            setIsLoading(false)
          }}
        >
          {user ? "Join" : "Play As guest"}
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
          onClick={() => {
            setIsLoading(true)
            try {
              navigate("/guide")  
            } catch(err) {
              console.log(err.message)
            }
            setIsLoading(false)
          }}
        >
          Guide
        </Button>
      </Box>
    </Layout>
  );
};

export default Home;
