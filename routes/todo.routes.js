const express = require('express');

const TodoController = require('./../controllers/todo.controller');

const router = express.Router();
const TodosController = new TodoController();

router.get('/', TodosController.getTodos);
router.get('/:id', TodosController.getTodoById);
router.post('/add', TodosController.createTodo)
router.put('/:id', TodosController.editTodo);
router.delete('/:id', TodosController.deleteTodo);
module.exports = router;