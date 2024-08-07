import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Modal,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Edit = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <IconButton aria-label="Edit" onClick={handleOpen}>
        <FontAwesomeIcon icon={faEdit} style={{ color: "#8E7DBE" }} />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "85%", md: 600 },
            bgcolor: "#99C1B9",
            borderRadius: 8,
            boxShadow: 24,
            p: 4,
            "& .MuiInputLabel-root": {
              color: "#382961",
            },
            "& .MuiInputBase-input": {
              color: "#382961",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#382961",
              },
              "&:hover fieldset": {
                borderColor: "#382961",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#382961",
              },
            },
          }}
        >
          <TextField
            label="Edita tu tarea"
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <ButtonGroup sx={{ width: "100%" }} fullWidth>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#8E7DBE",
                color: "#FFFFFF",
                "&:hover": { bgcolor: "#D88C9A" },
              }}
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#8E7DBE",
                color: "#FFFFFF",
                "&:hover": { bgcolor: "#D88C9A" },
              }}
            >
              Editar
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </Box>
  );
};

export default Edit;
