const mysql  = require("mysql2/promise");

const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "Vikas@231",
    database: process.env.DB_NAME || "student_db",
});
module.exports = mysqlPool;