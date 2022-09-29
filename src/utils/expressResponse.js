
const successResponse =  (response, body, logger, code=200)=>{
    logger.info("success response invoked")
    return response.status(code).send(body)
}

const failureResponse =  (response, message, code, logger)=>{
    logger.info("failure response invoked")
    return response.status(code).send({error: message})
}

module.exports = {
    successResponse,
    failureResponse
}