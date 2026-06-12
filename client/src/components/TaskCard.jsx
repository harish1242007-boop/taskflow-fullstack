function TaskCard({ task, onDelete }) {
  const getPriorityColor = () => {
    if (task.priority === "High") return "#ef4444";
    if (task.priority === "Medium") return "#f59e0b";
    return "#10b981";
  };

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{task.title}</h3>

        <span
          style={{
            background: getPriorityColor(),
            color: "white",
            padding: "5px 10px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          {task.priority}
        </span>
      </div>

      <p style={{ marginTop: "10px" }}>
        {task.description}
      </p>

      <p style={{ marginTop: "10px" }}>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Due Date:</strong>{" "}
        {new Date(task.due_date).toLocaleDateString()}
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button>
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          style={{
            background: "#dc2626",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;