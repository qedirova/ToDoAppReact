import s from "./style.module.scss";
import { GrClose } from "react-icons/gr";

export default function ToDoList({ todos }) {
  return (
    <div className={s.wrapper}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className={s.card}>
            <div className={s.content}>
              <h1>{todo.title}</h1>
              <p>{todo.about}</p>
            </div>
            <button className={s.btn}>
              <GrClose size={15} color="#FF8303" />
            </button>
          </div>
        ))
      ) : (
        <h1 className={s.noTasks}>No tasks</h1>
      )}
    </div>
  );
}
