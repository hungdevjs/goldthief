import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Box, Grid, Typography, Button, CardMedia } from "@mui/material";

import LayoutGame from "../../components/LayoutGame";
import useResponsive from "../../hooks/useResponsive";
import useAppContext from "../../hooks/useAppContext";

const Prepare = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [chestChoosing, setChestChoosing] = useState(null);

  const { isMobile } = useResponsive();
  const { gameState, loadingState, prepareState, authState } = useAppContext();

  const { game, prepareGameMap } = gameState;
  const { user } = authState;
  const { setIsLoading } = loadingState;
  const { treasures, setTreasures, coordinates, setCoordinates } = prepareState;

  const handleChooseChest = async (type) => {
    setIsLoading(true);
    try {
      setChestChoosing(type);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
    setIsLoading(false);
  };

  const handleChooseCoordinate = async (coordinate) => {
    setIsLoading(true);
    try {
      if (!chestChoosing) throw new Error("Please choose kind of treasure");
      if (
        coordinates.find((coor) => coor.coordinate === coordinate)
          .typeOfTreasure
      ) {
        setCoordinates(
          coordinates.map((coor) => {
            if (coor.coordinate === coordinate) {
              setTreasures(
                treasures.map((treasure) => {
                  if (treasure.type === coor.typeOfTreasure)
                    return { ...treasure, quantity: treasure.quantity + 1 };
                  return treasure;
                })
              );
              return { ...coor, typeOfTreasure: null };
            }
            return coor;
          })
        );

        setIsLoading(false);
        return;
      }

      if (
        treasures.find((treasure) => treasure.type === chestChoosing).quantity <
        1
      )
        throw new Error("You placed all the treasures");

      setCoordinates(
        coordinates.map((coor) => {
          if (coor.coordinate === coordinate)
            return { coordinate, typeOfTreasure: chestChoosing };
          return coor;
        })
      );

      setTreasures(
        treasures.map((treasure) => {
          if (treasure.type === chestChoosing)
            return { ...treasure, quantity: treasure.quantity - 1 };
          return treasure;
        })
      );
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
    setIsLoading(false);
  };

  const handleNextButton = async () => {
    setIsLoading(true);
    try {
      if (treasures.find((treasure) => treasure.quantity > 0))
        throw new Error("You must place all the treasures");

      const coordinatesfirstTreasure = coordinates
        .filter((coor) => coor.typeOfTreasure === 1)
        .map((coor) => coor.coordinate);
      const coordinatesseondTreasure = coordinates
        .filter((coor) => coor.typeOfTreasure === 2)
        .map((coor) => coor.coordinate);
      const coordinatesthirdTreasure = coordinates
        .filter((coor) => coor.typeOfTreasure === 3)
        .map((coor) => coor.coordinate);

      await prepareGameMap({
        id: game.id,
        coordinates: {
          1: coordinatesfirstTreasure,
          2: coordinatesseondTreasure,
          3: coordinatesthirdTreasure,
        },
      });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
    setIsLoading(false);
  };

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
        <Box
          xs={12}
          p={1}
          mb={2}
          display="flex"
          flexGrow="1"
          direction="row"
          justifyContent="space-between"
        >
          <Typography
            fontFamily="'Luckiest Guy', cursive"
            fontWeight="600"
            fontSize={isMobile ? "16px" : "22px"}
          >
            {game?.host.id === user.id
              ? game.host.username
              : game.joiner.username}
          </Typography>
          <Typography
            fontFamily="'Luckiest Guy', cursive"
            fontWeight="600"
            fontSize={isMobile ? "16px" : "22px"}
          >
            {game?.host.id === user.id
              ? game.joiner.username
              : game.host.username}
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
            {treasures.map((treasure) => (
              <Box
                key={treasure.type}
                width={isMobile ? "60px" : "80px"}
                height={isMobile ? "60px" : "80px"}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bgcolor="#D9D9D9"
                borderRadius="10px"
                sx={{ cursor: "pointer" }}
                onClick={() => handleChooseChest(treasure.type)}
              >
                <img
                  src={treasure.img}
                  alt="Treasure"
                  width={isMobile ? "25px" : "50px"}
                />
                <Typography
                  sx={{
                    color: "#000",
                    fontFamily: "'Luckiest Guy', cursive",
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: isMobile ? "16px" : "20px",
                  }}
                >
                  {treasure.point}
                </Typography>
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
                  key={coor.coordinate}
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
                    cursor: "pointer",
                    background: "rgba(202, 202, 202, 0.6)",
                  }}
                  onClick={() => handleChooseCoordinate(coor.coordinate)}
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
        onClick={() => handleNextButton()}
      >
        Next
      </Button>
    </LayoutGame>
  );
};

export default Prepare;
