import React from "react";
import "./App.css";
import Router from "./Router";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'HDharmony', sans-serif",
  },
  palette: {
    primary: {
      main: "#00287A",
    },
    secondary: {
      main: "#8093BC",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
