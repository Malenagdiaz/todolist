import { createTheme } from "@mui/material/styles";
import "@fontsource/margarine";
import "@fontsource/indie-flower";

const lightTheme = createTheme({
  typography: {
    fontFamily: "Indie Flower, Margarine, sans-serif",
  },
  palette: {
    mode: "light",
    background: {
      default: "#F1E3D3",
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: "Indie Flower, Margarine, sans-serif",
  },
  palette: {
    mode: "dark",
    background: {
      default: "#774e6d",
    },
  },
});

export { lightTheme, darkTheme };
