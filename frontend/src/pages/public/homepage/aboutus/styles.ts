import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Define the theme for the entire website
export const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});