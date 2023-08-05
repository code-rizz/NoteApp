const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Item = new mongoose.model("Item", itemSchema);

const todoModel = {
  getTodos: async () => {
    const todos = await Item.find({}, { _id: 0, __v: 0 });
    let arr = todos.map((todo) => todo.name);
    console.log(arr);
    return arr;
  },
  addTodo: (todo) => {
    const newItem = new Item({ name: todo });
    newItem.save();
  },
  deleteTodo: (index) => {
    if (index < 0 || index >= todos.length) {
      throw new Error("Invalid index");
    }
    todos.splice(index, 1);
  },
  editTodo: (index, newTodo) => {
    if (index < 0 || index >= todos.length) {
      throw new Error("Invalid index");
    }
    todos[index] = newTodo;
    return todos[index];
  },
};

module.exports = todoModel;
