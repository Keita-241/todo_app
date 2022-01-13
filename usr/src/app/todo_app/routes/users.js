var express = require('express');
var router = express.Router();
const userController = require('../controllers/UserController');
const passport = require("passport");
const { validationResult } = require('express-validator');
const signUpValidator = require('../validators/signUpValidator');
const Views = '../views/';

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

router.get('/sign_up', function(req, res, next) {
  res.render('sign_up');
});

router.post('/signup_done', signUpValidator, function(req, res) {
  // バリデーションの結果にエラーがあるかのチェック
    // 失敗したらリダイレクト
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render(Views + 'sign_up', {
            name: req.body.name,
            email: req.body.email,
            errorMessage: errors.array()
        })
    }
    // 成功時の処理
    console.log("BBB");
    userController.sign_up(req,res);
});

module.exports = router;
