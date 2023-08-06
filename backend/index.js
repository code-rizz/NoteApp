const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", Routes);
try {
  mongoose.connect("mongodb://127.0.0.1:27017/noteapp");
} catch (error) {
  console.log(error);
}

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
