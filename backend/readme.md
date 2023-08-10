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

app.listen(3001, () => {
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

 


