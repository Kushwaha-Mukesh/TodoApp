import { useState } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ handleTodo, handleChange, newTodo, handleDate, date }) {
  return (
    <div className={styles.addTodo}>
      <input
        type="text"
        placeholder="Enter Your todo here..."
        value={newTodo}
        onKeyDown={(e) => handleTodo(e)}
        onChange={(e) => handleChange(e)}
        className={styles.todoInput}
      />
      <input
        type="date"
        name=""
        id=""
        value={date}
        onChange={(e) => handleDate(e)}
      />
      <button className={styles.addTodoBtn} onClick={(e) => handleTodo(e)}>
        <IoMdAddCircle />
      </button>
    </div>
  );
}

export default AddTodo;
