import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F15412",
      contrastText: "rgb(230,230,230)",
    },
    secondary: {
      main: "#6FB2D2",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});
export default theme;
