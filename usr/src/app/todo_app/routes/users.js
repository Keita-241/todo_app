var express = require('express');
var router = express.Router();
const passport = require("passport");

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/users/login',  // 失敗したときの遷移先
    successRedirect: '/todo_app/list',  // 成功したときの遷移先
}));

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/users/login');
});

module.exports = router;
