import { Box, Grid, Typography, Button, CardMedia } from "@mui/material";

import LayoutGame from "../../components/LayoutGame";
import useResponsive from "../../hooks/useResponsive";
import useAppContext from "../../hooks/useAppContext";

const BeforeStart = () => {
  const { isMobile } = useResponsive();
  const { gameState, prepareState } = useAppContext();

  const { game } = gameState;
  const { treasures, coordinates, toolsSelected } = prepareState;

  return (
    <LayoutGame>
      <Box
        display="flex"
        flexDirection="column"
        width="60vw"
        height="70vh"
        borderRadius="24px"
        sx={{ background: "rgba(255, 253, 253, 0.5)", px: 3, py: 4, mb: 3 }}
      >
        <Box xs={12} p={1} mb={2}>
          <Typography
            fontFamily="'Luckiest Guy', cursive"
            fontWeight="600"
            fontSize={isMobile ? "16px" : "22px"}
          >
            {game.host.username}
          </Typography>
        </Box>
        <Grid
          container
          display="flex"
          flexDirection={isMobile ? "row" : "column"}
          justifyContent="space-between"
        >
          <Grid
            xs={12}
            sm={2}
            display="flex"
            flexDirection={isMobile ? "row" : "column"}
            justifyContent="center"
            gap="20px"
            alignItems="center"
          >
            {toolsSelected.map((tool) => (
              <Box
                width={isMobile ? "60px" : "100px"}
                height={isMobile ? "60px" : "100px"}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bgcolor="#D9D9D9"
                borderRadius="10px"
                sx={{ cursor: "pointer" }}
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  width={isMobile ? "30px" : "50px"}
                />
              </Box>
            ))}
          </Grid>
          <Grid
            xs={12}
            sm={10}
            pl={isMobile ? 0 : 4}
            pr={isMobile ? 0 : 2}
            pt={isMobile ? 2 : 0}
          >
            <Grid
              container
              width={isMobile ? "60vw" : "40vw"}
              height={isMobile ? "50vh" : "60vh"}
              sx={{
                background: "rgba(202, 202, 202, 0.6)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {coordinates.map((coor) => (
                <Grid
                  item
                  xs={1.2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRight={
                    coor.coordinate % 10 == 0 ? "none" : "1px solid #fff"
                  }
                  borderTop={coor.coordinate <= 10 ? "none" : "1px solid #fff"}
                  sx={{
                    background: "rgba(202, 202, 202, 0.6)",
                    cursor: "pointer",
                  }}
                >
                  {coor.typeOfTreasure ? (
                    <img
                      src={
                        treasures.find(
                          (treasure) => treasure.type === coor.typeOfTreasure
                        ).img
                      }
                      alt="Coordinate"
                      width={isMobile ? "20px" : "25px"}
                    />
                  ) : (
                    ""
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Button
        sx={{
          background: "linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)",
          py: 0.5,
          px: 12,
          mb: 3,
          color: "#2E2E2E",
          fontFamily: "'Luckiest Guy', cursive",
          fontStyle: "normal",
          fontWeight: "300",
          fontSize: "24px",
          borderRadius: "12px",
        }}
      >
        Waiting for opponent...
      </Button>
    </LayoutGame>
  );
};

export default BeforeStart;
