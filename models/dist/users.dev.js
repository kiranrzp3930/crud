"use strict";

var mongoose = require("mongoose"); // const {todo}=require("./todo");


var userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  userTodo: [{
    type: mongoose.Schema.Types.Object,
    ref: "todo"
  }]
});
var user = mongoose.model("user", userSchema);
module.exports = user;