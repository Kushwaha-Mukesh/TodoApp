import styles from "./TodoItems.module.css";
function TodoItems({ todoitems }) {
  return (
    <>
      {todoitems.map((todoitem) => (
        <div key={todoitem} className={styles.todoItems}>
          <p>{todoitem}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </>
  );
}

export default TodoItems;
