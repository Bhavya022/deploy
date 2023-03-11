//  import required modules from nodejs and build the server
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Set up middleware to parse request bodies as JSON
app.use(express.json());

const DB_PATH = path.join(__dirname, 'db.json');

// Read initial database state from file
let db = { todos: [] };
try {
  const data = fs.readFileSync(DB_PATH);
  db = JSON.parse(data);
} catch (err) {
  console.error(`Error reading database file: ${err}`);
}

// Write current database state to file
function saveDatabase() {
  fs.writeFile(DB_PATH, JSON.stringify(db), (err) => {
    if (err) console.error(`Error saving database file: ${err}`);
  });
}

// Get all todos
app.get('/', (req, res) => {
  res.json(db.todos);
});

// Create a new todo
app.post('/', (req, res) => {
  const { id, task, status } = req.body;
  if (typeof id !== 'number') {
    res.status(400).send('Invalid argument');
    return;
  }
  db.todos.push({ id, task, status });
  saveDatabase();
  res.json(db.todos);
});

// Update an existing todo by id
app.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { task, status } = req.body;
  const todoIndex = db.todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    res.status(400).send('Invalid argument');
    return;
  }
  db.todos[todoIndex] = { ...db.todos[todoIndex], task, status };
  saveDatabase();
  res.json(db.todos);
});

// Delete an existing todo by id
app.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = db.todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    res.status(400).send('Invalid argument');
    return;
  }
  db.todos.splice(todoIndex, 1);
  saveDatabase();
  res.json(db.todos);
});

// Handle non-existent files and directories
app.use((err, req, res, next) => {
  if (err.code === 'ENOENT') {
    res.status(404).send('File not found');
  } else {
    next(err);
  }
});



// export the server
module.exports = app;


// export the server
// eg.module.exports = app;
