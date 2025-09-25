import React, { useState } from "react";
import s from "./style.module.scss";
import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";

export default function List() {
  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");
  const [todoAbout, setTodoAbout] = useState("");

  return (
    <div className="container">
      <div className={s.wrapper}>
        <ToDoForm
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          todoAbout={todoAbout}
          setTodoAbout={setTodoAbout}
        />
        <ToDoList todos={todos} />
      </div>
    </div>
  );
}
