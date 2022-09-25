const data = require("../dao/database")
const { uuid } = require('uuidv4');
const status = require("../utils/constants/status")

async function createUser(request, logger){
    try{
        logger.info("Business: createUser invoked")
        const {body} = request;
        const document = prepareDocument(body, logger)
        const result = await data.createUserDocument(document, logger);
        if(result !== 0){
            return {data: "user added successfully", code: 201}
        }
        else{
            return {data: "unable to add document", code: 400}
        }
        
    }catch(error){
        console.log(error)
        throw new Error("error in adding record")
    }
}

async function validateRequest(request, logger){
    logger.info("Business: validateRequest invoked")

    //validate input

    //validate email regex

    //validate if emailid, username exists

}

function prepareDocument(body, logger){
    logger.info("Business: prepareDocument invoked")
    const value = [body.username, body.email, body.firstname, body.lastname, status.ENABLED, body.address, uuid()]
    logger.info("inser doc "+value)
    return value
}

module.exports ={
    createUser
}