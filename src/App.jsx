import { useState } from "react";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskName) {
    if (taskName.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskName,
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <main>
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} />

      <div>
        {tasks.map((task) => (
          <p key={task.id}>
            {task.title}
          </p>
        ))}
      </div>
    </main>
  );
}

export default App;