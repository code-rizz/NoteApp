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
    await todoModel.addTodo(category, todo, username);
    res.status(201).json(await todoModel.getTodos(category, username));
  },

  deleteTodo: async (req, res) => {
    const username = res.locals.user.username;
    const category = req.params.category;
    const id = req.params.id;
    await todoModel.deleteTodo(category, id, username);
    res.json(await todoModel.getTodos(category, username));
  },

  editTodo: async (req, res) => {
    const username = res.locals.user.username;
    const category = req.params.category;
    const id = req.params.id;
    const { todo } = req.body;
    await todoModel.editTodo(category, todo, username);
    res.json(await todoModel.getTodos(category, username));
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
    await categoryModel.addcategory(username, todo);
    res.status(201).json(await categoryModel.getcategory(username));
  },

  deleteCategory: async (req, res) => {
    const id = req.params.id;
    await categoryModel.deletecategory(id);
    res.json({ message: "Todo deleted successfully" });
  },

  editCategory: async (req, res) => {
    const id = req.params.id;
    const { todo } = req.body;
    await categoryModel.editcategory(id, todo);
    res.json({ message: "Todo updated Successfully" });
  },
};

module.exports = { todoController, categoryController };
