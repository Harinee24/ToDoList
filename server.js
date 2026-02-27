const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/todoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const todoSchema = new mongoose.Schema({
  task: String,
});

const Todo = mongoose.model("Todo", todoSchema);

app.post("/add", async (req, res) => {
  const newTodo = new Todo({ task: req.body.task });
  await newTodo.save();
  res.json(newTodo);
});

app.get("/get", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.delete("/delete/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
