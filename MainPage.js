import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainPage.css";

const MainPage = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get")
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, []);
  
  const addTodo = () => {
    if (!task) return;

    axios.post("http://localhost:5000/add", { task })
      .then(res => {
        setTodos([...todos, res.data]);
        setTask("");
      })
      .catch(err => console.log(err));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h2>Todo List</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.task}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
