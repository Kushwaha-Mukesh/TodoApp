import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const [todoitems, setTodoItems] = useState([]);
  function handleChange(e) {
    if (e.key === "Enter") {
      let newTodo = e.target.value;
      let newTodoItems = [...todoitems, newTodo];
      setTodoItems(newTodoItems);
      e.target.value = "";
    }
  }

  return (
    <>
      <div className="todoContainer">
        <h1>Todo App</h1>
        <AddTodo handleChange={handleChange}></AddTodo>
        <p>Todo List</p>
        <TodoItems todoitems={todoitems}></TodoItems>
      </div>
    </>
  );
}

export default App;
