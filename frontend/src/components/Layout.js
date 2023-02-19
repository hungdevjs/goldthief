import { Box, Grid, Typography } from "@mui/material";
import useResponsive from "../hooks/useResponsive";
import useAppContext from "../hooks/useAppContext";

const Layout = ({ children }) => {
  const { isMobile } = useResponsive();
  const { authState } = useAppContext();
  const { logout } = authState;

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
          fontSize={isMobile ? "100px" : "140px"}
          align="center"
          lineHeight={isMobile ? "100px" : "auto"}
          sx={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            paddingTop: isMobile ? "16vh" : "16vh",
            mb: isMobile ? 13 : 16,
            color: "rgba(255, 226, 89)",
          }}
        >
          Gold Thief
        </Typography>
        {/* <button onClick={() => logout()}>Logout</button> */}
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
