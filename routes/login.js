var express = require('express');
var router = express.Router();

//username and password
const myusername = 'user'
const mypassword = 'Pass@123';

router.post('/', function(req, res,next) {

  if(req.body.userName === myusername && req.body.password === mypassword){

    req.session.user=req.body;

    
    res.redirect('/details');
  } else {
    error = "Wrong Username or Password"
    res.render('login',{error});

  // res.send("You entered wrong user name and password");
  }

});

module.exports = router;
