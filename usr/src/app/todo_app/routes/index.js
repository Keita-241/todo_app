const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/UserController')
const todoValidator = require('../validators/todoValidator');
const Views = '../views/'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todo_app/list', userController.todoList);
router.get('/todo_app/create', userController.create);
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
    userController.create_done;
});
router.get('/todo_app/update', userController.update);
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
    userController.update_done;
});
router.get('/todo_app/delete_check', userController.delete_check);
router.get('/todo_app/delete_done', userController.delete_done);

module.exports = router;
