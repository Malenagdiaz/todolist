import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Filter = () => {
  return (
    <Box sx={{ minWidth: { xs: 100, md: 120 } }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            fontFamily: "Indie Flower",
            color: "#99C1B9",
            "&.Mui-focused": {
              color: "#99C1B9",
            },
            "&.MuiInputLabel-shrink": {
              color: "#99C1B9",
            },
          }}
        >
          Tareas
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Tareas"
          sx={{
            backgroundColor: "#fcfcda",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#99C1B9",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#99C1B9",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#99C1B9",
            },
            "& .MuiSelect-icon": {
              color: "#99C1B9",
            },
            "& .MuiInputBase-input": {
              color: "#99C1B9",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#fcfcda",
                "& .MuiMenuItem-root": {
                  fontFamily: "Indie Flower",
                  color: "#99C1B9",
                  "&:hover": {
                    backgroundColor: "#ffe6e9",
                  },
                },
              },
            },
          }}
        >
          <MenuItem
            value="Todas"
            sx={{ fontFamily: "Indie Flower", color: "#99C1B9" }}
          >
            Todas
          </MenuItem>
          <MenuItem
            value="Completas"
            sx={{ fontFamily: "Indie Flower", color: "#99C1B9" }}
          >
            Completas
          </MenuItem>
          <MenuItem
            value="Incompletas"
            sx={{ fontFamily: "Indie Flower", color: "#99C1B9" }}
          >
            Incompletas
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
