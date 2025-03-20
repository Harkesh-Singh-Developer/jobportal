import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#39c9be",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Arial", sans-serif`,
    body2: { fontSize: "0.8rem" },
    h5: {
      fontSize: "1.1rem",
      letterSpacing: "0.5px",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "bold",
      letterSpacing: "0.3px",
    },
  },
});
export default theme;
