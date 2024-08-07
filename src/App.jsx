import React, { useState } from "react";
import { ThemeProvider, Box } from "@mui/material";
import { lightTheme, darkTheme } from "../src/theme/theme";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasklist from "./components/Tasklist";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor:
            theme === "dark"
              ? darkTheme.palette.background.default
              : lightTheme.palette.background.default,
          transition: "background-color 0.3s ease",
        }}
      >
        <Header theme={theme} setTheme={setTheme} />
        <NewTask />
        <Tasklist />
      </Box>
    </ThemeProvider>
  );
}

export default App;
