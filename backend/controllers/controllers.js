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
    const id = req.params.id;
    todoModel.deleteTodo(id);
    res.json({ message: "Todo deleted successfully" });
  },

  editTodo: (req, res) => {
    const id = req.params.id;
    const { todo } = req.body;
    todoModel.editTodo(id, todo);
    res.json({ message: "Todo updated Successfully" });
  },
};

module.exports = todoController;
