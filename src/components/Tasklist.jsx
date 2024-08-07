import { Box, Typography, Checkbox } from "@mui/material";
import Edit from "./Edit";
import Delete from "./Delete";

const Tasklist = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: 850 },
          backgroundColor: "#D88C9A",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#fcfcda",
              borderRadius: "10px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Checkbox
              sx={{
                color: "#8E7DBE",
                "&.Mui-checked": {
                  color: "#99C1B9",
                },
              }}
            />
            <Typography
              sx={{
                flex: 1,
                fontSize: "16px",
                fontWeight: "bold",
                color: "#8E7DBE",
                marginLeft: "10px",
              }}
            >
              Tareita
            </Typography>
            <Edit />
            <Delete />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tasklist;
