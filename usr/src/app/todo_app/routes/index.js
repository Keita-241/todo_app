const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/UserController');
const todoValidator = require('../validators/todoValidator');
const Views = '../views/';

router.get('/todo_app/list', isAuthenticated, userController.todoList);
router.get('/todo_app/create', isAuthenticated, userController.create);
router.post('/todo_app/create_done',todoValidator, (req, res) => {
  // バリデーションの結果にエラーがあるかのチェック
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render(Views + 'create', {
        title: req.body.title,
        content: req.body.content,
        errorMessage: errors.array()
      })
    }
    userController.create_done(req,res);
});
router.get('/todo_app/update', isAuthenticated, userController.update);
router.post('/todo_app/update_done',todoValidator, (req, res) => {
  // バリデーションの結果にエラーがあるかのチェック
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('update', {
        data: {
          id: req.body.id,
          title: req.body.title,
          content: req.body.content,
        },
        errorMessage: errors.array()
      })
    }
    userController.update_done(req,res);
});
router.get('/todo_app/delete_check', isAuthenticated, userController.delete_check);
router.get('/todo_app/delete_done', isAuthenticated, userController.delete_done);

module.exports = router;
// 認証
function isAuthenticated(req, res, next){
  if (req.isAuthenticated()) {  // 認証済
      return next();
  }
  else {  // 認証されていない
      res.redirect('/users/login');  // ログイン画面に遷移
  }
}