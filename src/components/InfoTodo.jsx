import styles from "./InfoTodo.module.css";
function InfoTodo({ todoitems }) {
  // if ther is noitems in todoitems then this component return a message to UI.
  return (
    <>
      {todoitems.length === 0 && (
        <div className={styles.infoTodo}>Add your Todo😀</div>
      )}
    </>
  );
}

export default InfoTodo;
