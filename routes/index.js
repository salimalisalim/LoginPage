var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.session.user)
     next();
  else
    res.redirect('/login');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.session);
  res.render('index', { title: 'Express' });
  res.redirect('/login');
});
router.get('/login', function(req, res, next) {
  // console.log(req.session);
  if(req.session.user){
    res.redirect('/details');
  }else{
    res.render('login', { title: 'Express' });
  }
 
});
router.get('/details', ensureAuthenticated, function(req, res, next) {
  //console.log(req.session);
  //res.setHeader("Cache-control", "no-cache, no-Store, must-revalidate");
  res.render('details');
});

module.exports = router;
