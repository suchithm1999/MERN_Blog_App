const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.route");

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => console.log("Connected!"));

const app = express();

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from server!!!");
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
