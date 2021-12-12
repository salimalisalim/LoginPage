var express = require('express');
//const { type } = require('express/lib/response');
var router = express.Router();

/* GET details page content */
// router.get('/', ensureAuthenticated, function(req, res) {
//   const user = req.session.user;
//   console.log(user);
// });
router.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
