import React from "react";
import { Box, Typography, Icon } from "@mui/material";
import Background from "../assets/header.png";
import TaskIcon from "../assets/task-icon.png";
import Mode from "../components/Mode";

const Header = ({ theme, setTheme }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "30px 20px",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 30, md: 45 },
          color: "#F1E3D3",
          fontFamily: "Margarine",
          display: "flex",
          alignItems: "center",
        }}
      >
        Lluvia de tareas
        <Icon
          component="img"
          src={TaskIcon}
          alt="Task Icon"
          sx={{ width: 53, height: 53, marginLeft: 1 }}
        />
      </Typography>
      <Mode theme={theme} setTheme={setTheme} />
    </Box>
  );
};

export default Header;
