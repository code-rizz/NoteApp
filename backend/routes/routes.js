const express = require('express');
const todoController = require('../controllers/controllers');


const router = express.Router();

router.get('/todos',todoController.getTodos);
router.post('/todo',todoController.addTodo);
router.delete('todos/:index',todoController.deleteTodo);
router.patch('todos/:index',todoController.editTodo);

module.exports=router;

