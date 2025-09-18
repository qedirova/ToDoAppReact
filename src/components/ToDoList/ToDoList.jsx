import s from "./style.module.scss";

export default function ToDoList({ todos }) {
  return (
    <div className={s.wrapper}>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}
