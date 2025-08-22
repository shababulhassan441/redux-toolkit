import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";

function App() {
  const currentTodo = useSelector((state) => state.editingTodoId);

  return (
    <>
      <h1>Learn Reduc Toolkit</h1>
      {console.log("editingTodoId:", currentTodo)}
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;
