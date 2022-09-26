const mysqldb = require("../utils/mysql-connector")
const config = require("../utils/constants/database-constants")



async function createUserDocument(userRecord, logger){
    logger.info("Data: createUser invoked")
    sqlQuery = `INSERT INTO `+config.MYSQL_USER_TABLE+` (username, email, firstname, lastname, status, address, userId) VALUES (?, ?, ?, ?, ?, ?, ?);`;
    logger.info("sql query "+sqlQuery)
    return mysqldb.insertRecord(sqlQuery, userRecord, logger);
}

async function fetchUserDocument(userRecord, logger){
    logger.info("Data: fetchUserDocument invoked")
    return await mysqldb.fetchRecord(userRecord, logger);
}

module.exports = {
    createUserDocument,
    fetchUserDocument
}
