import React from "react";
import s from "./style.module.scss";
import { IoAddOutline } from "react-icons/io5";
export default function ToDoForm({
  todoTitle,
  setTodoTitle,
  todoAbout,
  setTodoAbout,
}) {
  return (
    <form className={s.wrapper}>
      <div className={s.inputs}>
        <input
          type="text"
          placeholder="Title..."
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="About..."
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </div>
      <button className={s.btn}>
        <IoAddOutline size={50} color="#FF8303" />
      </button>
    </form>
  );
}
