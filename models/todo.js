const mongoose = require("mongoose");
const {user}=require("./users");

const todoSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ["completed", "in-complete"],
  },
  description: String,
});

const todo = mongoose.model("todo", todoSchema);
module.exports = todo;
