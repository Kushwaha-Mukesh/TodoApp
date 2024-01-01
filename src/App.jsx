import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import InfoTodo from "./components/InfoTodo";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoitems, setTodoItems] = useState([]);
  const [date, setDate] = useState("");

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleTodo(e) {
    if (e.key === "Enter" || e.type === "click") {
      if (newTodo) {
        const todolist = {
          todoName: newTodo,
          todoDate: date,
        };
        let newTodoItems = [...todoitems, todolist];
        setTodoItems(newTodoItems);
        setNewTodo("");
        setDate("");
      }
    }
  }

  function handleDelete(deleteItem) {
    const newTodoItems = todoitems.filter(
      (todoitem) => todoitem.todoName !== deleteItem
    );
    setTodoItems(newTodoItems);
  }

  return (
    <>
      <div className="todoContainer">
        <h1>Todo App</h1>
        <AddTodo
          handleTodo={handleTodo}
          handleChange={handleChange}
          newTodo={newTodo}
          handleDate={handleDate}
          date={date}
        ></AddTodo>
        <p className="todolist">Todo List</p>
        <InfoTodo todoitems={todoitems}></InfoTodo>
        <TodoItems todoitems={todoitems} onDelete={handleDelete}></TodoItems>
      </div>
    </>
  );
}

export default App;
