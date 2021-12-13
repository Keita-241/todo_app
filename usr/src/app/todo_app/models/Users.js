const mysql = require('mysql');
var express = require('express');
var app = express();
var config = require('../config/' + app.get('env') + '.json');

module.exports = {
    createConnect: function () {
        const connect = mysql.createConnection(config.db);
        return connect;
    },

    getTodoList: function () {
        return new Promise ((resolve, reject) => {
        const con = this.createConnect();
        con.query(
            `select * from tasks`,  (err, result, fields) => {
            if ( err ) {
                reject(err);
            } else {
                resolve(result);
            }
            });
        con.end();
        });
    },

    createTodo: function (create_title, create_content) {
        return new Promise ((resolve, reject) => {
        const con = this.createConnect();
        con.query(
            `insert into tasks (title, content) values ("${create_title}", "${create_content}")`,  (err, result, fields) => {
            if ( err ) {
                reject(err);
            } else {
                resolve(result);
            }
            });
        con.end();
        });
    },
}