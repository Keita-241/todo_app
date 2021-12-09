const mysql = require('mysql');
const table = 'users';

module.exports = {
    createConnect: function () {
        const connect = mysql.createConnection({
            host: 'mysqldb',
            user: 'root',
            password: 'root',
            database: 'todo_app'
        });
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