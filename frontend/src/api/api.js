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

export const getCategory = () => {
  console.log("here");
  return axios.get("/krishna/Category");
};

export const addCategory = (todo) => {
  return axios.post("/krishna/Category/add", { todo });
};

export const deleteCategory = (id) => {
  return axios.delete(`/krishna/Category/${id}`);
};

export const editCategory = (id, updatedTodo) => {
  return axios.patch(`/krishna/Category/${id}`, { todo: updatedTodo });
};
