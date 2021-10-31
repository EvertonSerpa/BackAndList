const mongoose = require("mongoose");

const TodoServices = require('./../services/todo.service');

const todoService = new TodoServices();

class TodoController {
  getTodos = async (req, res) => {
    const todo = await todoService.findAll();
    res.send(todo);
  };

  getTodoById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send("Id Invalido");
      return;
    }

    const todo = await todoService.findById(id);

    if (!todo) {
      res.status(404).send("Tarefa não encontada");
      return;
    }

    res.status(200).send(todo);
  };

  createTodo = async (req, res) => {
    const todo = req.body;
    const todosalva = await todoService
      .createTodo(todo)
      .then(() => {
        res.send({ message: `Tarefa criada ` });
      })
      .catch((err) =>
        res.status(500).send({ error: `erro no servidor: ${err}` })
      );
  };
  
  editTodo = async (req, res) => {
    const id = req.params.id;
    const todo = req.body;
    await todoService
      .editTodo(id, todo)
      .then(() => {
        res.status(200).send({ message: "Tarefa atualizada" });
      })
      .catch((err) =>
        res.status(500).send({ error: `erro no servidor: ${err}` })
      );
  };

  deleteTodo = async (req, res) => {
    const id = req.params.id;
    await todoService
      .deleteTodo(id)
      .then(() => res.status(200).send({ message: "Tarefa Excluida" }));
  };
}

module.exports = TodoController;
