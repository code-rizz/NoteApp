const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const Routes = require("./routes/routes");
const authRouter = require("./routes/authRoutes");

// app.use((req, res, next) => {
//   const allowedOrigin = "http://localhost:3000";
//   res.header("Access-Control-Allow-Origin", allowedOrigin);
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

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
