import styles from "./AddTodo.module.css";
function AddTodo({ handleChange }) {
  return (
    <div className={styles.addTodo}>
      <input
        type="text"
        placeholder="Enter Your todo here..."
        onKeyDown={(e) => handleChange(e)}
      />
      <button>Add Todo</button>
    </div>
  );
}

export default AddTodo;
