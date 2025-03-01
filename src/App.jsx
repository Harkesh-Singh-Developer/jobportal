import React from "react";
import Login from "./components/Login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/theme/Theme";
function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
