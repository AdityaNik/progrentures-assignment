const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

mongoose.connect("mongodb://localhost:27017/", { dbName: "TodoApp" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
