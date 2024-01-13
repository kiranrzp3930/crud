"use strict";

var todo = require("./todo");

var user = require("./user");

var router = require("express").Router();

router.use(todo);
router.use(user);
module.exports = router;