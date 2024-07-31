import { Box, Typography, Icon } from "@mui/material";
import Background from "../assets/header.png";
import TaskIcon from "../assets/task-icon.png";

const Header = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "70%" },
        height: { xs: 80, md: 100 },
        borderRadius: "0 0 20px 20px",
        overflow: "hidden",
        margin: "0 auto",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 20, md: 50 },
          color: "#F1E3D3",
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
    </Box>
  );
};

export default Header;
