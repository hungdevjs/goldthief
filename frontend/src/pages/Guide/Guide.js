import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useResponsive from "../../hooks/useResponsive";

const Guide = () => {
    const navigate = useNavigate();

    const { isMobile } = useResponsive();

    return  <Box
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
        fontSize="48px"
        align="center"
        lineHeight={isMobile ? "100px" : "auto"}
        sx={{
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          paddingTop: isMobile ? "4vh" : "2vh",
          mb: 4,
          color: "rgba(255, 226, 89)",
        }}
      >
        Gold Thief
      </Typography>
      <Box
        container
        display="flex"
        justifyContent="space-between"
        width="75vw"
        height= { isMobile ? "70vh" : "75vh" }
        sx={{ background: "rgba(255, 253, 253, 0.5)", px: 4, py: 4, borderRadius: 6 }}
      >
          <Typography
            fontFamily="'Luckiest Guy', cursive"
            fontWeight="600"
            fontSize="24px"
          >
            guide....
          </Typography>
          <Box display="flex" flexGrow="1" justifyContent="flex-end" alignItems="flex-end">
          <Button
              variant="link"
              size="small"
              onClick={() => navigate("/home")}
              sx={{fontWeight: 600}}
            >
              Back
            </Button>
          </Box>
      </Box>
    </Box>
  </Box>
}

export default Guide;