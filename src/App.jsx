import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import InfoTodo from "./components/InfoTodo";
import "./App.css";

function App() {
  // todoitems state hold todo list of todo items.
  const [todoitems, setTodoItems] = useState([]);

  // newTodoItems function takes todo name and todo date from add todo components and add to todoitems variable.
  function newTodoItems(newTodoName, newTodoDate) {
    if (newTodoName) {
      const newTodoItem = {
        todoName: newTodoName,
        todoDate: newTodoDate,
      };
      // as todo items depends on previous state of todoitems so we pass function to setTodoItems
      setTodoItems((currTodoItems) => [...currTodoItems, newTodoItem]);
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
        <AddTodo newTodoItems={newTodoItems}></AddTodo>
        <p className="todolist">Todo List</p>
        <InfoTodo todoitems={todoitems}></InfoTodo>
        <TodoItems todoitems={todoitems} onDelete={handleDelete}></TodoItems>
      </div>
    </>
  );
}

export default App;
