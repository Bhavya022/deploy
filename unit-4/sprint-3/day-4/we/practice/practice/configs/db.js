const mongoose = require("mongoose");
require("dotenv").config();
const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`server is running at port ${process.env.PORT}`);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
    console.log("not able to connect to db");
  }
};

module.exports = { Connection };
