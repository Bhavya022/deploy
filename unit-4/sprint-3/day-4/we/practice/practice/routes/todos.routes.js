const express = require("express");
const {
  todo_get,
  todo_post,
  todo_patch,
  todo_delete,
} = require("../controllers/todos.controller");
const todoRoute = express.Router();

todoRoute.get("/", todo_get);
todoRoute.post("/", todo_post);
todoRoute.patch("/:updateID", todo_patch);
todoRoute.delete("/:deleteID", todo_delete);

module.exports = { todoRoute };
