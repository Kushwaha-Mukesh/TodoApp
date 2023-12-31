import styles from "./AddTodo.module.css";
function AddTodo({ handleTodo, handleChange, newTodo }) {
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
      <input type="date" name="" id="" />
      <button className={styles.addTodoBtn} onClick={(e) => handleTodo(e)}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
