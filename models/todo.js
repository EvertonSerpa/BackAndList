const mongoose = require("mongoose");

const TodoModel = new mongoose.Schema({
  titulo: { type: String, require: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, required: true },
  status: { type: String, required: true },
  prazo: { type: Date, default: Date.now },
});

const Todo = mongoose.model("lista", TodoModel);

module.exports = Todo;
