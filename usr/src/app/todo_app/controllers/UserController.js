const express = require('express');
const Users = require('../models/Users');
const Views = '../views/'

module.exports = {
    todoList: function (req, res, next) {
        Users.getTodoList().then((result) => {
            res.render(Views + 'list',{list: result});
        });
    },

    create: function (req, res, next) {
        res.render(Views + 'create');
    },

    create_done: function (req, res, next) {
        const title = req.body.title;
        const content = req.body.content;
        Users.createTodo(title, content).then((result) => {
            res.redirect(req.baseUrl + '/todo_app/list');
        });
    },

    update: function (req, res, next) {
        Users.getTodoRow(req.query.id).then((result) => {
            res.render(Views + 'update',{data: result.shift()});
        });

    },

    update_done: function (req, res, next) {
        const id = req.body.id;
        const title = req.body.title;
        const content = req.body.content;
        Users.updateTodo(id, title, content).then((result) => {
            res.redirect(req.baseUrl + '/todo_app/list');
        });
    }
}
