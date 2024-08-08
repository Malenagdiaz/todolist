import { useState, useEffect } from "react";
import { loadTasks, saveTasks } from "../src/utils/localStorage";
import { ThemeProvider, Box } from "@mui/material";
import { lightTheme, darkTheme } from "../src/theme/theme";
import Header from "../src/components/Header";
import NewTask from "../src/components/NewTask";
import TaskList from "../src/components/Tasklist";

function App() {
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("Todas");
  const [tasks, setTasks] = useState(loadTasks());

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

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
        <NewTask setTasks={setTasks} setFilter={setFilter} />
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          filter={filter}
          setTasks={setTasks}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
