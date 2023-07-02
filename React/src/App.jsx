import { useEffect, useState } from "react";
//import "./App.css";

function App() {
  // State
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  // Events
  function addTodo(event) {
    if (!task) {
      event.preventDefault();
      return;
    }
    // if (task === "") return;
    event.preventDefault();
    const next = [...todos, task];
    setTodos(next);
    localStorage.setItem("todos", JSON.stringify(next));
    setTask("");
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default App;
