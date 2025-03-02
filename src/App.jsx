import React, { useState } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/theme/Theme";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes/Routes";
import { AuthProvider } from "./components/context/Auth";
function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;
