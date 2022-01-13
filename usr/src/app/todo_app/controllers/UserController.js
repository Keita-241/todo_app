const express = require('express');
const Users = require('../models/Users');
const Views = '../views/'

module.exports = {
    todoList: function (req, res, next) {
        Users.getTodoList().then((result) => {
            const user = req.user.name;
            res.render(Views + 'list',{list: result, user: user});
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
    },

    delete_check: function (req, res, next) {
        Users.getTodoRow(req.query.id).then((result) => {
            res.render(Views + 'delete_check',{data: result.shift()});
        });
    },

    delete_done: function (req, res, next) {
        Users.deleteTodo(req.query.id).then((result) => {
            res.redirect(req.baseUrl + '/todo_app/list');
        });
    },

    sign_up: function (req, res, next) {
        // res.redirect(307, req.baseUrl + '/users/login');
        console.log("aaaaa");
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        console.log(name, email, password);
        Users.signUpUser(name, email, password).then((result) => {
            res.redirect(307, req.baseUrl + '/login');
        });
    },
}
