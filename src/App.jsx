import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import InfoTodo from "./components/InfoTodo";
import "./App.css";

function App() {
  const [todoitems, setTodoItems] = useState([]);

  function newTodoItems(newTodoName, newTodoDate) {
    if (newTodoName) {
      console.log(`Todo is ${newTodoName} and date is ${newTodoDate}`);
      const newTodoItem = {
        todoName: newTodoName,
        todoDate: newTodoDate,
      };
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
