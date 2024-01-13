"use strict";

var express = require("express");

var app = express();

require("./db/db");

var route_index = require("./routes");

app.use(express.json());
app.use(route_index);
var PORT = 3000;
app.listen(PORT, function () {
  console.log("connected");
});