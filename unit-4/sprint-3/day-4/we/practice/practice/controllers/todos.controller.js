const { todoModel } = require("../models/todo.model");
//get
const todo_get = async (req, res) => {
  const todo_data = await todoModel.find();
  res.send(todo_data);
};
//post
const todo_post = async (req, res) => {
  try {
    const new_todo = new todoModel(req.body);
    await new_todo.save();
    res.status(201).send({ msg: "todo created successfully!" });
  } catch (error) {
    res.send({ error: error.message });
  }
};
//patch
const todo_patch = async (req, res) => {
  try {
    const update_todo = await todoModel.findByIdAndUpdate(
      req.params.updateID,
      req.body,
      { new: true }
    );
    console.log(update_todo);
    if (!update_todo) {
      res.status(404).send({ msg: "Todo doesn't not Found!" });
    } else {
      res.send({ msg: "todo updated  Successfully!" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const todo_delete = async (req, res) => {
  try {
    const deleted_todo = await todoModel.findByIdAndDelete(req.params.deleteID);
    console.log(deleted_todo);
    if (!deleted_todo) {
      res.status(404).send({ msg: "Todo not Found!" });
    } else {
      res.send("todo deleted Successfully!");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { todo_get, todo_post, todo_patch, todo_delete };
