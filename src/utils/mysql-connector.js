const mysql = require('mysql2');
const config = require("../utils/constants/database-constants")


let dbConnection = '';

async function connectToDB(){
    dbConnection =  mysql.createConnection({
        host : "localhost",
        user: "root",
        password: "pass123",
        database: "usermanagement"
    })
    return dbConnection 
}

async function fetchConnectionString(){
    if(dbConnection != ''){
        return dbConnection
    }
    else{
       return await connectToDB();
    }
}

async function insertRecord(record, values, logger){
    logger.info("MYSQL: InsertRecord invoked")
        const connection = await fetchConnectionString()
        connection.query(record, values, function(err, results) {
        if(err){
            throw new Error('Unable to added record')
        }
        else{
            return results.affectedRows
        }
      });
}

async function fetchRecord(record, logger){
    logger.info("MYSQL: fetchRecord invoked")
        const connection = await fetchConnectionString();
        
        return new Promise(resolve => {
            connection.query(record, function(err, results) {
                if(err){
                    console.log("error in fetching record "+err)
                }
                resolve(results)
              });
        });     
}

async function deleteRecord(record, logger){
    logger.info("MYSQL: deleteRecord invoked")
        const connection = await fetchConnectionString();
        
        return new Promise(resolve => {
            connection.query(record, function(err, results) {
                if(err){
                    console.log("error in deleteRecord record "+err)
                }
                resolve(results)
              });
        });     
}

async function updateRecord(record, logger){
    logger.info("MYSQL: updateRecord invoked")
        const connection = await fetchConnectionString();
        
        return new Promise(resolve => {
            connection.query(record, function(err, results) {
                if(err){
                    console.log("error in updateRecord record "+err)
                }
                resolve(results)
              });
        });     
}


module.exports = {
    insertRecord,
    fetchRecord,
    deleteRecord,
    updateRecord
}
