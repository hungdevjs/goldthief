import { Box, Typography } from "@mui/material";

import useResponsive from "../hooks/useResponsive";
import useAppContext from "../hooks/useAppContext";

const LayoutGame = ({ children }) => {
  const { isMobile } = useResponsive();

  const { authState } = useAppContext();
  const { logout } = authState;

  return (
    <Box
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundImage: `url(${"/background.png"})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      overflow="hidden"
    >
      <Box
        width="100vw"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        overflow="hidden"
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
            mb: 3,
            color: "rgba(255, 226, 89)",
          }}
        >
          Gold Thief
        </Typography>
        <button onClick={() => logout()}>Logout</button>
        {children}
      </Box>
    </Box>
  );
};

export default LayoutGame;
