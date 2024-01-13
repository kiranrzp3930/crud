const router = require("express").Router();
const  todo  = require("../models/todo");
const user = require("../models/users");


// router.post("/create-todo", (req, res) => {
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

router.post("/create-user", async (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  //finding a user
  const foundusr = await user.findOne({
    username
  });
  //post validation creating user.
  if (!foundusr) {
    const usertodo=user.create({
      name,
      username,
      password,
    },
    // {
    //   $push: {
    //     userTodo:usertodo._id
    //   },}
    );
    res.json({
      msg: "user created successfully",
    });
  } else {
    res.json({
      msg: "user already available,please retrigger the api with appropriate credentials",
    });
  }
});

router.post("/add-todo",async(req,res)=>{
  const username=req.headers.username;
  const name=req.body.name;
  const status=req.body.status;
  const description=req.body.description;
  const objectid=req.params.objectid;

  const newtodo={username:username,name:name,status:status,description:description};
  const obj=await user.findOneAndUpdate({
    username,
  },
  {
    "$push":{
      "userTodo":newtodo,
    }
  });
  console.log(obj);
  const jsonobj=JSON.parse(obj);
  res.status(400).json(`msg:${jsonobj}`);

})

router.get("/all-todos",async (req,res)=>{
  const username=req.headers.username
  const foundusr=await user.findOne({
    username
  })
  const jsonusr=JSON.stringify(foundusr.userTodo);
  
  // res.json({
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
  msg:`${jsonusr.split("}")}`
})
})

module.exports = router;
