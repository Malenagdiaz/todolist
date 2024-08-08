import { Box, Typography, Checkbox } from "@mui/material";
import Edit from "./Edit";
import Delete from "./Delete";

const TaskList = ({ tasks, filter, toggleComplete, setTasks }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Todas") return true;
    if (filter === "Completas") return task.completed;
    if (filter === "Incompletas") return !task.completed;
    return false;
  });

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEdit = (updatedTasks) => {
    setTasks(updatedTasks);
  };

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
          {filteredTasks.length === 0 ? (
            <Typography
              sx={{
                fontSize: "18px",
                color: "#F1E3D3",
                fontStyle: "italic",
                fontFamily: "Indie Flower",
                textAlign: "center",
                width: "100%",
              }}
            >
              No hay tareas pendientes aún
            </Typography>
          ) : (
            filteredTasks.map((task) => (
              <Box
                key={task.id}
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
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
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
                    color: task.completed ? "#D8D8D8" : "#8E7DBE",
                    textDecoration: task.completed ? "line-through" : "none",
                    opacity: task.completed ? 0.6 : 1,
                    marginLeft: "10px",
                  }}
                >
                  {task.text}
                </Typography>
                <Edit taskId={task.id} onEdit={handleEdit} />
                <Delete taskId={task.id} onDelete={handleDelete} />
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default TaskList;
