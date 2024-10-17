const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => console.log("Connected!"));

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from server!!!");
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
