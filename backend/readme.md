
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
### util/SecretToken.js
```js
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
```

### Middlewares/AuthMiddleware.js
```js
const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user){
        res.locals.user = user
         next()}
      else return res.json({ status: false })
    }
  })
}
```

### models/models.js
```js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  list: [itemSchema],
  username: {
    type: String,
    required: true,
  },
});

const Category = new mongoose.model("Category", categorySchema);

const todoModel = {
  getTodos: async (category, username) => {
    try{
    const todos = await Category.findOne(
      { name: category, username: username },
      { __v: 0 }
    );
    const list = todos.list;
    return list;
    }
    catch(err){
    return {status: false};
    }
  },
  addTodo: async (category, todo, username) => {
    const founditem = await Category.findOne({
      name: category,
      username: username,
    });
    const list = founditem.list;
    list.push({ name: todo.toString() });
    await Category.updateOne(
      { name: category, username: username },
      { $set: { list: list } }
    );
  },
  deleteTodo: async (category, id, username) => {
    try {
      const founditem = await Category.findOne({
        name: category,
        username: username,
      });
      const list = founditem.list;
      const result = list.filter((li) => li._id.toString() != id);
      await Category.findOneAndUpdate(
        { name: category, username: username },
        { $set: { list: result } }
      );
    } catch (error) {
      console.log(error);
    }
  },
  editTodo: async (category, newTodo, username) => {
    try {
      await Category.findOneAndUpdate(
        { name: category, username: username },
        { $set: { list: newTodo } }
      );
    } catch (error) {
      console.log(error);
    }
  },
};

const categoryModel = {
  getcategory: async (username) => {
    const categories = await Category.find(
      { username: username },
      { __v: 0, list: 0 }
    );
    return categories;
  },
  addcategory: async (username, todo) => {
    const newItem = new Category({ name: todo, username: username });
    newItem.save();
  },
  deletecategory: async (id) => {
    try {
      await Category.findByIdAndDelete({ _id: id });
    } catch (error) {
      console.log(error);
    }
  },
  editcategory: async (id, newTodo) => {
    try {
      console.log(id, newTodo);
      const update = await Category.updateOne(
        { _id: id },
        { $set: { name: newTodo } }
      );
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = { todoModel, categoryModel };
```
### models/UserModel.js
```js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);
```

### .env
```bash
MONGO_URL=mongodb+srv://<username>:<password>@cluster.czracq4.mongodb.net/?retryWrites=true&w=majority
PORT=4000
TOKEN_KEY=your secret token
```
