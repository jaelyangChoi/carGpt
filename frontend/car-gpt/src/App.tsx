import Router from "./router/Router";

import { createTheme, ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";

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
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
