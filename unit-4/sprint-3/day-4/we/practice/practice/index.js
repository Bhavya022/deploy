const express = require("express");
const { Connection } = require("./configs/db");
const { todoRoute } = require("./routes/todos.routes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/todo", todoRoute);

app.listen(process.env.PORT, () => {
  Connection();
});
