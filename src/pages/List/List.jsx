import { useEffect, useState } from "react";
import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";
import { notifyError, notifySuccess } from "../../utils/notifications";

export default function List() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todosList");
    return saved ? JSON.parse(saved) : [];
  });

  const [todoTitle, setTodoTitle] = useState("");
  const [todoAbout, setTodoAbout] = useState("");

  function addTodo(e) {
    e.preventDefault();

    if (todoTitle.length < 5) {
      notifyError("Title is required");
      return;
    }

    setTodos([
      ...todos,
      { id: Date.now(), title: todoTitle, about: todoAbout },
    ]);

    notifySuccess("Todo successfully added!");
    setTodoTitle("");
    setTodoAbout("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    if (todos) {
      localStorage.setItem("todosList", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="container">
      <ToDoForm
        addTodo={addTodo}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoAbout={todoAbout}
        setTodoAbout={setTodoAbout}
      />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
