function TaskForm({
  form,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Task Title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        name="due_date"
        value={form.due_date}
        onChange={handleChange}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;