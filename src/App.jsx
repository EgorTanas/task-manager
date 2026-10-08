import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

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

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  }

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <main>
      <h1>Task Manager</h1>

      <p>Total sarcini: {tasks.length}</p>
      <p>Finalizate: {completedTasks}</p>

      <TaskForm onAddTask={addTask} />

      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </main>
  );
}

export default App;