import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

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
        sx={{
          paddingTop: "50px",
        }}
      >
        <img src="/goldthief.png" width="100%" height="45%" />
      </Grid>
    </Box>
  );
};

export default Layout;
