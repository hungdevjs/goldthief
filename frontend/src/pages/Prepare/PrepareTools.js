import { useState } from "react";
import { useSnackbar } from "notistack";
import { Box, Grid, Typography, Button, CardMedia } from "@mui/material";

import LayoutGame from "../../components/LayoutGame";
import useResponsive from "../../hooks/useResponsive";
import useAppContext from "../../hooks/useAppContext";

const PrepareTools = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [countTools, setCountTools] = useState(0);

  const { isMobile } = useResponsive();
  const { gameState, loadingState, prepareState } = useAppContext();

  const { game, prepareGameTools } = gameState;
  const { setIsLoading } = loadingState;
  const { tools, setTools, setToolsSelected } = prepareState;

  const handleChooseTool = async (toolName) => {
    setIsLoading(true);
    try {
      if (countTools > 2) throw new Error("You can only bring up to 3 tools");

      setTools(
        tools.map((tool) => {
          if (tool.name === toolName)
            return { ...tool, selected: tool.selected + 1 || 1 };
          return tool;
        })
      );

      setCountTools(countTools + 1);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
    setIsLoading(false);
  };

  const handleNextButton = async () => {
    setIsLoading(true);
    try {
      if (countTools < 3) throw new Error("Please choose tools");

      const selectedTools = [];
      for (const tool of tools)
        if (tool.selected)
          for (let i = 0; i < tool.selected; i++) selectedTools.push(tool.name);

      await prepareGameTools({ id: game.id, tools: selectedTools });

      setToolsSelected(
        selectedTools.map((tool) => tools.find((t) => t.name === tool))
      );

      enqueueSnackbar("Success", { variant: "success" });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
    setIsLoading(false);
  };

  return (
    <LayoutGame>
      <Box
        display="flex"
        flexDirection="column"
        width="60vw"
        borderRadius="24px"
        sx={{
          background: "rgba(255, 253, 253, 0.5)",
          px: 3,
          pt: 5,
          pb: 10,
          mb: 5,
        }}
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
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            xs={10}
            p={isMobile ? 1 : 5}
            display="flex"
            justifyContent="center"
            gap="20px"
            alignItems="center"
            sx={{
              background: "rgba(255, 253, 253, 0.5)",
              borderRadius: "12px",
            }}
          >
            {tools.map((tool) => (
              <Grid item xs={2.5} sm={4} md={2.5}>
                <Box
                  width={isMobile ? "60px" : "100px"}
                  height={isMobile ? "60px" : "100px"}
                  position="relative"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  bgcolor={tool.selected ? "#FFE259BF" : "#D9D9D9"}
                  borderRadius="10px"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleChooseTool(tool.name)}
                >
                  <img
                    src={tool.img}
                    alt="Tool"
                    width={isMobile ? "25px" : "50px"}
                  />
                  <Typography
                    position="absolute"
                    top="5px"
                    right="5px"
                    fontSize={isMobile ? "14px" : "16px"}
                  >
                    {tool.selected}
                  </Typography>
                </Box>
              </Grid>
            ))}
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

export default PrepareTools;
