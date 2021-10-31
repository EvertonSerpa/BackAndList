const Todo = require("../models/todo");

class TodoService {
  findAll = async () => await Todo.find();

  findById = async (id) => {
    return await Todo.findById(id);
  };

  createTodo = async (todo) => {
    return await Todo.create(todo);
  };

  editTodo = async (id, todo) => {
    return await Todo.create(todo);
  };

  deleteTodo = async (id) => {
    return await Todo.deleteOne({ _id: id });
  };
}

module.exports = TodoService;
