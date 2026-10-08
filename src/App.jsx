import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <main className="app">
      <h1>Task Manager</h1>

      <div className="stats">
        <span>Total sarcini: {tasks.length}</span>
        <span>Finalizate: {completedTasks}</span>
      </div>

      <TaskForm onAddTask={addTask} />

      <div className="filters">
        <button onClick={() => setFilter("all")}>
          Toate
        </button>

        <button onClick={() => setFilter("active")}>
          Active
        </button>

        <button onClick={() => setFilter("completed")}>
          Finalizate
        </button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">
            Nu există sarcini momentan.
          </p>
        ) : (
          filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default App;