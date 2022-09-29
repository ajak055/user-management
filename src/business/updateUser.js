const data = require("../dao/database")
const { uuid } = require('uuidv4');
const status = require("../utils/constants/status")
const error = require("../utils/error")

async function updateUser(request, logger){
        logger.info("Business: updateUser invoked")
        const dataQuery = await buildQuery(request, logger);
        
        const result = await data.updateUserDocument(dataQuery, logger);
        if(result.affectedRows !==0){
            return {data: "user details updated successfully"}
        }
        throw new error.DatNotFoundError("userId doesn't exists")
}

async function buildQuery(request, logger){
    logger.info("Business: buildQuery invoked")

    const {params} = request; 
    var queryString = `DELETE FROM `+process.env.USER_TABLE+ ` WHERE userId='`+params.userId+`'`

    logger.debug("delete string "+queryString)    
    return queryString
}

module.exports={
    updateUser
}