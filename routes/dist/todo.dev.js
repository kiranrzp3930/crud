"use strict";

var router = require("express").Router();

var user = require("../models/users");

var todo = require("../models/users");

router.post("/create-todo", function _callee(req, res) {
  var username, name, status, description, foundusr, foudnusr_id, todobody, newtodo;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = req.headers.username;
          name = req.body.name;
          status = req.body.status;
          description = req.body.description;
          _context.next = 6;
          return regeneratorRuntime.awrap(user.findOne({
            username: username
          }));

        case 6:
          foundusr = _context.sent;
          foudnusr_id = foundusr.id;
          console.log("found a user and found:".concat(foundusr));
          todobody = {
            name: name,
            status: status,
            description: status
          };

          if (!foundusr) {
            _context.next = 18;
            break;
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(user.findOneAndUpdate({
            foundusr: foundusr
          }, {
            "$push": {
              userTodo: todobody
            }
          }, {
            "new": true
          }));

        case 13:
          newtodo = _context.sent;
          console.log("".concat(foundusr, " ").concat(todobody)); //adding into the array
          // const todobody={name,status,description};
          //     const done=user.updateOne({
          //       foundusr,
          //     },{
          //       $push:{
          //         userTodo:todobody,
          //       },
          //     },
          //     );
          //     console.log(done);

          res.status(200).json({
            msg: "added a todo! ".concat(newtodo)
          });
          _context.next = 20;
          break;

        case 18:
          console.log("oops!");
          res.status(400).json({
            msg: "oops!! please check everything"
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  });
}); // router.get("/todos", (req, res) => {
//     res.send({ todo: ["eat breakfast"] });
//   });

module.exports = router;