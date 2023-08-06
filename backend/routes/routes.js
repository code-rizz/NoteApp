const express = require("express");
const {
  todoController,
  categoryController,
} = require("../controllers/controllers");

const router = express.Router();

router.get("/:username/:category/todos", todoController.getTodos);
router.post("/:username/:category/todos", todoController.addTodo);
router.delete("/:username/:category/todos/:id", todoController.deleteTodo);
router.patch("/:username/:category/todos/:id", todoController.editTodo);

router.get("/:username/category", categoryController.getCategory);
router.post("/:username/category/add", categoryController.addCategory);
router.delete("/:username/category/:id", categoryController.deleteCategory);
router.patch("/:username/category/:id", categoryController.editCategory);

module.exports = router;
