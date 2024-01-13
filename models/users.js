const mongoose = require("mongoose");

// const {todo}=require("./todo");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  userTodo:[{
    type: mongoose.Schema.Types.Object,
    ref:"todo",
  }],
});

const user = mongoose.model("user", userSchema);
module.exports = user;
