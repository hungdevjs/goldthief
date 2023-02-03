import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

import Layout from "../../components/Layout";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <Box display="flex" flexDirection="column" spacing={3} sx={{ gap: 1 }}>
        <TextField
          size="small"
          label="Username"
          sx={{
            background: "rgba(31, 31, 31, 0.4)",
            border: "2px solid #D68F24",
            fontFamily: "Montserrat",
            fontWeight: "700",
            borderRadius: "8px",
            input: { color: "white" },
          }}
          InputLabelProps={{
            style: {
              color: "#FF9900",
            },
          }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          size="small"
          type="password"
          label="Password"
          sx={{
            background: "rgba(31, 31, 31, 0.4)",
            border: "2px solid #D68F24",
            fontFamily: "Montserrat",
            fontWeight: "700",
            borderRadius: "8px",
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
        >
          Login
        </Button>
      </Box>
    </Layout>
  );
};

export default Login;
