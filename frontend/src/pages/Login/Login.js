import { Box } from "@mui/material";

import Layout from "../../components/Layout";

const Login = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      sx={{ backgroundImage: `url:/background` }}
    >
      <Box>
        {" "}
        <Layout />
      </Box>
      <Box>Login</Box>
    </Box>
  );
};

export default Login;
