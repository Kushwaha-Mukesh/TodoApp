import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ newTodoItems }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  function handleClick() {
    const newTodoItem = todoNameElement.current.value;
    const newTodoDate = todoDateElement.current.value;
    newTodoItems(newTodoItem, newTodoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  }
  return (
    <div className={styles.addTodo}>
      <input
        type="text"
        placeholder="Enter Your todo here..."
        ref={todoNameElement}
        className={styles.todoInput}
      />
      <input type="date" name="" id="" ref={todoDateElement} />
      <button className={styles.addTodoBtn} onClick={handleClick}>
        <IoMdAddCircle />
      </button>
    </div>
  );
}

export default AddTodo;
