import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, setEditingTodo } from "../features/todo/todoSlice";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

const Todos = () => {
  const { todos } = useSelector((state) => state.todos);

  console.log("todos:", todos);
  const dispatch = useDispatch();
  return (
    <>
      <h3 className="text-2xl my-[30px]">Our Todos</h3>
      <div className="border-2 border-red-300 rounded-md p-3 flex flex-col gap-3">
        {todos.map((todo) => (
          <li
            className="flex gap-3 border-2 border-gray-300 rounded-md items-center justify-between px-3 py-2"
            key={todo.id}
          >
            {todo.text}
            <div className="flex gap-2">
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                <FaRegTrashAlt />
              </button>
              <button onClick={() => dispatch(setEditingTodo(todo.id))}>
                <FiEdit />
              </button>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todos;
