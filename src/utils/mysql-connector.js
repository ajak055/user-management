const e = require('express');
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
                    throw new Error('Unable to fetch record')
                }
                resolve(results)
              });
        });

        
}

module.exports = {
    insertRecord,
    fetchRecord
}
