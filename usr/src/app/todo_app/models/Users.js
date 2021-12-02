const mysql = require('mysql');
const table = 'users';

module.exports = {

    getTodoList: function () {
        return new Promise ((resolve, reject) => {
        const con = mysql.createConnection({
                host: 'mysqldb',
                user: 'root',
                password: 'root',
                database: 'todo_app'
        });
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
}