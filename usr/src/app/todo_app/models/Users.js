const mysql = require('mysql');
var express = require('express');
var app = express();
var config = require('../config/default.json');

module.exports = {
    /**
     * DB接続
     * @returns (object) connect
     */
    createConnect: function () {
        const connect = mysql.createConnection(config.db);
        return connect;
    },

    /**
     * DBからTODOリスト取得
     * @returns (object) result
     */
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

    getTodoRow: function (id) {
        return new Promise ((resolve, reject) => {
        const con = this.createConnect();
        con.query(
            `select * from tasks where id=${id}`,  (err, result, fields) => {
            if ( err ) {
                reject(err);
            } else {
                resolve(result);
            }
            });
        con.end();
        });
    },

    /**
     * 新規タスク作成
     * @param {string} title 
     * @param {string} content 
     * @returns (object)
     */
    createTodo: function (title, content) {
        return new Promise ((resolve, reject) => {
        const con = this.createConnect();
        con.query(
            `insert into tasks (title, content) values ("${title}", "${content}")`,  (err, result, fields) => {
            if ( err ) {
                reject(err);
            } else {
                resolve(result);
            }
            });
        con.end();
        });
    },

    /**
     * タスク編集
     * @param {string} title 
     * @param {string} content 
     * @returns 
     */
    updateTodo: function (id, title, content) {
        return new Promise ((resolve, reject) => {
        const con = this.createConnect();
        con.query(
            `update tasks set title="${title}", content="${content}" where id=${id}`,  (err, result, fields) => {
            if ( err ) {
                reject(err);
            } else {
                console.log(result);
                resolve(result);
            }
            });
        con.end();
        });
    },
}