"use strict";

var mongoose = require("mongoose");

var _require = require("./users"),
    user = _require.user;

var todoSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    "enum": ["completed", "in-complete"]
  },
  description: String
});
var todo = mongoose.model("todo", todoSchema);
module.exports = todo;