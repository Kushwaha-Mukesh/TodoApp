import styles from "./TodoItems.module.css";
import { MdDelete } from "react-icons/md";

function TodoItems({ todoitems, onDelete }) {
  // here is component return the todo list to UI component.
  return (
    <>
      {todoitems.map((todoitem) => (
        <div key={todoitem.todoName} className={styles.todoItems}>
          <p className={styles.listTodo}>{todoitem.todoName}</p>
          <p className={styles.listDate}>{todoitem.todoDate}</p>
          <button
            className={styles.delete}
            onClick={() => onDelete(todoitem.todoName)}
          >
            <MdDelete />
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoItems;
