import { useState } from "react";
import { nanoid } from "nanoid";
import { FaTrash } from "react-icons/fa";

function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  const addTodo = () => {
    if (!inputValue.trim()) {
      setError("Input boş ola bilməz!");
      return;
    }

    const newTodo = {
      id: nanoid(),
      todoText: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
    setError("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.isCompleted;
    if (filter === "pending") return !todo.isCompleted;
    return true;
  });

  const pendingCount = todos.filter((t) => !t.isCompleted).length;

  return (
    <div className="app-container">
      <h1 className="app-title">Todo App</h1>

      <div className="todo-input-wrapper">
        <input
          className="todo-input"
          placeholder="Add todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-btn" onClick={addTodo}>
          ADD
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="filter-buttons">
        <button className="filter-btn all-btn" onClick={() => setFilter("all")}>
          All Todos
        </button>
        <button
          className="filter-btn completed-btn"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className="filter-btn pending-btn"
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          className="filter-btn clear-btn"
          onClick={() => setTodos([])}
        >
          Clear All
        </button>
      </div>

      <div className="divider"></div>

      <p className="info-text">
        You have <span>{pendingCount}</span> pending todos
      </p>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className={todo.isCompleted ? "completed" : ""}
              onClick={() => toggleTodo(todo.id)}
              style={{ cursor: "pointer" }}
            >
              {todo.todoText}
            </span>
            <button onClick={() => deleteTodo(todo.id)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
