import axios from 'axios';


export const getTodos = () => {
    return axios.get('/todos');
  };

export const addTodo = (todo) =>{
    return axios.post('/todo', {todo});
}

export const deleteTodo = (index) => {
    return axios.delete(`/todos/${index}`);
  };

export const editTodo = (index, updatedTodo) => {
    return axios.patch(`/todos/${index}`, { todo: updatedTodo });
};