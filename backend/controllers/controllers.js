const { todoModel, categoryModel } = require("../models/models");

const todoController = {
  getTodos: async (req, res) => {

    const username = res.locals.user.username;
    const category = req.params.category;
    const todos = await todoModel.getTodos(category, username);
    res.json(todos);
  },

  addTodo: async (req, res) => {
    const username = res.locals.user.username;
    const category = req.params.category;
    const { todo } = req.body;
    if (!todo) {
      return res.status(400).json({ error: "Todo is required" });
    }
    todoModel.addTodo(category, todo, username);
    res.status(201).json(await todoModel.getTodos(category, username));
  },

  deleteTodo: (req, res) => {
    const username = res.locals.user.username;
    const category = req.params.category;
    const id = req.params.id;
    todoModel.deleteTodo(category, id, username);
    res.json({ message: "Todo deleted successfully" });
  },

  editTodo: (req, res) => {
    const username = res.locals.user.username;
    const category = req.params.category;
    const id = req.params.id;
    const { todo } = req.body;
    todoModel.editTodo(category, id, todo, username);
    res.json({ message: "Todo updated Successfully" });
  },
};

const categoryController = {
  getCategory: async (req, res) => {
    const username = res.locals.user.username;
    const todos = await categoryModel.getcategory(username);
    res.json(todos);
  },

  addCategory: async (req, res) => {
    const username = res.locals.user.username;
    const { todo } = req.body;
    if (!todo) {
      return res.status(400).json({ error: "Todo is required" });
    }
    categoryModel.addcategory(username, todo);
    res.status(201).json(await categoryModel.getcategory(username));
  },

  deleteCategory: (req, res) => {
    const id = req.params.id;
    categoryModel.deletecategory(id);
    res.json({ message: "Todo deleted successfully" });
  },

  editCategory: (req, res) => {
    const id = req.params.id;
    const { todo } = req.body;
    categoryModel.editcategory(id, todo);
    res.json({ message: "Todo updated Successfully" });
  },
};

module.exports = { todoController, categoryController };
