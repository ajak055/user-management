const data = require("../dao/database")
const { uuid } = require('uuidv4');
const status = require("../utils/constants/status")

async function fetchUser(request, logger){
        logger.info("Business: fetchUser invoked")
        const dataQuery = await buildQuery(request, logger);
        
        const result = await data.fetchUserDocument(dataQuery, logger);
        return {data: result}      
}

async function buildQuery(request, logger){
    logger.info("Business: buildQuery invoked")

    const {query} = request;
    var queryString = `SELECT * FROM `+process.env.USER_TABLE

    if(query.status){
        queryString += ` WHERE status=`+ parseInt(query.status)
    }
    if(!query.limit){
        queryString += ` limit 5`
    }else{
        queryString += ` limit `+parseInt(query.limit)
    }
    if(!query.skip){
        queryString += ` offset 0`
    }
    else{
        queryString += ` offset ` + parseInt(query.skip)
    }
    logger.debug("query string "+queryString)    
    return queryString
}

module.exports ={
    fetchUser
}