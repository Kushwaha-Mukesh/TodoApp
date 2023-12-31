import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import InfoTodo from "./components/InfoTodo";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [todoitems, setTodoItems] = useState([]);

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function handleTodo(e) {
    if (e.key === "Enter" || e.type === "click") {
      if (newTodo) {
        let newTodoItems = [...todoitems, newTodo];
        setTodoItems(newTodoItems);
        setNewTodo("");
      }
    }
  }

  function handleEdit() {
    setEdit(!edit);
  }

  return (
    <>
      <div className="todoContainer">
        <h1>Todo App</h1>
        <AddTodo
          handleTodo={handleTodo}
          handleChange={handleChange}
          newTodo={newTodo}
        ></AddTodo>
        <p>Todo List</p>
        <InfoTodo todoitems={todoitems}></InfoTodo>
        <TodoItems
          todoitems={todoitems}
          handleEdit={handleEdit}
          edit={edit}
        ></TodoItems>
      </div>
    </>
  );
}

export default App;
