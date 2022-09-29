const data = require("../dao/database")
const { uuid } = require('uuidv4');
const status = require("../utils/constants/status")

async function fetchUserbyId(request, logger){
        logger.info("Business: fetchUserbyId invoked")
        const dataQuery = await buildQuery(request, logger);
        
        const result = await data.fetchUserDocument(dataQuery, logger);    
        return result
}

async function buildQuery(request, logger){
    logger.info("Business: buildQuery invoked")

    const {params} = request; 
    var queryString = `SELECT * FROM `+process.env.USER_TABLE+ ` WHERE userId='`+params.userId+`'`

    logger.debug("query string "+queryString)    
    return queryString
}

module.exports ={
    fetchUserbyId
}