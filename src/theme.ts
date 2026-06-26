import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#d4af37",
    },

    background: {
      default: "#0b0f19",
      paper: "#121826",
    },
  },

  typography: {
    fontFamily:
      "'Inter', sans-serif",
  },
});
export default theme;