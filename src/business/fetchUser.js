const data = require("../dao/database")
const { uuid } = require('uuidv4');
const status = require("../utils/constants/status")

async function fetchUser(request, logger){
    try{
        logger.info("Business: fetchUser invoked")
        await buildQuery(request, logger);
        
        const result = await data.fetchUserDocument(null, logger);
        if(result !== 0){
            return {data: result, code: 201}
        }
        else{
            return {data: "unable to add document", code: 400}
        }
        
    }catch(error){
        logger.error("Error in fetching record "+error)
        throw new Error("error in adding record")
    }
}

async function buildQuery(request, logger){
    logger.info("Business: buildQuery invoked")

    const {query} = request;
    const skip = query.skip? 0 : query.skip;
    const limit = query.limit? 0 : query.limit;
    
    console.log(query)
}

function prepareDocument(body, logger){
    logger.info("Business: prepareDocument invoked")
    const value = [body.username, body.email, body.firstname, body.lastname, status.ENABLED, body.address, uuid()]
    logger.info("inser doc "+value)
    return value
}

module.exports ={
    fetchUser
}