import { Box, Grid } from "@mui/material";

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
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingTop: "35px",
          paddingBottom: "5vh",
        }}
        height="50%"
      >
        <img src="/goldthief.png" width="90%" height="30%" />
      </Grid>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
