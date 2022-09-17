const mysql = require('mysql');
const config = require("../utils/constants/database-constants")

const connection = mysql.createConnection({
    host : config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DB_NAME
})

//add caching for connection


