import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { AppContextProvider } from "./contexts/app.context";

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ThemeProvider theme={theme}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ThemeProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </AppContextProvider>
);

reportWebVitals();
