import { Box, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Mode = ({ theme, setTheme }) => {
  const isDarkMode = theme === "dark";

  const handleToggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <IconButton
        onClick={handleToggleTheme}
        sx={{
          display: isDarkMode ? "block" : "none",
          transition: "opacity 0.3s ease",
          opacity: isDarkMode ? 1 : 0,
          color: "#F1E3D3",
          fontSize: 30,
        }}
      >
        <FontAwesomeIcon icon={faSun} />
      </IconButton>
      <IconButton
        onClick={handleToggleTheme}
        sx={{
          display: isDarkMode ? "none" : "block",
          transition: "opacity 0.3s ease",
          opacity: isDarkMode ? 0 : 1,
          color: "#F1E3D3",
          fontSize: 30,
        }}
      >
        <FontAwesomeIcon icon={faMoon} />
      </IconButton>
    </Box>
  );
};

export default Mode;
