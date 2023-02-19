import { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, CardMedia } from "@mui/material";

import LayoutGame from "../../components/LayoutGame";
import useResponsive from "../../hooks/useResponsive";
import useAppContext from "../../hooks/useAppContext";

const BeforeStart = () => {
  const { isMobile } = useResponsive();
  const { gameState, authState, prepareState } = useAppContext();

  const { game, prepare } = gameState;
  const { user } = authState;
  const { treasures, coordinates, setCoordinates, tools } = prepareState;

  const handleLoadPrepare = async () => {
    const coors = Object.keys(prepare?.map).map((type) => ({
      type,
      coordinates: prepare?.map[Number(type)],
    }));

    const newCoordinates = coordinates?.map((coor) => {
      for (const c of coors) {
        if (c.coordinates.includes(coor.coordinate))
          return { ...coor, typeOfTreasure: Number(c.type) };
      }
      return coor;
    });

    setCoordinates(newCoordinates);
  };

  useEffect(() => {
    handleLoadPrepare();
  }, []);

  return (
    <LayoutGame>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        width={isMobile ? "100vw" : "60vw"}
        borderRadius="24px"
        sx={{ background: "rgba(255, 253, 253, 0.5)", px: 2, py: 4, mb: 3 }}
      >
        <Box xs={12} p={1} mb={2}>
          <Typography
            fontFamily="'Luckiest Guy', cursive"
            fontWeight="600"
            fontSize={isMobile ? "16px" : "22px"}
          >
            {game?.host.id === user.id
              ? game.host.username
              : game.joiner.username}
          </Typography>
        </Box>
        <Grid
          container
          maxHeight="60vh"
          display="flex"
          flexDirection={isMobile ? "row" : "column"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            xs={12}
            sm={3}
            display="flex"
            flexDirection={isMobile ? "row" : "column"}
            justifyContent="center"
            gap="20px"
          >
            {(game?.host.username === user?.username
              ? game.host
              : game.joiner
            )?.tools
              .map((tool) => tools.find((t) => t.name === tool))
              .map((tool) => (
                <Box
                  width={isMobile ? "60px" : "80px"}
                  height={isMobile ? "60px" : "80px"}
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
            pl={isMobile ? 0 : 2}
            pr={isMobile ? 0 : 2}
            pt={isMobile ? 2 : 0}
            display="flex"
            justifyContent="center"
          >
            <Grid
              container
              width={isMobile ? "70vw" : "40vw"}
              height={isMobile ? "50vh" : "55vh"}
              sx={{
                background: "rgba(202, 202, 202, 0.6)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {coordinates.map((coor) => (
                <Grid
                  item
                  minHeight="30px"
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
          fontSize: isMobile ? "14px" : "24px",
          borderRadius: "12px",
        }}
      >
        Waiting for opponent...
      </Button>
    </LayoutGame>
  );
};

export default BeforeStart;
