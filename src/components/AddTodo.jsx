import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ newTodoItems }) {
  // useRef hook is use to provide a reference to dom element.
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  function handleClick() {
    // current is the method of reference variable i.e todoNameElement and todoDateElement.
    const newTodoItem = todoNameElement.current.value;
    const newTodoDate = todoDateElement.current.value;
    newTodoItems(newTodoItem, newTodoDate);
    //after taking out the value of input and passes to newTodoItem we are making the value of reference variable to empty string.
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
