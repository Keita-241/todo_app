var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todo_app/list', userController.todoList);
router.get('/todo_app/create', userController.create);
router.post('/todo_app/create_done', userController.create_done);
router.get('/todo_app/update', userController.update);
router.post('/todo_app/update_done', userController.update_done);

module.exports = router;
