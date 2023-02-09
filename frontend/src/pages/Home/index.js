import { Box, Button } from "@mui/material";

import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const navigate = useNavigate();
  const { user, loginAnonymous } = useAuth();

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
          onClick={() => navigate("/profile/")}
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
            user ? navigate("/rooms/create") : navigate("/login");
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
          onClick={() => navigate("/signup")}
        >
          Sign Up
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
            user ? navigate("/rooms/join") : loginAnonymous();
          }}
        >
          {user ? "Join" : "Play As guest"}
        </Button>
      </Box>
    </Layout>
  );
};

export default Home;
