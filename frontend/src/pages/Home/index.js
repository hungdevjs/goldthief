import { Box, Button } from "@mui/material";

import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import { async } from "@firebase/util";

const Home = () => {
  const navigate = useNavigate();
  const { authState, loadingState } = useAppContext();
  const { setIsLoading, isLoading } = loadingState;

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
          }}
          onClick={async () => {
            setIsLoading(true);
            try {
              navigate("/profile/");
            } catch (err) {
              console.log(err.message);
            }
            setIsLoading(false);
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
            mt: 1,
            color: "#2E2E2E",
            fontFamily: "Luckiest Guy",
            fontWeight: "600",
            borderRadius: "10px",
          }}
          onClick={async () => {
            setIsLoading(true);
            try {
              navigate("/create");
            } catch (err) {
              console.log(err.message);
            }
            setIsLoading(false);
          }}
        >
          Create room
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
            console.log(isLoading);
            console.log(setIsLoading);
            try {
              navigate("/join");
            } catch (err) {
              console.log(err.message);
            }
            setIsLoading(false);
          }}
        >
          Join
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

export default Home;
