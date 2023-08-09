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
      // const founditem = await Category.findOne({
      //   name: category,
      //   username: username,
      // });
      // const list = founditem.list;
      // list.map((li) => {
      //   if (li._id == id) {
      //     li.name = newTodo;
      //   }
      // });
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
  addcategory: (username, todo) => {
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
