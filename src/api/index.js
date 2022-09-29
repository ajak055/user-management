const { urlencoded } = require("express")
require("dotenv").config({path:"./.env"});
const express = require("express")
const bunyan = require("bunyan")
const userBusiness = require("../business")
const {successResponse, failureResponse} = require("../utils/expressResponse")

const app = express()
app.use(express.json())
app.use(urlencoded({extended: false}))

const baseUrl = "/v1/user"
const logger = bunyan.createLogger({name: process.env.MODULE});


async function createUser(request, response){
    try{
        logger.info("createUser function invoked")
        const result = await userBusiness.createUser(request, logger);
        successResponse(response, result.data, logger, result.code);
    }catch(error){
        logger.error("API error: error in createUser API "+error)
        failureResponse(response, error.message, error.code, logger)
    }
}

async function fetchUser(request, response){
    try{
        logger.info("fetchUser function invoked")
        const result = await userBusiness.fetchUser(request, logger);
        successResponse(response, {users: result.data}, logger);
    }catch(error){
        logger.error("API error: error in fetchUser API "+error.message)
        failureResponse(response, error.message, error.code, logger)
    }
}

async function fetchUserbyId(request, response){
    try{
        logger.info("fetchUserbyId function invoked")
        const result = await userBusiness.fetchUserbyId(request, logger);
        successResponse(response, result[0], logger);
    }catch(error){
        logger.error("API error: error in fetchUser API "+error.message)
        failureResponse(response, error.message, error.code, logger)
    }
}

async function deleteUser(request, response){
    try{
        logger.info("deleteUser function invoked")
        const result = await userBusiness.deleteUser(request, logger);
        successResponse(response, result, logger);
    }catch(error){
        logger.error("API error: error in deleteUser API "+error.message)
        failureResponse(response, error.message, error.code, logger)
    }
}

async function updateUser(request, response){
    try{
        logger.info("updateUser function invoked")
        const result = await userBusiness.updateUser(request, logger);
        successResponse(response, result, logger);
    }catch(error){
        logger.error("API error: error in updateUser API "+error.message)
        failureResponse(response, error.message, error.code, logger)
    }
}


//routes

app.post(`${baseUrl}`, createUser)

app.get(`${baseUrl}`, fetchUser)

app.get(`${baseUrl}/:userId`, fetchUserbyId)

app.put(`${baseUrl}`, updateUser)

app.delete(`${baseUrl}/:userId`, deleteUser) 


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })