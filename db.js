const mysql = require("mysql2");



const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Function7",
    database: "db-express-todos-mysql"

});

module.exports = pool.promise();


