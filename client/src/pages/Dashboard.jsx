import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    due_date: "",
  });

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setForm({
        title: "",
        description: "",
        priority: "Medium",
        due_date: "",
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <div>
      <Navbar />

      <div className="container">
        <h1 style={{ marginBottom: "20px" }}>
          TaskFlow Dashboard
        </h1>

        <div className="stats-grid">
          <StatsCard
            title="Total Tasks"
            value={tasks.length}
          />

          <StatsCard
            title="Completed Tasks"
            value={completedTasks}
          />

          <StatsCard
            title="Pending Tasks"
            value={pendingTasks}
          />
        </div>

        <div
          className="card"
          style={{ marginBottom: "20px" }}
        >
          <h2>Add New Task</h2>

          <TaskForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <h2>My Tasks</h2>

        <div className="task-grid">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;