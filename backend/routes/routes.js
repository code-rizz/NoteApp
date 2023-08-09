const express = require("express");
const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const {
  todoController,
  categoryController,
} = require("../controllers/controllers");



const router = express.Router();
router.use(userVerification);

// router.post("/signup", Signup);
// router.post("/login", Login);
// router.post("/", userVerification);

router.get("/api/:category/todos",todoController.getTodos);
router.post("/api/:category/todos", todoController.addTodo);
router.delete("/api/:category/todos/:id", todoController.deleteTodo);
router.patch("/api/:category/todos/:id", todoController.editTodo);

router.get("/api/category", categoryController.getCategory);
router.post("/api/category/add", categoryController.addCategory);
router.delete("/api/category/:id", categoryController.deleteCategory);
router.patch("/api/category/:id", categoryController.editCategory);

module.exports = router;
