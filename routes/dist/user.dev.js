"use strict";

var router = require("express").Router();

var todo = require("../models/todo");

var user = require("../models/users"); // router.post("/create-todo", (req, res) => {
//   const name = req.body.name;
//   const username = req.body.username;
//   const password = req.body.password;
//   user.create({
//     name,
//     username,
//     password,
//   });
// res.status(200).json({
//     msg: "user created!!! Have a happy journey creating the todos",
//   });
// });


router.post("/create-user", function _callee(req, res) {
  var name, username, password, foundusr, usertodo;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          name = req.body.name;
          username = req.body.username;
          password = req.body.password; //finding a user

          _context.next = 5;
          return regeneratorRuntime.awrap(user.findOne({
            username: username
          }));

        case 5:
          foundusr = _context.sent;

          //post validation creating user.
          if (!foundusr) {
            usertodo = user.create({
              name: name,
              username: username,
              password: password
            } // {
            //   $push: {
            //     userTodo:usertodo._id
            //   },}
            );
            res.json({
              msg: "user created successfully"
            });
          } else {
            res.json({
              msg: "user already available,please retrigger the api with appropriate credentials"
            });
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post("/add-todo", function _callee2(req, res) {
  var username, name, status, description, objectid, newtodo, obj, jsonobj;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          username = req.headers.username;
          name = req.body.name;
          status = req.body.status;
          description = req.body.description;
          objectid = req.params.objectid;
          newtodo = {
            username: username,
            name: name,
            status: status,
            description: description
          };
          _context2.next = 8;
          return regeneratorRuntime.awrap(user.findOneAndUpdate({
            username: username
          }, {
            "$push": {
              "userTodo": newtodo
            }
          }));

        case 8:
          obj = _context2.sent;
          console.log(obj);
          jsonobj = JSON.parse(obj);
          res.status(400).json("msg:".concat(jsonobj));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get("/all-todos", function _callee3(req, res) {
  var username, foundusr, jsonusr;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          username = req.headers.username;
          _context3.next = 3;
          return regeneratorRuntime.awrap(user.findOne({
            username: username
          }));

        case 3:
          foundusr = _context3.sent;
          jsonusr = JSON.stringify(foundusr.userTodo); // res.json({
          //   msg:`found user:${foundusr}`
          // })
          // console.log(foundusr);
          // const alltodos=foundusr.userTodo;
          // console.log(alltodos);
          // res.json({
          //   msg:`${alltodos}`
          // })
          // const alltodos=await todo.find({
          //   _id:{
          //     $in:foundusr.userTodo
          //   }
          // })
          // console.log(typeof(foundusr.userTodo));

          res.json({
            msg: "".concat(jsonusr.split("}"))
          });

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});
module.exports = router;