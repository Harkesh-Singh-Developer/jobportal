import React, { useState } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/theme/Theme";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes/Routes";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
