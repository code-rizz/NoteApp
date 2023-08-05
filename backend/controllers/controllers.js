const todoModel = require("../models/models");

const todoController = {
  getTodos: async (req, res) => {
    const todos = await todoModel.getTodos();
    console.log("controller:");
    console.log(todos);
    res.json(todos);
  },

  addTodo: (req, res) => {
    const { todo } = req.body;
    if (!todo) {
      return res.status(400).json({ error: "Todo is required" });
    }
    todoModel.addTodo(todo);
    res.status(201).json({ message: "Todo added successfully" });
  },

  deleteTodo: (req, res) => {
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= todoModel.getTodos().length) {
      return res.status(400).json({ error: "Invalid index" });
    }

    todoModel.deleteTodo(index);
    res.json({ message: "Todo deleted successfully" });
  },

  editTodo: (req, res) => {
    const index = parseInt(req.params.index);
    const { todo } = req.body;
    if (
      isNaN(index) ||
      index < 0 ||
      index >= todoModel.getTodos().length ||
      !todo
    ) {
      return res.status(400).json({ error: "Invalid index or todo data" });
    }

    todoModel.editTodo(index, todo);
    res.json({ message: "Todo updated Successfully" });
  },
};

module.exports = todoController;
