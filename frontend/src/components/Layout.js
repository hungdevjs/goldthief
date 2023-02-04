import { Box, Grid, Typography } from "@mui/material";
import useResponsive from "../hooks/useResponsive";

const Layout = ({ children }) => {
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
      <Typography
        fontFamily="'Luckiest Guy', cursive"
        fontWeight="600"
        height="30vh"
        sx={{
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          paddingTop: "8vh",
          mb: 10,
          color: "rgba(255, 226, 89, 0.5)",
          fontSize: "10vw",
        }}
      >
        Gold Thief
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
