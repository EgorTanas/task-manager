function Task({ task, onToggle, onDelete }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.title}
      </span>

      <button onClick={() => onDelete(task.id)}>
        Șterge
      </button>
    </div>
  );
}

export default Task;