var express = require('express');
var router = express.Router();
const User = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {

  User.find((err,users)=>{
  res.json(users);
  });
});

router.use(express.json());
router.post('/',(req, res, next)=>{

  // let userObj = User.create(req.body,function(err,user){
  //   debugger;
  //   res.json(user);
  // });

   //try2

  let userObj = new User(req.body);
  userObj.save(function(err,user){
    res.json({sucess:true,user: user});
   })

});


module.exports = router;
