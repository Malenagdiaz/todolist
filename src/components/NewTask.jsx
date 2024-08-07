import { Box, TextField, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Filter from "../components/Filter";

const NewTask = () => {
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
          height: 100,
          backgroundColor: "#D88C9A",
          borderRadius: "20px",
          padding: "0 20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: { xs: "5px", md: "10px" },
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Añada su tarea"
            sx={{
              flex: 1,
              fontFamily: "Indie Flower",
              backgroundColor: "#fcfcda",
              borderRadius: "10px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#99C1B9",
                },
                "&:hover fieldset": {
                  borderColor: "#99C1B9",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#99C1B9",
                },
              },
              "& input": {
                color: "#99C1B9",
                fontWeight: "bolder",
              },
            }}
          />
          <IconButton
            sx={{
              padding: "6px 8px",
              backgroundColor: "#99C1B9",
              "&:hover": {
                backgroundColor: "#35695e",
              },
            }}
          >
            <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
          </IconButton>
          <Filter />
        </Box>
      </Box>
    </Box>
  );
};

export default NewTask;
