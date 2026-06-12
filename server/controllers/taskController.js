const db = require("../config/db");

// Create Task
const createTask = (req, res) => {
  const { title, description, priority, due_date } = req.body;

  db.query(
    "INSERT INTO tasks(title,description,priority,due_date,user_id) VALUES(?,?,?,?,?)",
    [title, description, priority, due_date, req.user.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.status(201).json({
        message: "Task Created Successfully",
      });
    }
  );
};

// Get Tasks
const getTasks = (req, res) => {
  db.query(
    "SELECT * FROM tasks WHERE user_id=?",
    [req.user.id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.status(200).json(result);
    }
  );
};

// Update Task
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, due_date } = req.body;

  db.query(
    `UPDATE tasks 
     SET title=?, description=?, status=?, priority=?, due_date=? 
     WHERE id=? AND user_id=?`,
    [
      title,
      description,
      status,
      priority,
      due_date,
      id,
      req.user.id,
    ],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Task Updated Successfully",
      });
    }
  );
};

// Delete Task
const deleteTask = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM tasks WHERE id=? AND user_id=?",
    [id, req.user.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Task Deleted Successfully",
      });
    }
  );
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};