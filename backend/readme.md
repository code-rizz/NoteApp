# Note app - backend

## Installation commands

```bash
mkdir backend
npm init -y
npm i nodemon express
```

### In package.json file
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```
### To Start the server
```bash
npm start
```
### index.js
```js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const Routes = require("./routes/routes");
const authRouter = require("./routes/authRoutes");
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', authRouter)
app.use("/", Routes);
try {
  mongoose.connect("mongodb://127.0.0.1:27017/noteapp");
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log("Server started on port 3001");
});
```
### routes/routes.js
```js
const express = require("express");
const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const {
  todoController,
  categoryController,
} = require("../controllers/controllers");

const router = express.Router();
router.use(userVerification);

router.get("/api/:category/todos",todoController.getTodos);
router.post("/api/:category/todos", todoController.addTodo);
router.delete("/api/:category/todos/:id", todoController.deleteTodo);
router.patch("/api/:category/todos/", todoController.editTodo);

router.get("/api/category", categoryController.getCategory);
router.post("/api/category/add", categoryController.addCategory);
router.delete("/api/category/:id", categoryController.deleteCategory);
router.patch("/api/category/:id", categoryController.editCategory);

module.exports = router;
```

### routes/authRoutes.js
```js
const express = require("express");
const { Signup, Login } = require("../Controllers/AuthController");

const authRouter = express.Router();

authRouter.post("/api/signup", Signup);
authRouter.post("/api/login", Login);

module.exports = authRouter;
```
### controllers/controllers.js
```js
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
```
### controllers/AuthController.js
```js
const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log("was at signup");
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    // next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: `Incorrect Email / Email doesn't exists` });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    // next();
  } catch (error) {
    console.error(error);
  }
};
```

 


