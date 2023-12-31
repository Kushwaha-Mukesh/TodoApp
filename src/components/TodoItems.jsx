import styles from "./TodoItems.module.css";
function TodoItems({ todoitems, handleEdit, edit }) {
  return (
    <>
      {todoitems.map((todoitem) => (
        <div key={todoitem} className={styles.todoItems}>
          <input
            type="text"
            name=""
            id=""
            value={todoitem}
            readOnly={!edit}
            className={styles.inputStyle}
          />
          <button className={styles.edit} onClick={handleEdit}>
            {edit ? "Save" : "Edit"}
          </button>
          <button className={styles.delete}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default TodoItems;
