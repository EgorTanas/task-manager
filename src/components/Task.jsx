function Task({ task, onToggle, onDelete }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span
        className="task-title"
        style={{
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.title}
      </span>

      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        Șterge
      </button>
    </div>
  );
}

export default Task;