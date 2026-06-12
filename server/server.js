const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Database Connection
require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("TaskFlow Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});