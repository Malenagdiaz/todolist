import { useState } from "react";
import { Box, IconButton, Modal, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { loadTasks, saveTasks } from "../utils/localStorage";

const Delete = ({ taskId, onDelete }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    let tasks = loadTasks();
    tasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(tasks);
    onDelete(taskId);
    handleClose();
  };

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="fa-trash-can"
          style={{ color: "#8E7DBE" }}
        />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#99C1B9",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontFamily: "Indie Flower",
              color: "#382961",
              mb: 2,
              textAlign: "center",
            }}
          >
            ¿Estás segur@ que quieres eliminar esta tarea?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              sx={{
                color: "#382961",
                borderColor: "#382961",
                "&:hover": {
                  borderColor: "#8E7DBE",
                  color: "#8E7DBE",
                },
              }}
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#382961",
                borderColor: "#382961",
                "&:hover": {
                  borderColor: "#8E7DBE",
                  color: "#8E7DBE",
                },
              }}
              onClick={handleDelete}
            >
              Aceptar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Delete;
