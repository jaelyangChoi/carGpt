import React from "react";
import "./App.css";
import Router from "./Router";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  // typography: {
  //   fontFamily: 현대
  // }
  palette: {
    primary: {
      main: "#00287A",
    },
    secondary: {
      main: "#00287A",
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
