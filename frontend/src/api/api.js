import axios from "axios";

export const getTodos = () => {
  return axios.get("/todos");
};

export const addTodo = (todo) => {
  return axios.post("/todo", { todo });
};

export const deleteTodo = (id) => {
  return axios.delete(`/todos/${id}`);
};

export const editTodo = (id, updatedTodo) => {
  return axios.patch(`/todos/${id}`, { todo: updatedTodo });
};
