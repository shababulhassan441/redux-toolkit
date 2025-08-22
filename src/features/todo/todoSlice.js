import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "Learn Redux" }],
  editingTodoId: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const exiistingTodo = state.todos.find((todo) => todo.id === id);
      if (exiistingTodo) {
        exiistingTodo.text = text;
      }
    },
    setEditingTodo: (state, action) => {
      state.editingTodoId = action.payload;
    },
    clearEditingTodo: (state) => {
      state.editingTodoId = null;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  setEditingTodo,
  clearEditingTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
