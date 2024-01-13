const todo = require("./todo");
const user = require("./user");
const router = require("express").Router();

router.use(todo);
router.use(user);

module.exports = router;
