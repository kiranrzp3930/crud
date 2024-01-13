const router = require("express").Router();
const user = require("../models/users");
const todo = require("../models/users");


router.post("/create-todo", async(req, res) => {
    const username=req.headers.username;
    const name=req.body.name;
    const status=req.body.status;
    const description=req.body.description;
    const foundusr=await user.findOne({
      username,
    })
    const foudnusr_id=foundusr.id;
    console.log(`found a user and found:${foundusr}`);
    const todobody={name:name,status:status,description:status};

      if (foundusr) {
       const newtodo =await user.findOneAndUpdate({
            foundusr,
       },{
        "$push":{
          userTodo:todobody
        },
        
      },{
        new:true
      }
      );
      console.log(`${foundusr} ${todobody}`);
  //adding into the array
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
    msg:`added a todo! ${newtodo}`
  })
} else{
      console.log("oops!");
      res.status(400).json({
        msg:"oops!! please check everything"
      })
    }
  });

// router.get("/todos", (req, res) => {
//     res.send({ todo: ["eat breakfast"] });
//   });
module.exports = router;
