import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  clearEditingTodo,
  updateTodo,
} from "../features/todo/todoSlice";
const AddTodos = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { todos, editingTodoId } = useSelector((state) => state.todos);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editingTodoId) {
      dispatch(updateTodo({ id: editingTodoId, text: input }));
      dispatch(clearEditingTodo());
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  useEffect(() => {
    if (editingTodoId) {
      const todoToEdit = todos.find((todo) => todo.id === editingTodoId);
      if (todoToEdit) {
        setInput(todoToEdit.text);
      } else {
        setInput("");
      }
    }
  }, [editingTodoId]);
  return (
    <form className="my-[50px]" onSubmit={addTodoHandler}>
      <input
        className="border-2 border-gray-300 rounded-md p-2 "
        type="text"
        placeholder="Enter Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">{editingTodoId ? "update" : "submit"}</button>
    </form>
  );
};

export default AddTodos;
