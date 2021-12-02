const express = require('express');
const Users = require('../models/Users');
const Views = '../views/'

module.exports = {
    todoList: function (req, res, next) {
        Users.getTodoList().then((result) => {
            res.render(Views + 'list',{list: result});
        });
    }
}
