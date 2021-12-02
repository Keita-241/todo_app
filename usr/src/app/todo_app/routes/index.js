var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todo_app/list', userController.todoList);

module.exports = router;
