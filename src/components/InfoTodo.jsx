import styles from "./InfoTodo.module.css";
function InfoTodo({ todoitems }) {
  return (
    <>
      {todoitems.length === 0 && (
        <div className={styles.infoTodo}>Add your Todo😀</div>
      )}
    </>
  );
}

export default InfoTodo;
