let todos = [];

const todoModel = {
    getTodos: () => todos,
    addTodo: (todo) => todos.push(todo),
    deleteTodo: (index) => todos.splice(index, 1),
    editTodo: (index,newTodo)=>{
        if (index < 0 || index >= todos.length) {
            throw new Error('Invalid index');
        }
        todos[index] = newTodo;
        return todos[index];
    },
};

module.exports = todoModel;

