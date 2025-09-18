import React, { useState } from "react";
import s from "./style.module.scss";
import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";

export default function List() {
  const [todos, setTodos] = useState([
    { id: 1, title: "hello world", about: "sfsf" },
    { id: 2, title: "hello world2", about: "sfsf" },
    { id: 3, title: "hello world3", about: "sfsf" },
  ]);

  const [todoTitle, setTodoTitle] = useState("");
  const [todoAbout, setTodoAbout] = useState("");

  return (
    <div className="container">
      <ToDoForm
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoAbout={todoAbout}
        setTodoAbout={setTodoAbout}
      />
      <ToDoList todos={todos} />
    </div>
  );
}
