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
    const todos = await Item.find({}, { __v: 0 });
    return todos;
  },
  addTodo: (todo) => {
    const newItem = new Item({ name: todo });
    newItem.save();
  },
  deleteTodo: async (id) => {
    try {
      await Item.findByIdAndDelete({ _id: id });
    } catch (error) {
      console.log(error);
    }
  },
  editTodo: async (id, newTodo) => {
    try {
      console.log(id, newTodo);
      const update = await Item.updateOne(
        { _id: id },
        { $set: { name: newTodo } }
      );
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = todoModel;
